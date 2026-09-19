import img12 from "figma:asset/33f1d1803db3ecb966fd4ee65a40ad9440621796.jpg";
import img13 from "figma:asset/268f8f6a159251e81251ae91745dabb6dea4cd50.jpg";
import img15 from "figma:asset/16d22acce858ad5284fe362f64d18f034b1a9c7c.jpg";
import img16 from "figma:asset/d0b7aa769cb6178dd07545ce3c3674214d094045.jpg";
import img112 from "figma:asset/1966571180428a55c01fb46133ce1655d080df55.jpg";
import img17 from "figma:asset/fd4b7f435d7c46161233bd55f05d26a57108ca94.jpg";
import { img11, img14, img111 } from "./svg-dr385";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-[7px]" data-name="Mask group">
      <div className="absolute h-[349px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[437px_349px] top-[7px] w-[466px]" data-name="1（首图） 1" style={{ maskImage: `url('${img11}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.14%] left-[-1.46%] max-w-none top-[-0.07%] w-full" src={img12} />
        </div>
      </div>
      <div className="absolute h-[583px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_92px] mask-size-[437px_349px] top-[-85px] w-[437px]" data-name="1_首图 1" style={{ maskImage: `url('${img11}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img13} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[475px] top-0" data-name="Mask group">
      <div className="absolute h-[472px] left-[467px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_0px] mask-size-[336px_472px] top-0 w-[354px]" data-name="1(首图) 1" style={{ maskImage: `url('${img14}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img15} />
      </div>
      <div className="absolute h-[472px] left-[466px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_0px] mask-size-[336px_472px] top-0 w-[354px]" data-name="1（首图） 3" style={{ maskImage: `url('${img14}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img16} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[849px] top-[7px]" data-name="Mask group">
      <div className="absolute left-[816px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[33px_80px] mask-size-[436px_349px] size-[472px] top-[-73px]" data-name="1(首图) (1) 1" style={{ maskImage: `url('${img111}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img112} />
      </div>
      <div className="absolute h-[582px] left-[849px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_77px] mask-size-[436px_349px] top-[-70px] w-[436px]" data-name="1(首图) 2" style={{ maskImage: `url('${img111}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img17} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
    </div>
  );
}