import imgIvory1 from "figma:asset/d0b7aa769cb6178dd07545ce3c3674214d094045.jpg";
import img12 from "figma:asset/fd4b7f435d7c46161233bd55f05d26a57108ca94.jpg";
import img11 from "figma:asset/268f8f6a159251e81251ae91745dabb6dea4cd50.jpg";
import { imgIvory } from "./svg-459ue";

function Ivory() {
  return (
    <div className="absolute contents left-[441.14px] top-0" data-name="Ivory">
      <div className="absolute h-[565.725px] left-[430.35px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.787px_0px] mask-size-[402.719px_565.724px] top-0 w-[424.293px]" data-name="Ivory" style={{ maskImage: `url('${imgIvory}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIvory1} />
      </div>
    </div>
  );
}

function Ivory1() {
  return (
    <div className="absolute contents left-[882.28px] top-0" data-name="Ivory">
      <div className="absolute h-[697.168px] left-[822.35px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[59.928px_73.113px] mask-size-[402.719px_565.724px] top-[-73.11px] w-[522.876px]" data-name="1(首图) 2" style={{ maskImage: `url('${imgIvory}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
      </div>
    </div>
  );
}

function Ivory2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Ivory">
      <div className="absolute h-[565.724px] left-[-10.79px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.787px_0px] mask-size-[402.719px_565.724px] top-0 w-[424.293px]" data-name="1_首图 1" style={{ maskImage: `url('${imgIvory}')` }}>
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