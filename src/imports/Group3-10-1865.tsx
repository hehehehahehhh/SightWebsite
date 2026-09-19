import imgObjects1 from "figma:asset/33f1d1803db3ecb966fd4ee65a40ad9440621796.jpg";
import img12 from "figma:asset/09242715ce88ebc642b6c9c602c11e7aa9309c7d.jpg";
import img13 from "figma:asset/16d22acce858ad5284fe362f64d18f034b1a9c7c.jpg";
import img31 from "figma:asset/e025732070920faf4ad9c8a34157bf5ebad91936.jpg";
import img112 from "figma:asset/1966571180428a55c01fb46133ce1655d080df55.jpg";
import imgECommerce from "figma:asset/9b1ea9269295c28022e6996c4e6ac2d3db641573.jpg";
import { imgObjects, img11, img111 } from "./svg-vzs8b";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-[7px]" data-name="Mask group">
      <div className="absolute h-[349px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[437px_349px] top-[7px] w-[466px]" data-name="objects" style={{ maskImage: `url('${imgObjects}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.14%] left-[-1.46%] max-w-none top-[-0.07%] w-full" src={imgObjects1} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[399px]" data-name="Mask group">
      <div className="absolute h-[349px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[437px_349px] top-[399px] w-[466px]" data-name="1（首图） 1" style={{ maskImage: `url('${imgObjects}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.14%] left-[-1.46%] max-w-none top-[-0.07%] w-full" src={imgObjects1} />
        </div>
      </div>
      <div className="absolute h-[410px] left-[-55px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[55px_30px] mask-size-[437px_349px] top-[369px] w-[547px]" data-name="1（首图） 2" style={{ maskImage: `url('${imgObjects}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[475px] top-0" data-name="Mask group">
      <div className="absolute h-[472px] left-[467px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_0px] mask-size-[336px_472px] top-0 w-[354px]" data-name="1(首图) 1" style={{ maskImage: `url('${img11}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img13} />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-[475px] top-[512px]" data-name="Mask group">
      <div className="absolute h-[472px] left-[467px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_0px] mask-size-[336px_472px] top-[512px] w-[354px]" data-name="1(首图) 1" style={{ maskImage: `url('${img11}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img13} />
      </div>
      <div className="absolute left-[384px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[91px_8px] mask-size-[336px_472px] size-[487px] top-[504px]" data-name="3（首图） 1" style={{ maskImage: `url('${img11}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img31} />
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents left-[849px] top-[7px]" data-name="Mask group">
      <div className="absolute left-[816px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[33px_80px] mask-size-[436px_349px] size-[472px] top-[-73px]" data-name="1(首图) (1) 1" style={{ maskImage: `url('${img111}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img112} />
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents left-[849px] top-[399px]" data-name="Mask group">
      <div className="absolute left-[816px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[33px_80px] mask-size-[436px_349px] size-[472px] top-[319px]" data-name="1(首图) (1) 1" style={{ maskImage: `url('${img111}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img112} />
      </div>
      <div className="absolute left-[849px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_51px] mask-size-[436px_349px] size-[436px] top-[348px]" data-name="e-commerce" style={{ maskImage: `url('${img111}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgECommerce} />
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
      <MaskGroup4 />
      <MaskGroup5 />
    </div>
  );
}