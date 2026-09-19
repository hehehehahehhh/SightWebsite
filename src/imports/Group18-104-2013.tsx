import img111 from "figma:asset/1966571180428a55c01fb46133ce1655d080df55.jpg";
import img22226 from "figma:asset/8470a0a089c64f48bb9363ebce0d06c8e8599e2f.jpg";
import img333337 from "figma:asset/eef42848d292491fedae7ebe22d1ace1d65950f5.jpg";
import img43 from "figma:asset/ac9f43579168d0ece7c72f7862db12a75d08855a.jpg";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[917px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-[456px] top-0 w-[422px]" />
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-0 w-[422px]" />
      <div className="absolute left-0 size-[422px] top-[85px]" data-name="1(首图) (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img111} />
      </div>
      <div className="absolute bg-[#f5f5f5] h-[592.81px] left-0 top-[630px] w-[422px]" />
      <div className="absolute h-[316px] left-[457px] top-[138px] w-[422px]" data-name="2 2226">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img22226} />
      </div>
      <div className="absolute left-[917px] size-[422px] top-[85px]" data-name="3 33337">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img333337} />
      </div>
      <div className="absolute left-0 size-[422px] top-[715px]" data-name="4 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img43} />
      </div>
    </div>
  );
}