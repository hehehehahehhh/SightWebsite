import img83 from "figma:asset/ac006fa6adfba750491dadf76e333d833910eca3.jpg";
import img72 from "figma:asset/84fa63a408d8621fafdccf9c893d3c3668d0a119.jpg";
import img18 from "figma:asset/83dda83f73fd133f46d94c7661a6504d8fca6c90.jpg";
import img22227 from "figma:asset/0e24db84f45bba0461cd3acf3b1b8fc30cc2cd94.jpg";
import img46 from "figma:asset/2b99fed086d1117b02ada8382640637088241477.jpg";
import img31 from "figma:asset/e025732070920faf4ad9c8a34157bf5ebad91936.jpg";
import img54 from "figma:asset/d961c597c091336963e5efe7bab91fdbae8a6f2e.jpg";
import img63 from "figma:asset/8cb7b805c674a40a6bd14fd74c96003c7cf40405.jpg";
import { img82 } from "./svg-dym46";

function MaskGroup() {
  return (
    <div className="absolute contents left-[461px] top-[1260px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[438px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23px_0px] mask-size-[422px_592.81px] top-[1260px] w-[445px]" data-name="8 2" style={{ maskImage: `url('${img82}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img83} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[1260px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[-23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23px_0px] mask-size-[422px_592.81px] top-[1260px] w-[445px]" data-name="7 2" style={{ maskImage: `url('${img82}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img72} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[917px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[457px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[917px] top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[457px] top-[630px] w-[422px]" />
      <MaskGroup />
      <MaskGroup1 />
      <div className="absolute h-[150px] left-0 top-[221px] w-[422px]" data-name="1 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img18} />
      </div>
      <div className="absolute left-[457px] size-[422px] top-[85px]" data-name="2 2227">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22227} />
      </div>
      <div className="absolute left-0 size-[422px] top-[715px]" data-name="4 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img46} />
      </div>
      <div className="absolute left-[918px] size-[422px] top-[85px]" data-name="3（首图） 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img31} />
      </div>
      <div className="absolute left-[457px] size-[422px] top-[715px]" data-name="5 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img54} />
      </div>
      <div className="absolute left-[918px] size-[422px] top-[715px]" data-name="6 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img63} />
      </div>
    </div>
  );
}