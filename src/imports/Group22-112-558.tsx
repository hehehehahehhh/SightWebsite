import img12 from "figma:asset/268f8f6a159251e81251ae91745dabb6dea4cd50.jpg";
import img22230 from "figma:asset/a66d3ead780027eefd357a4ac91cf08d38d78941.jpg";
import img333340 from "figma:asset/018a00abb1e35f22d6987cc38c162882d5c2f4d7.jpg";
import { img11 } from "./svg-p252n";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[-12px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12px_1px] mask-size-[422px_592.81px] top-[-1px] w-[445px]" data-name="1_首图 1" style={{ maskImage: `url('${img11}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[457px] top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[457px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_1px] mask-size-[422px_592.81px] top-[-1px] w-[445px]" data-name="2 2230" style={{ maskImage: `url('${img11}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22230} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[918px] top-0" data-name="Mask group">
      <div className="absolute h-[592px] left-[907px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_0px] mask-size-[422px_592.81px] top-0 w-[444px]" data-name="3 33340" style={{ maskImage: `url('${img11}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333340} />
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