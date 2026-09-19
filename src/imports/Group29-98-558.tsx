import img42 from "figma:asset/8358ee8ccc57eab575acb6aa85486dbb0f67518d.jpg";
import img62 from "figma:asset/6f54ec063dcece9de1b97672e03bc803389ac98d.jpg";
import img15 from "figma:asset/026c5a03c79211362696024424525d04b6d6ec84.jpg";
import img22224 from "figma:asset/c2a268fa99d50a9b78834ff9feb82ea755ec96f4.jpg";
import img52 from "figma:asset/78d4176b2c93de247679a829baa49a0b2291b0e7.jpg";
import img333335 from "figma:asset/32fad50319b0a3bc0babdf69fef49a357ce4f55f.jpg";
import { img41, img61 } from "./svg-4lqpc";

function MaskGroup() {
  return (
    <div className="absolute contents left-[917px] top-[630px]" data-name="Mask group">
      <div className="absolute h-[591.806px] left-[905.22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.778px_0px] mask-size-[421px_591.405px] top-[630px] w-[444.933px]" data-name="4 1" style={{ maskImage: `url('${img41}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[630px]" data-name="Mask group">
      <div className="absolute h-[595.046px] left-[-11.81px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.807px_1.608px] mask-size-[422px_592.81px] top-[628.39px] w-[446.285px]" data-name="6 1" style={{ maskImage: `url('${img61}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img62} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <MaskGroup />
      <MaskGroup1 />
      <div className="absolute bg-white h-[592.81px] left-[457px] top-0 w-[422px]" />
      <div className="absolute bg-white h-[592.81px] left-[457px] top-[630px] w-[422px]" />
      <div className="absolute bg-white h-[592.81px] left-[917px] top-0 w-[422px]" />
      <div className="absolute bg-white h-[592.81px] left-0 top-0 w-[422px]" />
      <div className="absolute h-[317px] left-0 top-[137px] w-[422px]" data-name="1（首图） 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img15} />
      </div>
      <div className="absolute h-[317px] left-[457px] top-[137px] w-[422px]" data-name="2 2224">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22224} />
      </div>
      <div className="absolute h-[318px] left-[457px] top-[767px] w-[421px]" data-name="5 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img52} />
      </div>
      <div className="absolute h-[317px] left-[917px] top-[137px] w-[423px]" data-name="3 33335">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333335} />
      </div>
    </div>
  );
}