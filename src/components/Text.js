import { Center, Text3D } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function TitleText() {
  const [hovered, hover] = useState(null);
  const ref = useRef();

  // useFrame((state) => {
  //   if (ref.current) {
  //     ref.current.position.x = THREE.MathUtils.lerp(
  //       ref.current.position.x,
  //       state.mouse.x * 2,
  //       0.1
  //     );
  //     ref.current.rotation.x = THREE.MathUtils.lerp(
  //       ref.current.rotation.x,
  //       state.mouse.y / 2,
  //       0.1
  //     );
  //     ref.current.rotation.y = 0.8;
  //   }
  // });

  return (
    <Center position={[0, 10, 2]}>
      <Select enabled={hovered}>
        <Text3D
          ref={ref}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/Inter_Bold.json"
        >
          {`Johannes Walenta`}
          <meshStandardMaterial color="lightblue" />
        </Text3D>
      </Select>
    </Center>
  );
}
