"use client";

import { CanvasWrapper } from "@/components/three/canvas-wrapper";

const AmbientLight: any = "ambientLight";
const DirectionalLight: any = "directionalLight";
const PointLight: any = "pointLight";

export function Lights() {
  return (
    <CanvasWrapper camera={{ position: [0, 0, 4] }}>
      <AmbientLight intensity={0.4} />
      <DirectionalLight position={[4, 5, 5]} intensity={1.8} color="#ffffff" />
      <PointLight position={[-4, 1, 2]} intensity={3} color="#00ffff" />
      <PointLight position={[4, -1, 2]} intensity={2.4} color="#7c3aed" />
    </CanvasWrapper>
  );
}
