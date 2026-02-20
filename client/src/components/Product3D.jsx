import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

/* =========================
   3D MODEL COMPONENT
========================= */
function Product() {
  const ref = useRef();

  // load model
  const gltf = useGLTF("/sneaker.glb");

  // clone model (prevents multiple render crash)
  const model = clone(gltf.scene);

  useFrame((state) => {
    // VERY IMPORTANT SAFETY CHECK
    if (!ref.current) return;

    // rotation animation
    ref.current.rotation.y += 0.005;

    // floating animation
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.3 - 0.6; // slightly lower
  });

  return (
    <primitive
      ref={ref}
      object={model}
      scale={0.5}   // smaller size so it fits screen
    />
  );
}

/* =========================
   MAIN CANVAS
========================= */
export default function Product3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      
      {/* LIGHTING */}
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
      />

      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.8}
      />

      {/* VERY IMPORTANT — Prevents page crash */}
      <Suspense fallback={null}>
        <Product />
      </Suspense>

      {/* Orbit Controls */}
      <OrbitControls
        enableZoom={false}
        autoRotate={false}
      />
    </Canvas>
  );
}
