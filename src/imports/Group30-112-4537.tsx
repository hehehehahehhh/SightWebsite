import img113 from "figma:asset/ca0425ebda991a0863d2e3bd0ef9ec51cd082c15.jpg";
import img22236 from "figma:asset/2c1b8441097d4cece5efc0208c522a5ca1cb095d.jpg";
import img333349 from "figma:asset/e620e52d43ebb06e057e7043ab01cbe39fc2c235.jpg";
import img416 from "figma:asset/d64bc91eac5ea987abc24a388ae642d70afbaab2.jpg";
import imgWeAreBecomingClouds1 from "figma:asset/11237c7ee0f8e7c7de987029ee5590c79b7cf01d.jpg";
import img613 from "figma:asset/281205eaa14b8a1effe547f891664804548c324e.jpg";
import { img22235 } from "./svg-yz9tr";

function MaskGroup() {
  return (
    <div className="absolute contents left-[460px] top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[448px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12px_0px] mask-size-[422px_592.81px] top-0 w-[445px]" data-name="2 2235" style={{ maskImage: `url('${img22235}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22236} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[630px]" data-name="Mask group">
      <div className="absolute h-[593px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[422px_592.81px] top-[630px] w-[445px]" data-name="4 16" style={{ maskImage: `url('${img22235}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img416} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[460px] top-[630px]" data-name="Mask group">
      <div className="absolute h-[593px] left-[437px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23px_0px] mask-size-[422px_592.81px] top-[630px] w-[445px]" data-name="we are becoming clouds 1" style={{ maskImage: `url('${img22235}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWeAreBecomingClouds1} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[920px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[920px] top-[630px] w-[422px]" />
      <div className="absolute h-[317px] left-0 top-[137px] w-[422px]" data-name="1 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.04%] left-0 max-w-none top-[-0.02%] w-[100.24%]" src={img113} />
        </div>
      </div>
      <MaskGroup />
      <div className="absolute h-[317px] left-[920px] top-[137px] w-[422px]" data-name="3 33349">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.08%] left-0 max-w-none top-[-0.04%] w-[100.24%]" src={img333349} />
        </div>
      </div>
      <MaskGroup1 />
      <MaskGroup2 />
      <div className="absolute h-[317px] left-[920px] top-[767px] w-[422px]" data-name="6 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img613} />
      </div>
    </div>
  );
}