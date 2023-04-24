import { Text3D, Center } from "@react-three/drei";

export default function TitleText() {
  return (
    <Center position={[0, 10, 2]}>
      <Text3D
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
        <meshStandardMaterial color="blue"/>
      </Text3D>
    </Center>
  );
}
