import { Center, useFont } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

extend({ TextGeometry });

export default function TitleText({ size = 10 }) {
  const ref = useRef();

  const font = useFont("/Inter_Bold.json");
  const config = useMemo(() => ({ font, size: 2.5, height: 2 }), [font]);

  const configLeva = useControls({
    TextColor: "#f4fcff",
  });

  return (
    <Select enabled={true}>
      <Center position={[-4, 7, 0]}>
        <group ref={ref} scale={[0.1 * size, 0.1 * size, 0.1]}>
          <mesh>
            <textGeometry args={["Johannes Walenta", config]} />

            <meshStandardMaterial
              color={configLeva.TextColor}
            ></meshStandardMaterial>
          </mesh>
        </group>
      </Center>
    </Select>
  );
}
