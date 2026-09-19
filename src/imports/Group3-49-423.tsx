import imgIvory1 from "figma:asset/d0b7aa769cb6178dd07545ce3c3674214d094045.jpg";
import img12 from "figma:asset/fd4b7f435d7c46161233bd55f05d26a57108ca94.jpg";
import img11 from "figma:asset/268f8f6a159251e81251ae91745dabb6dea4cd50.jpg";
import { imgIvory } from "./svg-uhhbp";

function Ivory() {
  return (
    <div className="absolute contents left-[374px] top-0" data-name="Ivory">
      <div className="absolute h-[472px] left-[365px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_0px] mask-size-[336px_472px] top-0 w-[354px]" data-name="Ivory" style={{ maskImage: `url('${imgIvory}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIvory1} />
      </div>
    </div>
  );
}

function Ivory1() {
  return (
    <div className="absolute contents left-[748px] top-0" data-name="Ivory">
      <div className="absolute h-[582px] left-[698px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50px_61px] mask-size-[336px_472px] top-[-61px] w-[436px]" data-name="1(首图) 2" style={{ maskImage: `url('${imgIvory}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
      </div>
    </div>
  );
}

function Ivory2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Ivory">
      <div className="absolute h-[472px] left-[-9px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_0px] mask-size-[336px_472px] top-0 w-[354px]" data-name="1_首图 1" style={{ maskImage: `url('${imgIvory}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Ivory />
      <Ivory1 />
      <Ivory2 />
    </div>
  );
}