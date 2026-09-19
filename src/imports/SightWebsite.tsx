import imgImage from "figma:asset/33f1d1803db3ecb966fd4ee65a40ad9440621796.jpg";
import imgImage1 from "figma:asset/562ce0e4d8232d0b55f9ce4ea7be145329a91a1f.jpg";
import imgImage2 from "figma:asset/8358ee8ccc57eab575acb6aa85486dbb0f67518d.jpg";
import imgImage3 from "figma:asset/6f54ec063dcece9de1b97672e03bc803389ac98d.jpg";
import imgImage4 from "figma:asset/cdcbb898f91a57c76dcfd1be4b04e66f70ce1d00.jpg";
import imgImage5 from "figma:asset/78d4176b2c93de247679a829baa49a0b2291b0e7.jpg";

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[81.5px] items-start left-[72px] top-[180px] w-[305px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Aeonik:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[48px] text-black whitespace-pre-wrap">Objects</p>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[330.895px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[330.433px] items-start left-[71.63px] overflow-clip pl-[-6.429px] pr-[6.429px] pt-[-0.227px] top-[297px] w-[440.578px]" data-name="Container">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[329.709px] left-[68px] top-[674.85px] w-[440.521px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[446.879px] left-[547px] top-[297px] w-[335.968px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute h-[448.256px] left-[547px] top-[780.21px] w-[336.195px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute h-[336.976px] left-[918px] top-[297px] w-[449.299px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute h-[338.792px] left-[922px] top-[669.4px] w-[449.604px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1334px] top-[87px]">
      <div className="absolute flex items-center justify-center left-[1334px] size-[32.864px] top-[87px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-black h-[4px] w-[42.477px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1334.4px] size-[32.864px] top-[87px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-135">
          <div className="bg-black h-[4px] w-[42.477px]" />
        </div>
      </div>
    </div>
  );
}

function PK() {
  return (
    <div className="bg-[#f5f5f5] h-[2160px] relative shrink-0 w-full" data-name="pK">
      <Paragraph />
      <Container />
      <Image1 />
      <Image2 />
      <Image3 />
      <Image4 />
      <Image5 />
      <Group />
    </div>
  );
}

export default function SightWebsite() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="Sight Website">
      <PK />
    </div>
  );
}