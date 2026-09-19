import imgSample22 from "figma:asset/c29fc8733cc8d2d99da6b6dfe9d12464def696e5.jpg";
import { imgSample21 } from "./svg-7flol";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute h-[807px] left-[-3px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3px_220px] mask-size-[1079px_478px] top-[-220px] w-[1075px]" data-name="Sample-2 1" style={{ maskImage: `url('${imgSample21}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSample22} />
      </div>
    </div>
  );
}