import imgWushiland2 from "figma:asset/94928c6342b4a5fd1e3d3c87b5571bae7b14423f.jpg";
import img114 from "figma:asset/e1b24b401fc19bdd13f331682b5aac3263fc1e81.jpg";
import img22238 from "figma:asset/62e5dc0d7c37fb6a0fc3fc8cb6d1f87f942e6d0f.jpg";
import img333352 from "figma:asset/ab6565d002a407ad09160fb8043095ed507de548.jpg";
import img419 from "figma:asset/e938cdc860aefa6e75e0afc983e88decca9f1da0.jpg";
import img517 from "figma:asset/a3f57ac9742f08861946ced9a009732a31f7dd7e.jpg";
import img616 from "figma:asset/4fdf1c32202d7f8ffdb4685a7453717c6242eafe.jpg";
import img714 from "figma:asset/e3f958a538344dabca6bf2624061d94068947c15.jpg";
import { imgWushiland1, img516, img713 } from "./svg-xndfp";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[-12px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12px_0px] mask-size-[422px_592.811px] top-0 w-[445px]" data-name="wushiland 1" style={{ maskImage: `url('${imgWushiland1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWushiland2} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[918px] top-[630px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[906px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12px_0px] mask-size-[422px_592.811px] top-[630px] w-[445px]" data-name="5 16" style={{ maskImage: `url('${img516}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img517} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[457px] top-[1260px]" data-name="Mask group">
      <div className="absolute h-[586px] left-[439px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[18px_-7px] mask-size-[422px_592.811px] top-[1267px] w-[440px]" data-name="7 13" style={{ maskImage: `url('${img713}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img714} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[918px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[457px] top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[457px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[1260px] w-[422px]" />
      <MaskGroup />
      <div className="absolute left-[457px] size-[422px] top-[85px]" data-name="1 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img114} />
      </div>
      <div className="absolute left-[918px] size-[422px] top-[85px]" data-name="2 2238">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22238} />
      </div>
      <div className="absolute left-0 size-[422px] top-[716px]" data-name="3 33352">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333352} />
      </div>
      <div className="absolute left-[457px] size-[422px] top-[715px]" data-name="4 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img419} />
      </div>
      <MaskGroup1 />
      <div className="absolute left-0 size-[422px] top-[1345px]" data-name="6 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img616} />
      </div>
      <MaskGroup2 />
    </div>
  );
}