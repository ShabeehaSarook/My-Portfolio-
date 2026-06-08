"use client";

import { Float, OrbitControls } from "@react-three/drei";
import { CanvasWrapper } from "@/components/three/canvas-wrapper";

const Mesh: any = "mesh";
const IcosahedronGeometry: any = "icosahedronGeometry";
const MeshStandardMaterial: any = "meshStandardMaterial";

export function FloatingObjects() {
  return (
    <CanvasWrapper camera={{ position: [0, 0, 5] }}>
      {[
        [1.3, 0.9, 0],
        [-1.4, -0.8, 0.3],
        [0.2, 1.5, -0.4],
      ].map((position, index) => (
        <Float key={index} speed={1.4 + index * 0.2} floatIntensity={2} rotationIntensity={1.2}>
          <Mesh position={position as [number, number, number]}>
            <IcosahedronGeometry args={[0.18, 0]} />
            <MeshStandardMaterial color={index % 2 === 0 ? "#00ffff" : "#7c3aed"} />
          </Mesh>
        </Float>
      ))}
      <OrbitControls enableZoom={false} enablePan={false} />
    </CanvasWrapper>
  );
}
