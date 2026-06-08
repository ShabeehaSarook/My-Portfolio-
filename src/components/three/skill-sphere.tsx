"use client";

import { useFrame } from "@react-three/fiber";
import { Float, Html, Line, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { CanvasWrapper } from "@/components/three/canvas-wrapper";

const Group: any = "group";
const Mesh: any = "mesh";
const SphereGeometry: any = "sphereGeometry";
const OctahedronGeometry: any = "octahedronGeometry";
const MeshStandardMaterial: any = "meshStandardMaterial";
const AmbientLight: any = "ambientLight";
const DirectionalLight: any = "directionalLight";
const PointLight: any = "pointLight";

const points = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST API",
  "MongoDB",
  "Python",
  "ML Models",
  "Auth",
  "Git",
  "CI/CD",
  "UI Systems",
];

const visibleLabelIndexes = new Set([0, 2, 3, 6, 10]);

function Nodes() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  const layout = useMemo(
    () => [
      [0, 0, 1.6],
      [1, 0, 1.2],
      [-1, 0, 1.1],
      [0, 1, 1.2],
      [0, -1, 1.3],
      [1, 1, 0.75],
      [-1, 1, 0.7],
      [1, -1, 0.8],
      [-1, -1, 0.85],
      [0.7, 0.7, -0.8],
      [-0.8, 0.6, -1],
      [0, 0, -1.5],
    ],
    [],
  );

  const connections = useMemo(
    () => [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 5],
      [2, 6],
      [3, 9],
      [4, 7],
      [5, 9],
      [6, 10],
      [7, 11],
      [8, 10],
      [9, 11],
    ],
    [],
  );

  return (
    <Group ref={ref}>
      <Mesh>
        <SphereGeometry args={[1.05, 44, 44]} />
        <MeshStandardMaterial
          color="#081126"
          emissive="#7c3aed"
          emissiveIntensity={0.12}
          wireframe
          roughness={0.2}
          metalness={0.35}
        />
      </Mesh>

      {connections.map(([from, to], index) => (
        <Line
          key={`${from}-${to}`}
          points={[
            layout[from] as [number, number, number],
            layout[to] as [number, number, number],
          ]}
          color={index % 2 === 0 ? "#00ffff" : "#14f195"}
          lineWidth={0.7}
          transparent
          opacity={0.24}
        />
      ))}

      {layout.map((position, index) => (
        <Float key={points[index]} speed={1.3 + index * 0.05} floatIntensity={2.3} rotationIntensity={1.8}>
          <Mesh position={position as [number, number, number]}>
            <OctahedronGeometry args={[0.16, 0]} />
            <MeshStandardMaterial
              color={index % 3 === 0 ? "#00ffff" : index % 3 === 1 ? "#14f195" : "#7c3aed"}
              emissive={index % 3 === 0 ? "#00ffff" : "#000000"}
              emissiveIntensity={0.35}
            />
          </Mesh>
          {visibleLabelIndexes.has(index) ? (
            <Html
              center
              distanceFactor={5.6}
              position={[
                (position as number[])[0] * 1.18,
                (position as number[])[1] * 1.18,
                (position as number[])[2] * 1.18,
              ]}
            >
              <span className="hidden rounded-full border border-cyan-300/20 bg-[#071022]/75 px-2 py-1 font-mono text-[0.52rem] uppercase tracking-[0.18em] text-cyan-100 shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:inline-flex">
                {points[index]}
              </span>
            </Html>
          ) : null}
        </Float>
      ))}
    </Group>
  );
}

export function SkillSphere() {
  return (
    <div className="scanline relative h-[26rem] overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.16),rgba(0,255,255,0.09),rgba(5,8,22,0.96)_66%)] shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:38px_38px]" />
      <CanvasWrapper camera={{ position: [0, 0, 4.6], fov: 50 }}>
        <AmbientLight intensity={0.35} />
        <DirectionalLight position={[4, 4, 4]} intensity={1.8} color="#ffffff" />
        <PointLight position={[0, 0, 4]} intensity={2.8} color="#00ffff" />
        <PointLight position={[-3, -2, -2]} intensity={1.8} color="#7c3aed" />
        <Nodes />
        <Sparkles count={28} scale={3.3} size={1.4} speed={0.4} color="#14f195" opacity={0.42} />
        <Stars radius={26} depth={20} count={1200} factor={2.5} fade speed={1} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </CanvasWrapper>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,8,22,0.75)_100%)]" />
    </div>
  );
}
