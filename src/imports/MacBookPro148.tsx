import imgObjects1 from "figma:asset/33f1d1803db3ecb966fd4ee65a40ad9440621796.jpg";
import img333334 from "figma:asset/562ce0e4d8232d0b55f9ce4ea7be145329a91a1f.jpg";
import img42 from "figma:asset/8358ee8ccc57eab575acb6aa85486dbb0f67518d.jpg";
import img61 from "figma:asset/6f54ec063dcece9de1b97672e03bc803389ac98d.jpg";
import img22224 from "figma:asset/cdcbb898f91a57c76dcfd1be4b04e66f70ce1d00.jpg";
import img51 from "figma:asset/78d4176b2c93de247679a829baa49a0b2291b0e7.jpg";
import { imgObjects, img41, img22223 } from "./svg-nl2zf";

function MaskGroup() {
  return (
    <div className="absolute contents left-[72px] top-[362px]" data-name="Mask group">
      <div className="absolute h-[363.802px] left-[72px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[455.208px_363.542px] top-[362px] w-[485.069px]" data-name="objects" style={{ maskImage: `url('${imgObjects}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.14%] left-[-1.46%] max-w-none top-[-0.07%] w-full" src={imgObjects1} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[72px] top-[777.63px]" data-name="Mask group">
      <div className="absolute h-[363px] left-[68px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4px_-0.375px] mask-size-[455.208px_363.542px] top-[778px] w-[485px]" data-name="3 33334" style={{ maskImage: `url('${imgObjects}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333334} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[566.79px] top-[362px]" data-name="Mask group">
      <div className="absolute h-[492px] left-[557px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.792px_0px] mask-size-[350px_491.667px] top-[362px] w-[369.897px]" data-name="4 1" style={{ maskImage: `url('${img41}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-[566.79px] top-[895.33px]" data-name="Mask group">
      <div className="absolute h-[493.522px] left-[557px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.792px_1.333px] mask-size-[350px_491.667px] top-[894px] w-[370.141px]" data-name="6 1" style={{ maskImage: `url('${img41}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img61} />
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents left-[956px] top-[362px]" data-name="Mask group">
      <div className="absolute h-[371px] left-[931px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25px_0px] mask-size-[454.167px_363.542px] top-[362px] w-[494.667px]" data-name="2 2223" style={{ maskImage: `url('${img22223}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22224} />
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents left-[956.38px] top-[777.63px]" data-name="Mask group">
      <div className="absolute h-[373px] left-[936px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.375px_5.625px] mask-size-[454.167px_363.542px] top-[772px] w-[495px]" data-name="5 1" style={{ maskImage: `url('${img22223}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img51} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1377.61px] top-[76px]">
      <div className="absolute flex items-center justify-center left-[1377.61px] size-[32.864px] top-[76px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-black h-[4px] w-[42.477px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1378px] size-[32.864px] top-[76px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-135">
          <div className="bg-black h-[4px] w-[42.477px]" />
        </div>
      </div>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="MacBook Pro 14' - 8">
      <p className="absolute font-['Aeonik:Medium',sans-serif] leading-[normal] left-[72px] not-italic text-[71.765px] text-black top-[180px] w-[305px] whitespace-pre-wrap">Objects</p>
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <MaskGroup3 />
      <MaskGroup4 />
      <MaskGroup5 />
      <Group />
    </div>
  );
}