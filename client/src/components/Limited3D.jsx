import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Model() {
  const ref = useRef();
  const gltf = useGLTF("/limited.glb");

  useFrame((state) => {
    if (!ref.current) return;

    // slow luxury rotation
    ref.current.rotation.y += 0.004;

    // floating motion
    ref.current.position.y =
  0.25 + Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return <primitive ref={ref} object={gltf.scene} scale={0.8} />;
}

export default function Limited3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 3, -5]} intensity={0.8} />

      {/* Glow Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
        <circleGeometry args={[3, 64]} />
        <meshStandardMaterial
          color="#222"
          transparent
          opacity={0.6}
        />
      </mesh>

      <Model />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
