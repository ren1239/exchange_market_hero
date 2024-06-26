import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model.jsx";
import { Environment, OrbitControls, SpotLight } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas style={{ backgroundColor: "black" }}>
      <Model />
      <OrbitControls />
      <SpotLight
        distance={9}
        position={[0, 0, 2]}
        angle={0.95}
        attenuation={5}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      />{" "}
      <directionalLight intensity={10} position={[0, 0, 1]} />
      <Environment preset="city" />
    </Canvas>
  );
}
