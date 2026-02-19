import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function Product() {
  const ref = useRef();
  const model = useGLTF("/Sneaker.glb");

  useFrame((state) => {
    ref.current.rotation.y += 0.005;
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={2}
    />
  );
}



export default function Product3D() {
  return (
    <Canvas camera={{ position:[0,0,6], fov:50 }}>

  {/* Soft global light */}
  <ambientLight intensity={0.4} />

  {/* Main studio light */}
  <directionalLight
    position={[5,5,5]}
    intensity={1.5}
  />

  {/* Rim light from back (luxury highlight) */}
  <directionalLight
    position={[-5,3,-5]}
    intensity={0.8}
  />

  <Product/>
<OrbitControls
  enableZoom={false}
  autoRotate={false}
/>

</Canvas>

  );
}
