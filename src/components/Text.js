import { Center, Text3D, useFont, Text } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useState, useRef, useMemo } from "react";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

extend({ TextGeometry });

export default function TitleText({ size = 10 }) {
  const [hovered, hover] = useState(null);
  const ref = useRef();

  const font = useFont("/Inter_Bold.json");
  const config = useMemo(() => ({ font, size: 2.5, height: 2 }), [font]);

  




  return (
    <Select enabled={true}>
      <Center position={[-4, 7, 0]}>
        <group ref={ref} scale={[0.1 * size, 0.1 * size, 0.1]}>
          <mesh
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
          >
            <textGeometry args={["Johannes Walenta", config]} />
            {/* <meshNormalMaterial /> */}
            <meshStandardMaterial color="lightblue"></meshStandardMaterial>
          </mesh>
        </group>
      </Center>
    </Select>
  );
}
