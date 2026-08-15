import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";

interface LiquidChromeProps {
  preset?: "hero" | "about" | "experience" | "ring" | "network" | "sphere" | "perforated" | "triangle";
  interactive?: boolean;
  className?: string;
}

// ─── SHADER FOR REFLECTIVE LIQUID CHROME ────────────────────────
const LiquidChromeShader = {
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uDeform;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;

    // Simplex noise helper
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;

      // Dynamic vertex deformation based on noise and mouse position
      float noise = snoise(position * 1.5 + vec3(0.0, 0.0, uTime * 0.4));
      
      // Calculate distance from vertex to mouse force point (projected in 3D)
      vec3 mouseForcePoint = vec3(uMouse.x * 2.0, uMouse.y * 2.0, 1.0);
      float distToMouse = distance(position, mouseForcePoint);
      float mouseInfluence = smoothstep(2.5, 0.0, distToMouse) * uDeform;

      // Displace position along normal
      float displacement = (noise * 0.25) + (mouseInfluence * 0.45);
      vec3 displacedPosition = position + normal * displacement;

      vec4 mvPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    uniform float uTime;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);

      // Monochromatic chrome lighting (high contrast white/black reflections)
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
      
      // Specular highlights
      vec3 lightDir = normalize(vec3(2.0, 4.0, 3.0));
      vec3 halfDir = normalize(lightDir + viewDir);
      float spec = pow(max(dot(normal, halfDir), 0.0), 64.0);

      // Environment reflection simulation
      float envMap = sin(normal.x * 4.0 + uTime * 0.1) * cos(normal.y * 4.0) * sin(normal.z * 4.0);
      envMap = envMap * 0.5 + 0.5;

      // Monochromatic palette
      vec3 chromeBase = mix(vec3(0.03, 0.03, 0.03), vec3(0.9, 0.9, 0.95), envMap);
      vec3 finalColor = chromeBase + vec3(spec * 0.8) + vec3(fresnel * 0.45);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

// ─── SHADER MATERIAL COMPONENT ─────────────────────────────────
function ChromeMaterialMesh({
  preset,
  interactive,
}: {
  preset: string;
  interactive: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uDeform: { value: 0 },
    }),
    []
  );

  useEffect(() => {
    if (!interactive) return;

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;

      if (interactive) {
        // Smooth spring interpolation with damping
        mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
        mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;

        materialRef.current.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);
        
        // Calculate deformation force multiplier based on mouse distance/movement
        const speed = Math.abs(mouse.current.targetX - mouse.current.x) + Math.abs(mouse.current.targetY - mouse.current.y);
        materialRef.current.uniforms.uDeform.value += (0.6 + speed * 1.5 - materialRef.current.uniforms.uDeform.value) * 0.05;
      } else {
        // Slow auto-morphing for non-interactive preset cards
        materialRef.current.uniforms.uDeform.value = 0.35 + Math.sin(time * 0.5) * 0.15;
      }
    }

    if (meshRef.current) {
      // Slow rotation over time
      meshRef.current.rotation.y = time * 0.12;
      meshRef.current.rotation.x = time * 0.06;

      if (preset === "hero") {
        // Parallax scroll shift (if any) or responsive scale
        meshRef.current.scale.setScalar(1.25 + Math.sin(time * 0.2) * 0.05);
      }
    }
  });

  const geometry = useMemo(() => {
    switch (preset) {
      case "ring":
        return new THREE.TorusGeometry(1.1, 0.35, 48, 96);
      case "network":
        return new THREE.IcosahedronGeometry(1.2, 2);
      case "perforated":
        return new THREE.TorusKnotGeometry(0.85, 0.28, 96, 16);
      case "triangle":
        return new THREE.ConeGeometry(1.1, 1.7, 3, 48);
      case "hero":
        return new THREE.SphereGeometry(1.45, 80, 80);
      case "about":
        return new THREE.SphereGeometry(1.35, 64, 64);
      case "experience":
        return new THREE.SphereGeometry(1.25, 64, 64);
      case "sphere":
      default:
        return new THREE.SphereGeometry(1.2, 64, 64);
    }
  }, [preset]);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={LiquidChromeShader.vertexShader}
        fragmentShader={LiquidChromeShader.fragmentShader}
        uniforms={uniforms}
        wireframe={preset === "network"}
      />
    </mesh>
  );
}

export default function LiquidChrome({ preset = "hero", interactive = true, className = "" }: LiquidChromeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px 0px 200px 0px" });

  return (
    <div ref={containerRef} className={`w-full h-full relative overflow-visible ${className}`} style={{ minHeight: "220px" }}>
      <Canvas
        frameloop={isInView ? "always" : "never"}
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none", overflow: "visible" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <ChromeMaterialMesh preset={preset} interactive={interactive} />
      </Canvas>
    </div>
  );
}
