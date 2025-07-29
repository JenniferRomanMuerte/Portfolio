import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

const texturePaths = [
  "/tech/html5.png",
  "/tech/css.png",
  "/tech/JavaScript.png",
  "/tech/React.png",
  "/tech/Java.png",
  "/tech/SQL.png",
];

function LogoCube() {
  const groupRef = useRef<THREE.Group>(null!);
  const textures = useLoader(THREE.TextureLoader, texturePaths);

  useFrame(() => {
    groupRef.current.rotation.y += 0.01;
    groupRef.current.rotation.x += 0.005;
  });

  return (
    <group ref={groupRef}>
      {/* Cubo gris con material que refleja luz y sombras */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.1} />
        <Edges threshold={15} color="#adadad" />
      </mesh>

      {/* Logos en planos flotantes */}
      {textures.map((texture, i) => {
        const positions = [
          [0, 0, 1.26],
          [0, 0, -1.26],
          [1.26, 0, 0],
          [-1.26, 0, 0],
          [0, 1.26, 0],
          [0, -1.26, 0],
        ];
        const rotations = [
          [0, 0, 0],
          [0, Math.PI, 0],
          [0, -Math.PI / 2, 0],
          [0, Math.PI / 2, 0],
          [-Math.PI / 2, 0, 0],
          [Math.PI / 2, 0, 0],
        ];

        return (
          <mesh
            key={i}
            position={positions[i] as [number, number, number]}
            rotation={rotations[i] as [number, number, number]}
            receiveShadow
          >
            <planeGeometry args={[2.4, 2.4]} />
            <meshBasicMaterial
              map={texture}
              transparent
              alphaTest={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function TechCube() {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Canvas camera={{ position: [5, 5, 5] }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <LogoCube />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
