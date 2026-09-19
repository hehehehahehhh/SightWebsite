import imgThreeCats2 from "figma:asset/8fdf90927fd04eb97c68be60ac2518a830842d04.jpg";
import imgYukiKumo1 from "figma:asset/33f6a21ea310422cc495b496fef1481bf4039ecf.jpg";
import imgMicroingredient1 from "figma:asset/29e1249a67483cc19d13cdd5cbf1916bbc30c8c1.jpg";
import imgRectangle from "figma:asset/ef5051edb6f8f44619b65e2330c2abce1cfd44f9.jpg";
import imgWushiland1 from "figma:asset/94928c6342b4a5fd1e3d3c87b5571bae7b14423f.jpg";
import img15 from "figma:asset/3c77ea10bb8d39bd10bf86bfc1c24bb73b69982a.jpg";
import imgSumei1 from "figma:asset/dbb15b31a4a94cf978478db1300982ab13c708b8.jpg";
import { imgThreeCats1, imgThreeCats3, img14 } from "./svg-fqu2f";

function YukiKumo() {
  return (
    <div className="absolute contents left-0 top-0" data-name="yuki & kumo">
      <div className="absolute h-[584px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_112px] mask-size-[437px_349px] top-[-112px] w-[438px]" data-name="three cats 1" style={{ maskImage: `url('${imgThreeCats1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThreeCats2} />
      </div>
      <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_64px] mask-size-[437px_349px] size-[437px] top-[-64px]" data-name="yuki & kumo 1" style={{ maskImage: `url('${imgThreeCats1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgYukiKumo1} />
      </div>
    </div>
  );
}

function Microingredient() {
  return (
    <div className="absolute contents left-0 top-[389px]" data-name="microingredient 1">
      <div className="absolute h-[349px] left-[-28px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[28px_0px] mask-size-[437px_349px] top-[389px] w-[465px]" data-name="microingredient 1" style={{ maskImage: `url('${imgThreeCats1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMicroingredient1} />
      </div>
    </div>
  );
}

function ThreeCats() {
  return (
    <div className="absolute contents left-[475px] top-0" data-name="Three cats">
      <div className="absolute h-[472px] left-[466px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_0px] mask-size-[336px_472px] top-0 w-[354px]" data-name="three cats 1" style={{ maskImage: `url('${imgThreeCats3}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThreeCats2} />
      </div>
    </div>
  );
}

function Wushiland() {
  return (
    <div className="absolute contents left-[483px] top-[515px]" data-name="wushiland 1">
      <div className="absolute h-[472px] left-[320px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[163px_0px] mask-size-[336px_472px] top-[515px] w-[629px]" data-name="Rectangle" style={{ maskImage: `url('${imgThreeCats3}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <div className="absolute h-[472px] left-[469px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14px_0px] mask-size-[336px_472px] top-[515px] w-[354px]" data-name="wushiland 1" style={{ maskImage: `url('${imgThreeCats3}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWushiland1} />
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[849px] top-0" data-name="Mask group">
      <div className="absolute h-[349px] left-[841px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_0px] mask-size-[436px_349px] top-0 w-[465px]" data-name="1（首图） 4" style={{ maskImage: `url('${img14}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img15} />
      </div>
    </div>
  );
}

function Sumei() {
  return (
    <div className="absolute contents left-[849px] top-[389px]" data-name="Sumei 1">
      <div className="absolute h-[349px] left-[843px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6px_0px] mask-size-[436px_349px] top-[389px] w-[466px]" data-name="Sumei 1" style={{ maskImage: `url('${img14}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSumei1} />
      </div>
    </div>
  );
}

export default function FoodGroup() {
  return (
    <div className="relative size-full" data-name="food group">
      <YukiKumo />
      <Microingredient />
      <ThreeCats />
      <Wushiland />
      <MaskGroup />
      <Sumei />
    </div>
  );
}