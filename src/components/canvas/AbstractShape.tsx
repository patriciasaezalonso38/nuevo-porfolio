import { Float, MeshDistortMaterial, OrbitControls, Sphere, Torus } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';

function Sculpture() {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.18;
    group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.08;
  });

  return <group ref={group}>
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
      <Sphere args={[1.25, 64, 64]} scale={1.05}>
        <MeshDistortMaterial color="#9b5cff" roughness={0.12} metalness={0.38} distort={0.38} speed={2.2} emissive="#4d1a9e" emissiveIntensity={0.35} />
      </Sphere>
    </Float>
    <Torus args={[1.72, 0.025, 16, 128]} rotation={[Math.PI / 2.25, 0.1, 0]}>
      <meshBasicMaterial color="#25e6d2" transparent opacity={0.85} />
    </Torus>
    <Torus args={[1.92, 0.012, 12, 96]} rotation={[0.4, Math.PI / 2, 0]}>
      <meshBasicMaterial color="#ff4fd8" transparent opacity={0.9} />
    </Torus>
  </group>;
}

export default function AbstractShape() {
  return <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={1.7} />
    <directionalLight position={[4, 5, 4]} intensity={3.2} color="#fff5e8" />
    <pointLight position={[-3, -2, 3]} intensity={10} distance={8} color="#ff4fd8" />
    <Sculpture />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} rotateSpeed={0.45} />
  </Canvas>;
}
