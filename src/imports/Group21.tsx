import svgPaths from "./svg-v9729cysoc";
import img11 from "figma:asset/4179ee4b8b34cabdbedff750dad046e82784babd.jpg";

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

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#f5f5f5] h-[1140px] left-0 top-0 w-[1512px]" />
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[1138px] not-italic text-[#1f1f1f] text-[24px] top-[96px]">Work</p>
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[1275px] not-italic text-[#1f1f1f] text-[24px] top-[96px]">Contact Us</p>
      <div className="absolute h-[1137px] left-0 top-0 w-[1514px]" data-name="网站图-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11} />
      </div>
      <Logo />
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[122px] text-[73.079px] text-black top-[494px] tracking-[-0.7308px]">Sight</p>
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[968px] text-[73.079px] text-black top-[494px] tracking-[-0.7308px]">Photography</p>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}