import { Canvas } from "@react-three/fiber";
import { Text3D as DreiText3D } from "@react-three/drei";
import { Suspense } from "react";

interface Text3DProps {
  text: string;
  fontUrl?: string;
  size?: number;
  position?: [number, number, number];
  color?: string;
  metalness?: number;
  roughness?: number;
}

export default function Text3D({
  text,
  fontUrl = "/fonts/Caveat_Regular.json",
  size = 2.8,
  position = [-10, -1.5, 0],
  color = "#ffffff",
  metalness = 0.1,
  roughness = 0.8,
}: Text3DProps) {
  return (
    <div className="text3d-container">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 2, 10]} />
        <Suspense fallback={null}>
          <DreiText3D
            font={fontUrl}
            size={size}
            height={0.3}
            position={position}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.01}
            bevelSegments={5}
          >
            {text}
            <meshStandardMaterial
              color={color}
              metalness={metalness}
              roughness={roughness}
            />
          </DreiText3D>
        </Suspense>
      </Canvas>
    </div>
  );
}
