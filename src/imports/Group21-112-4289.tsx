import img19 from "figma:asset/aaf668970d11fb0f4258e3beeda6c06021750bd2.jpg";
import img22229 from "figma:asset/edec4854e1cd73e37f30a078977001122a61ce44.jpg";
import img333339 from "figma:asset/487b3a78e27c5e98ba52df452d2253936db88150.jpg";
import img48 from "figma:asset/e5f38c524929f10d22242375d17ed4eba89a33d4.jpg";
import img51 from "figma:asset/9b1ea9269295c28022e6996c4e6ac2d3db641573.jpg";
import img65 from "figma:asset/d361e5469cd584eb03dba082df28f27c97d4f31f.jpg";
import img84 from "figma:asset/37401a4e39da3457c2481394d1ad4390365e96bb.jpg";
import img75 from "figma:asset/265037db876a722f686d1d6c0bf59cb6d7a36599.jpg";
import imgWeb1Of41 from "figma:asset/0e695e17c3d48346cbd56a4f099795dc9037852a.jpg";
import imgWeb1Of21 from "figma:asset/0c7fc04f6f24df97cbb1c0f422bdbb9697520bd5.jpg";
import { img74 } from "./svg-auhy9";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-[1260px]" data-name="Mask group">
      <div className="absolute h-[593px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[422px_592.81px] top-[1260px] w-[445px]" data-name="7 4" style={{ maskImage: `url('${img74}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img75} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[1890px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[-12px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12px_0px] mask-size-[422px_592.81px] top-[1890px] w-[445px]" data-name="Web (1 of 4) 1" style={{ maskImage: `url('${img74}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWeb1Of41} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[917px] top-[1260px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[895px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22px_0px] mask-size-[422px_592.81px] top-[1260px] w-[444px]" data-name="Web (1 of 2) 1" style={{ maskImage: `url('${img74}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWeb1Of21} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[917px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[917px] top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[457px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[457px] top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[457px] top-[1260px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[630px] w-[422px]" />
      <div className="absolute left-0 size-[422px] top-[85px]" data-name="1 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img19} />
      </div>
      <div className="absolute left-[457px] size-[422px] top-[84px]" data-name="2 2229">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22229} />
      </div>
      <div className="absolute h-[316px] left-[917px] top-[137px] w-[421px]" data-name="3 33339">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333339} />
      </div>
      <div className="absolute h-[317px] left-0 top-[767px] w-[422px]" data-name="4 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img48} />
      </div>
      <div className="absolute left-[457px] size-[422px] top-[715px]" data-name="5（首图） 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img51} />
      </div>
      <div className="absolute h-[316px] left-[917px] top-[768px] w-[422px]" data-name="6 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img65} />
      </div>
      <div className="absolute h-[317px] left-[456px] top-[1397px] w-[423px]" data-name="8 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
      </div>
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
    </div>
  );
}