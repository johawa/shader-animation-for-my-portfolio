export default function BackgroundPlane() {
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, -15]}>
      <planeGeometry args={[150, 150]}></planeGeometry>
      <meshBasicMaterial color="#ece0c9"></meshBasicMaterial>
    </mesh>
  );
}
