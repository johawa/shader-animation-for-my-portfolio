import SepiaPass from './SepiaPass';
import { forwardRef } from 'react';

export default forwardRef(function (props, ref) {
  const effect = new SepiaPass(props);

  return <primitive ref={ref} object={effect} />;
});
