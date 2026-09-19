import img111 from "figma:asset/afb2251a0c87aae4eb927e3798b5f2dd6314487a.jpg";
import img22232 from "figma:asset/0d30b6e5d83db1723e864b7c5f1832616839ca03.jpg";
import img41 from "figma:asset/cf8754a44433912fa27fdd7118cc604f9630931e.jpg";
import img57 from "figma:asset/750a80f4de3c7bea8d9e6cdfbe4af212559986ce.jpg";
import img67 from "figma:asset/7b8dab69f0a3d1cf54aacb1823a2cc7969c751b2.jpg";
import img333342 from "figma:asset/d9c4810bec42751ad3c300140d7802d7ba91ee43.jpg";
import { img110 } from "./svg-5yg57";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[-23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23px_0px] mask-size-[422px_592.81px] top-0 w-[445px]" data-name="1 10" style={{ maskImage: `url('${img110}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img111} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[457px] top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[434px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23px_0px] mask-size-[422px_592.81px] top-0 w-[445px]" data-name="2 2232" style={{ maskImage: `url('${img110}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22232} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-0 top-[630px]" data-name="Mask group">
      <div className="absolute h-[594px] left-[-12px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12px_1px] mask-size-[422px_592.81px] top-[629px] w-[446px]" data-name="4（首图） 1" style={{ maskImage: `url('${img110}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-[457px] top-[630px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[445px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12px_0px] mask-size-[422px_592.81px] top-[630px] w-[445px]" data-name="5 7" style={{ maskImage: `url('${img110}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img57} />
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents left-[918px] top-[630px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[918px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[422px_592.81px] top-[630px] w-[444px]" data-name="6 7" style={{ maskImage: `url('${img110}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img67} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[630px]">
      <MaskGroup2 />
      <MaskGroup3 />
      <MaskGroup4 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <MaskGroup />
      <MaskGroup1 />
      <Group />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[918px] top-0 w-[422px]" />
      <div className="absolute h-[317px] left-[918px] top-[137px] w-[422px]" data-name="3 33342">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333342} />
      </div>
    </div>
  );
}