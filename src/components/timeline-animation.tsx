'use client';
import * as THREE from 'three';
import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';

type TimelineEvent = {
  year: string;
  event: string;
  description: string;
};

type TimelineBoxProps = {
  position: [number, number, number];
  item: TimelineEvent;
};

function TimelineBox({ position, item }: TimelineBoxProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (ref.current && !hovered) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.2;
    }
  });

  const textPosition = useMemo(() => new THREE.Vector3(0, 1, 0), []);

  return (
    <mesh
      position={position}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? 'hotpink' : '#E8B91A'}
        emissive={hovered ? 'hotpink' : '#E8B91A'}
        emissiveIntensity={hovered ? 0.5 : 0.2}
      />
      {hovered && (
         <Text
            position={textPosition}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            textAlign="center"
          >
            {item.year}: {item.event}
          </Text>
      )}
    </mesh>
  );
}

type TimelineAnimationProps = {
    data: TimelineEvent[];
}

export function TimelineAnimation({ data }: TimelineAnimationProps) {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {data.map((item, index) => (
        <TimelineBox 
            key={item.year}
            position={[-6 + index * 4, 0, 0]} 
            item={item} />
      ))}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
