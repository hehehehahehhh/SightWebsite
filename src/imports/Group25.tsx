import img13 from "figma:asset/fd4b7f435d7c46161233bd55f05d26a57108ca94.jpg";
import img22233 from "figma:asset/f4311c0fcb321b37c2c1de64fae42985ccdafb67.jpg";
import img333343 from "figma:asset/883147556a0b7cc8596ac1c37bb1ff4906b45cd8.jpg";
import img58 from "figma:asset/12ccbff709c26fd29ab92feee47b199a7cfc7776.jpg";
import img410 from "figma:asset/3d991c19b12b1749d4e1e65e01b8ff6c20112840.jpg";
import { img12 } from "./svg-ts0u6";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[594px] left-[-13px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[13px_1px] mask-size-[422px_592.81px] top-[-1px] w-[445px]" data-name="1(首图) 2" style={{ maskImage: `url('${img12}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img13} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[457px] top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[457px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[422px_592.81px] top-0 w-[445px]" data-name="2 2233" style={{ maskImage: `url('${img12}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22233} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[918px] top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[895px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23px_0px] mask-size-[422px_592.81px] top-0 w-[445px]" data-name="3 33343" style={{ maskImage: `url('${img12}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333343} />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-[457px] top-[630px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[446px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_0px] mask-size-[422px_592.81px] top-[630px] w-[445px]" data-name="5 8" style={{ maskImage: `url('${img12}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img58} />
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
      <MaskGroup3 />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[630px] w-[422px]" />
      <div className="absolute h-[317px] left-0 top-[767px] w-[422px]" data-name="4 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img410} />
      </div>
    </div>
  );
}