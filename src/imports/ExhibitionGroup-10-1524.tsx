import img14 from "figma:asset/845e66cd37b52c9ad805ecf2e836e03f7caaf0c3.jpg";
import img4Latency1 from "figma:asset/cdef70b57ad0e6521107fbeac80cd544d59a87cd.jpg";
import imgWeAreBecomingClouds2 from "figma:asset/11237c7ee0f8e7c7de987029ee5590c79b7cf01d.jpg";
import img21 from "figma:asset/ef5051edb6f8f44619b65e2330c2abce1cfd44f9.jpg";
import img16 from "figma:asset/3c77ea10bb8d39bd10bf86bfc1c24bb73b69982a.jpg";
import imgTongueInTongue1 from "figma:asset/30a32673a0887c3e86593f457319a45dace2fb46.jpg";
import { img13, imgWeAreBecomingClouds1, img15 } from "./svg-ijzpo";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[404px] left-[-25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25px_18px] mask-size-[437px_349px] top-[-18px] w-[538px]" data-name="1(首图) 3" style={{ maskImage: `url('${img13}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img14} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[389px]" data-name="Mask group">
      <div className="absolute h-[349px] left-[-14px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14px_0px] mask-size-[437px_349px] top-[389px] w-[465px]" data-name="4 latency 1" style={{ maskImage: `url('${img13}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4Latency1} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[475px] top-0" data-name="Mask group">
      <div className="absolute h-[475px] left-[468px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7px_0px] mask-size-[336px_472px] top-0 w-[356px]" data-name="we are becoming clouds 1" style={{ maskImage: `url('${imgWeAreBecomingClouds1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWeAreBecomingClouds2} />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-[475px] top-[511px]" data-name="Mask group">
      <div className="absolute h-[472px] left-[312px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[163px_0px] mask-size-[336px_472px] top-[511px] w-[629px]" data-name="2（首图） 1" style={{ maskImage: `url('${imgWeAreBecomingClouds1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img21} />
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents left-[849px] top-0" data-name="Mask group">
      <div className="absolute h-[349px] left-[841px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_0px] mask-size-[436px_349px] top-0 w-[465px]" data-name="1（首图） 4" style={{ maskImage: `url('${img15}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img16} />
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents left-[849px] top-[389px]" data-name="Mask group">
      <div className="absolute h-[349px] left-[841px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_0px] mask-size-[436px_349px] top-[389px] w-[465px]" data-name="1（首图） 4" style={{ maskImage: `url('${img15}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img16} />
      </div>
      <div className="absolute h-[349px] left-[850px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_0px] mask-size-[436px_349px] top-[389px] w-[465px]" data-name="tongue in tongue 1" style={{ maskImage: `url('${img15}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTongueInTongue1} />
      </div>
    </div>
  );
}

export default function ExhibitionGroup() {
  return (
    <div className="relative size-full" data-name="exhibition group">
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <MaskGroup3 />
      <MaskGroup4 />
      <MaskGroup5 />
    </div>
  );
}