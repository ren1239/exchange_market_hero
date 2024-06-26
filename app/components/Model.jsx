import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Imports everything from Three.js

export default function Model() {
  const targetRef = useRef();
  const { nodes } = useGLTF("/diamond.glb");
  const { viewport } = useThree();

  console.log(nodes);
  const meshName = "Box001_Material_#2_0";

  if (!nodes[meshName]) {
    console.error(`There is no Node named ${meshName} in this file`);
  } else {
    console.log(nodes[meshName]);
  }

  const scene = nodes[meshName];

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.geometry.center(center);
    scene.position.copy(center.negate());
  });

  const materialPropsSet = {
    thickness: 0.2,
    roughness: 0.1,
    transmission: 1,
    ior: 1.6,
    chromaticAberration: 0.1,
    backside: true,
  };

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.42, min: 0, max: 1 },
  //   backside: { value: true },
  // });

  useFrame(() => {
    if (targetRef.current) {
      targetRef.current.rotation.z += 0.01; // Add a null check and update rotation
      targetRef.current.rotation.y += 0.002; // Add a null check and update rotation
    }
  });

  return (
    <group scale={viewport.width / 5}>
      <mesh
        ref={targetRef}
        geometry={scene.geometry}
        rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
      >
        <MeshTransmissionMaterial {...materialPropsSet} />
      </mesh>
      <Text
        color={"white"}
        fontWeight={900}
        fontSize={0.9}
        position={[0, 0, -0.5]}
        letterSpacing={-0.09}

        // font="http://fonts.gstatic.com/s/abeezee/v9/mE5BOuZKGln_Ex0uYKpIaw.ttf" // Use the font
      >
        THE BLOCK
      </Text>
    </group>
  );
}
