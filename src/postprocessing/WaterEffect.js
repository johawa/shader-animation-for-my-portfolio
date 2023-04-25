import WaterPass from "./WaterPass";
import { forwardRef } from "react";

export default forwardRef(function (props, ref) {
  const effect = new WaterPass(props);

  return <primitive ref={ref} object={effect} />;
});
