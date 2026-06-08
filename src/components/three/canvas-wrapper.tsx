"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, type ComponentProps, type ReactNode } from "react";

type CanvasWrapperProps = ComponentProps<typeof Canvas> & {
  fallback?: ReactNode;
};

export function CanvasWrapper({
  children,
  fallback = null,
  ...canvasProps
}: CanvasWrapperProps) {
  return (
    <Canvas {...canvasProps}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </Canvas>
  );
}
