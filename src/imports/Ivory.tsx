import imgIvory1 from "figma:asset/d0b7aa769cb6178dd07545ce3c3674214d094045.jpg";
import { imgIvory } from "./svg-etcs2";

export default function Ivory() {
  return (
    <div className="relative size-full" data-name="Ivory">
      <div className="absolute h-[472px] left-[-9px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_0px] mask-size-[336px_472px] top-0 w-[354px]" data-name="Ivory" style={{ maskImage: `url('${imgIvory}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIvory1} />
      </div>
    </div>
  );
}