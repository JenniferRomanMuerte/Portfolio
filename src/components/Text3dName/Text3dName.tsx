import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { Suspense } from "react";

export default function Text3DName() {
  return (
    <div className="text3d-container">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <Text3D
            font="/fonts/Caveat_Regular.json"
            size={2.8}
            height={0.3}
            position={[-10, -1.5, 0]}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.01}
            bevelSegments={5}
          >
            Jennifer Román
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.1}
              roughness={0.8}
            />
          </Text3D>
        </Suspense>
      </Canvas>
    </div>
  );
}
