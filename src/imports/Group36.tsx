import imgMicroingredient1 from "figma:asset/29e1249a67483cc19d13cdd5cbf1916bbc30c8c1.jpg";
import img22239 from "figma:asset/9e9cf6e879619c7a7e82041ab044d604831b3576.jpg";
import img333353 from "figma:asset/aafa5f7e567a16559550d1ca8f058a94b40a115b.jpg";
import img420 from "figma:asset/09078596f7a88fa486c8d32619d002abf582f506.jpg";
import img517 from "figma:asset/2e6852d02f61e19fe6e7f685afb13941219e8908.jpg";
import img618 from "figma:asset/80ae476b50f83a9042f6ed08846acae92d56166c.jpg";
import { img617 } from "./svg-duhu5";

function MaskGroup() {
  return (
    <div className="absolute contents left-[920px] top-[630px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[909px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_0px] mask-size-[422px_592.811px] top-[630px] w-[444px]" data-name="6 17" style={{ maskImage: `url('${img617}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img618} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[460px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[920px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[460px] top-[630px] w-[422px]" />
      <div className="absolute h-[317px] left-0 top-[137px] w-[422px]" data-name="microingredient 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMicroingredient1} />
      </div>
      <div className="absolute h-[317px] left-[460px] top-[137px] w-[422px]" data-name="2 2239">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22239} />
      </div>
      <div className="absolute h-[317px] left-[920px] top-[137px] w-[422px]" data-name="3 33353">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333353} />
      </div>
      <div className="absolute h-[317px] left-0 top-[767px] w-[422px]" data-name="4 20">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img420} />
      </div>
      <div className="absolute h-[317px] left-[460px] top-[767px] w-[422px]" data-name="5 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img517} />
      </div>
      <MaskGroup />
    </div>
  );
}