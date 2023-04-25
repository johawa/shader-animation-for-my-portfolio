import React, { useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { DoubleSide } from "three";
import { useControls } from "leva";

export default function Explosion(props) {
  const { nodes, materials } = useGLTF("/expolsion_expanded.glb");

  const config = useControls({
    color: "#413a3a",
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        scale={props.scale || 1.0}
        position={[0, -10, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Cube_cell005.geometry}
        // material={materials.Rock}
      >
        <MeshTransmissionMaterial
          alphaToCoverage={true}
          transparent={true}
          side={DoubleSide}
          envMapIntensity={0}
          roughness={0.2}
          ior={1.5}
          thickness={0.205}
          transmission={1}
          chromaticAberration={1}
          anisotropy={10}
          color={"#413a3a"}
          emissive={"#413a3a"}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/expolsion_expanded.glb");
