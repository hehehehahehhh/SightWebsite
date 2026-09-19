import img8Jpg2 from "figma:asset/6674bcfff676ae3592b76aa48633c272a6cc9aa5.jpg";
import { img8Jpg1 } from "./svg-84mbm";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute h-[348px] left-[-14px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14px_-1px] mask-size-[437px_349px] top-px w-[465px]" data-name="8.jpg（首图） 1" style={{ maskImage: `url('${img8Jpg1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8Jpg2} />
      </div>
    </div>
  );
}