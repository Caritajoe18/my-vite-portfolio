import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function MorphingShape({ position, color, delay = 0 }: { position: [number, number, number], color: string, delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [morphTarget, setMorphTarget] = useState(0);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime() + delay;
    
    // Rotate
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Float
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.3;
    
    // Morph between shapes
    const morphValue = (Math.sin(time * 0.3) + 1) / 2;
    setMorphTarget(morphValue);
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      {morphTarget < 0.33 ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : morphTarget < 0.66 ? (
        <octahedronGeometry args={[0.7]} />
      ) : (
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
      )}
      <meshStandardMaterial color={color} wireframe opacity={0.6} transparent />
    </mesh>
  );
}

export default function MorphingShapes() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <MorphingShape position={[1.5, 0.5, 0]} color="#a855f7" delay={0} />
        <MorphingShape position={[-1.5, -0.5, 0]} color="#3b82f6" delay={1} />
        <MorphingShape position={[0, 1.5, -1]} color="#eab308" delay={2} />
        <MorphingShape position={[0.8, -1.2, 0.5]} color="#22c55e" delay={3} />
      </Canvas>
    </div>
  );
}
