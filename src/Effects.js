import {
  EffectComposer,
  DepthOfField,
  DotScreen,
  SelectiveBloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { WaterPass } from "./postprocessing/Waterpass";
import { extend } from "@react-three/fiber";

extend({ WaterPass });

export default function Effects() {
  return (
    <EffectComposer>
      <SelectiveBloom
        mipmapBlur
        radius={0.75}
        luminanceThreshold={0.2}
        intensity={2}
      />

      {/* <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <DotScreen blendFunction={BlendFunction.NORMAL} scale={0.9} />     
      <Noise opacity={0.02} /> */}

      {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      {/* <waterPass attachArray="passes" factor={1.5} /> */}
    </EffectComposer>
  );
}
