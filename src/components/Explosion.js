import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Explosion(props) {
  const { nodes, materials } = useGLTF("/expolsion_expanded.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        scale={props.scale || 1.0}
        position={[0,-10,0]}
        castShadow
        receiveShadow
        geometry={nodes.Cube_cell005.geometry}
        material={materials.Rock}
      />
    </group>
  );
}

useGLTF.preload("/expolsion_expanded.glb");
