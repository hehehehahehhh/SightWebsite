import imgSample22 from "figma:asset/c29fc8733cc8d2d99da6b6dfe9d12464def696e5.jpg";
import img3333331 from "figma:asset/0d1bec016e8dcb93016ad8d91e9e9195dca70ec8.jpg";
import { imgSample21 } from "./svg-sto9z";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-[509px]" data-name="Mask group">
      <div className="absolute h-[811px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_224px] mask-size-[1079px_478px] top-[285px] w-[1079px]" data-name="Sample-2 1" style={{ maskImage: `url('${imgSample21}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSample22} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[813px] left-[-3px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3px_254px] mask-size-[1079px_478px] top-[-254px] w-[1082px]" data-name="333333 1" style={{ maskImage: `url('${imgSample21}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3333331} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <MaskGroup />
      <MaskGroup1 />
    </div>
  );
}