import img11 from "figma:asset/8e01bfbd00cab6a7b87580d847f89f8abdba3fe9.jpg";
import img22240 from "figma:asset/23dadaeb50c8a29bab64852a5ce9bae6fad2dd88.jpg";
import img333354 from "figma:asset/8da9e1e4184bb8e590ed175480e54510ed8c0918.jpg";
import img421 from "figma:asset/0d806fff77e99b2fff6014a02a182c65e2b0df1d.jpg";
import imgSumei1 from "figma:asset/dbb15b31a4a94cf978478db1300982ab13c708b8.jpg";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[460px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[920px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[630px] w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[460px] top-[630px] w-[422px]" />
      <div className="absolute h-[317px] left-0 top-[137px] w-[422px]" data-name="1首图 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11} />
      </div>
      <div className="absolute h-[317px] left-[460px] top-[137px] w-[422px]" data-name="2 2240">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22240} />
      </div>
      <div className="absolute h-[317px] left-[920px] top-[137px] w-[422px]" data-name="3 33354">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333354} />
      </div>
      <div className="absolute h-[317px] left-0 top-[767px] w-[422px]" data-name="4 21">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img421} />
      </div>
      <div className="absolute h-[317px] left-[460px] top-[767px] w-[422px]" data-name="Sumei 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSumei1} />
      </div>
    </div>
  );
}