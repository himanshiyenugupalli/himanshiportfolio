import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll, useReducedMotion } from "framer-motion";
import * as THREE from "three";

function HeadphonesModel({ scrollProgress, shouldReduceMotion }: { scrollProgress: any; shouldReduceMotion: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  
  const materialProps = {
    color: "#e6c9a0",
    metalness: 0.9,
    roughness: 0.2,
  };

  useFrame((state) => {
    if (!meshRef.current) return;

    let targetRotY = 0;
    let targetRotX = 0;

    if (shouldReduceMotion) {
      const time = state.clock.getElapsedTime();
      targetRotY = time * 0.15;
      targetRotX = Math.sin(time * 0.5) * 0.1;
    } else {
      const progress = scrollProgress.get();
      targetRotY = progress * Math.PI * 2;
      targetRotX = Math.sin(progress * Math.PI) * 0.25;
    }

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotY,
      0.08
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotX,
      0.08
    );
  });

  return (
    <group ref={meshRef} scale={0.95}>
      {/* Headband (Torus) */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.08, 32, 64, Math.PI]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Left Cup */}
      <group position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh>
          <cylinderGeometry args={[0.35, 0.35, 0.18, 32]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
        <mesh position={[0, -0.06, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.08, 32]} />
          <meshStandardMaterial color="#222" roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.09, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.12, 16]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      </group>

      {/* Right Cup */}
      <group position={[1.2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh>
          <cylinderGeometry args={[0.35, 0.35, 0.18, 32]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
        <mesh position={[0, -0.06, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.08, 32]} />
          <meshStandardMaterial color="#222" roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.09, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.12, 16]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      </group>
    </group>
  );
}

interface ChromeHeadphonesProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function ChromeHeadphones({ sectionRef }: ChromeHeadphonesProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <hemisphereLight intensity={0.4} color="#ffffff" groundColor="#222222" />
        <directionalLight position={[5, 10, 5]} intensity={1.8} />
        <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#eed7b5" />
        <pointLight position={[0, -2, 3]} intensity={0.8} />
        
        <HeadphonesModel 
          scrollProgress={scrollYProgress} 
          shouldReduceMotion={shouldReduceMotion} 
        />
      </Canvas>
    </div>
  );
}
