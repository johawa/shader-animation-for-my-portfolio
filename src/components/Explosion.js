import { useGLTF } from "@react-three/drei";
import React from "react";

export default function Explosion(props) {
  const { nodes, materials } = useGLTF("/e_min.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        scale={props.scale || 1.0}
        position={[0, -10, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Cube_cell.geometry}
        material={materials.Rock}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/e_min.glb");
