import imgImage from "figma:asset/33f1d1803db3ecb966fd4ee65a40ad9440621796.jpg";
import imgImage1 from "figma:asset/562ce0e4d8232d0b55f9ce4ea7be145329a91a1f.jpg";
import imgImage2 from "figma:asset/8358ee8ccc57eab575acb6aa85486dbb0f67518d.jpg";
import imgImage3 from "figma:asset/6f54ec063dcece9de1b97672e03bc803389ac98d.jpg";
import imgImage4 from "figma:asset/cdcbb898f91a57c76dcfd1be4b04e66f70ce1d00.jpg";
import imgImage5 from "figma:asset/78d4176b2c93de247679a829baa49a0b2291b0e7.jpg";

function Image() {
  return (
    <div className="h-[330.895px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[330.433px] items-start left-[3.63px] overflow-clip pl-[-6.429px] pr-[6.429px] pt-[-0.227px] top-0 w-[440.578px]" data-name="Container">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[329.709px] left-0 top-[377.85px] w-[440.521px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[446.879px] left-[479px] top-0 w-[335.968px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute h-[448.256px] left-[479px] top-[483.21px] w-[336.195px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute h-[336.976px] left-[850px] top-0 w-[449.299px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute h-[338.792px] left-[854px] top-[372.4px] w-[449.604px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Container />
      <Image1 />
      <Image2 />
      <Image3 />
      <Image4 />
      <Image5 />
    </div>
  );
}