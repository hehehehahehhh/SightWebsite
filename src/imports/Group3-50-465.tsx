import imgIvory1 from "figma:asset/d0b7aa769cb6178dd07545ce3c3674214d094045.jpg";
import img12 from "figma:asset/fd4b7f435d7c46161233bd55f05d26a57108ca94.jpg";
import img11 from "figma:asset/268f8f6a159251e81251ae91745dabb6dea4cd50.jpg";
import { imgIvory } from "./svg-ccu7l";

function Ivory() {
  return (
    <div className="absolute contents left-[443.35px] top-0" data-name="Ivory">
      <div className="absolute h-[559.52px] left-[432.68px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.669px_0px] mask-size-[398.302px_559.52px] top-0 w-[419.64px]" data-name="Ivory" style={{ maskImage: `url('${imgIvory}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIvory1} />
      </div>
    </div>
  );
}

function Ivory1() {
  return (
    <div className="absolute contents left-[886.7px] top-0" data-name="Ivory">
      <div className="absolute h-[689.522px] left-[827.43px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[59.271px_72.311px] mask-size-[398.302px_559.52px] top-[-72.31px] w-[517.141px]" data-name="1(首图) 2" style={{ maskImage: `url('${imgIvory}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
      </div>
    </div>
  );
}

function Ivory2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Ivory">
      <div className="absolute h-[559.52px] left-[-10.67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.669px_0px] mask-size-[398.302px_559.52px] top-0 w-[419.64px]" data-name="1_首图 1" style={{ maskImage: `url('${imgIvory}')` }}>
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