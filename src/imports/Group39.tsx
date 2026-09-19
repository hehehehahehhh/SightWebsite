import img22243 from "figma:asset/40f51b198590fde5143fed2fbbaadd87f761f6e5.jpg";
import img333356 from "figma:asset/0afe97716c83da73c13411c255d254483164c7ca.jpg";
import img18 from "figma:asset/3c77ea10bb8d39bd10bf86bfc1c24bb73b69982a.jpg";
import img352 from "figma:asset/679323f2557b8c1e28bc0707efb6b9c729ef145a.jpg";
import img423 from "figma:asset/8e33a80469c875112b9ac752a47c9fedea5eeaf1.jpg";
import img519 from "figma:asset/c7374df2e997f9a02431b578a3531876fc37e957.jpg";
import img619 from "figma:asset/cfa2457828cc802eecbdba5d79003c29e5a69e9d.jpg";
import img715 from "figma:asset/f57412a9c35d49e0693740d4274a6bb6da05d5f9.jpg";
import img811 from "figma:asset/a395f2c27db895149d74d78008c3b6e767ef2083.jpg";
import { img22242, img351 } from "./svg-7meat";

function MaskGroup() {
  return (
    <div className="absolute contents left-[460px] top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[460px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[422px_592.81px] top-0 w-[445px]" data-name="2 2242" style={{ maskImage: `url('${img22242}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22243} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[630px]" data-name="Mask group">
      <div className="absolute h-[593px] left-px mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_0px] mask-size-[422px_592.81px] top-[630px] w-[445px]" data-name="3 33356" style={{ maskImage: `url('${img22242}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333356} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[920px] top-0" data-name="Mask group">
      <div className="absolute h-[593px] left-[920px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[422px_592.81px] top-0 w-[445px]" data-name="3.5 1" style={{ maskImage: `url('${img351}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img352} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[920px] top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[920px] top-[1260px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[460px] top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[460px] top-[1260px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[1260px] w-[422px]" />
      <MaskGroup />
      <MaskGroup1 />
      <div className="absolute h-[317px] left-0 top-[137px] w-[422px]" data-name="1（首图） 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img18} />
      </div>
      <MaskGroup2 />
      <div className="absolute h-[317px] left-[460px] top-[767px] w-[422px]" data-name="4 23">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img423} />
      </div>
      <div className="absolute h-[317px] left-[920px] top-[767px] w-[422px]" data-name="5 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img519} />
      </div>
      <div className="absolute h-[317px] left-0 top-[1397px] w-[422px]" data-name="6 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img619} />
      </div>
      <div className="absolute h-[317px] left-[460px] top-[1397px] w-[422px]" data-name="7 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img715} />
      </div>
      <div className="absolute h-[317px] left-[920px] top-[1397px] w-[422px]" data-name="8 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img811} />
      </div>
    </div>
  );
}