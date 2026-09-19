import svgPaths from "./svg-phmznegu8n";
import imgTest1 from "figma:asset/044cbe593d64c964a5f270abe94f75a37bee0ff4.jpg";

function Logo() {
  return (
    <div className="absolute h-[42.187px] left-[110px] top-[94px] w-[111px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 42.1866">
        <g id="logo">
          <path d={svgPaths.p3756c900} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p312c2580} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2a300280} fill="var(--fill-0, black)" id="Vector_3" />
          <rect fill="var(--fill-0, black)" height="22.4995" id="Rectangle 1" width="5.62488" x="28.6869" y="10.1248" />
          <rect fill="var(--fill-0, black)" height="5.62488" id="Rectangle 2" width="5.62488" x="28.6869" />
          <path d={svgPaths.p1afa6f00} fill="var(--fill-0, black)" id="Union" />
          <path d={svgPaths.p3893b940} fill="var(--fill-0, black)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="MacBook Pro 14' - 2">
      <div className="absolute bg-[#d9d9d9] h-[80px] left-[407px] rounded-[70px] top-[1206px] w-[697px]" />
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[642px] not-italic text-[24px] text-black top-[1231px]">Fashion</p>
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[817px] not-italic text-[24px] text-black top-[1231px]">{`Exhibition `}</p>
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[1009px] not-italic text-[24px] text-black top-[1231px]">{`Food `}</p>
      <div className="absolute bg-white h-[66px] left-[416px] rounded-[70px] top-[1213px] w-[178px]" />
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[463px] not-italic text-[24px] text-black top-[1231px]">{`Product `}</p>
      <div className="absolute bg-[#d9d9d9] h-[379px] left-[59px] top-[1361px] w-[474px]" />
      <div className="absolute bg-[#d9d9d9] h-[379px] left-[59px] top-[1771px] w-[474px]" />
      <div className="absolute bg-[#d9d9d9] h-[379px] left-[59px] top-[2181px] w-[474px]" />
      <div className="absolute bg-[#d9d9d9] h-[379px] left-[979px] top-[1361px] w-[474px]" />
      <div className="absolute bg-[#d9d9d9] h-[379px] left-[979px] top-[1771px] w-[474px]" />
      <div className="absolute bg-[#d9d9d9] h-[379px] left-[979px] top-[2181px] w-[474px]" />
      <div className="absolute bg-[#d9d9d9] h-[512px] left-[574px] top-[1361px] w-[364px]" />
      <div className="absolute bg-[#d9d9d9] h-[512px] left-[574px] top-[1915px] w-[364px]" />
      <div className="absolute bg-[#d9d9d9] h-[512px] left-[574px] top-[2469px] w-[364px]" />
      <div className="absolute h-[1131px] left-0 top-px w-[1512px]" data-name="网站首图test 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTest1} />
      </div>
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[1138px] not-italic text-[#1f1f1f] text-[24px] top-[96px]">Work</p>
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[1275px] not-italic text-[#1f1f1f] text-[24px] top-[96px]">Contact Us</p>
      <Logo />
    </div>
  );
}