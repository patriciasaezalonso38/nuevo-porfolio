import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import type { Mesh } from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<Mesh | null>(null);
  const materialRef = useRef<React.ComponentRef<typeof MeshDistortMaterial> | null>(null);
  useFrame((state) => {
    if (!sphereRef.current || !materialRef.current) return;
    const t = state.clock.getElapsedTime();
    sphereRef.current.position.y = Math.sin(t) * 0.2;
    materialRef.current.distort = 0.4 + Math.sin(t) * 0.2;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#A855F7"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

export default function AbstractShape() {
  return (
    <div className="h-full w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
