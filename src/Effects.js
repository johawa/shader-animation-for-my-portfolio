import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { WaterPass } from "./postprocessing/Waterpass";
import { extend } from "@react-three/fiber";

extend({ WaterPass });

export default function Effects() {
  return (
    <EffectComposer>
      {/* <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      /> */}
      {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
      {/* <Noise opacity={0.02} /> */}
      {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      {/* <waterPass attachArray="passes" factor={1.5} /> */}
    </EffectComposer>
  );
}
