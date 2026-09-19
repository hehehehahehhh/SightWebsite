import svgPaths from "./svg-45n8cgkn5h";
import imgTest1 from "figma:asset/74f5e2f2b055ddde280316598edba2c462bd40ac.jpg";
import imgScreenshot20260214At115557Pm1 from "figma:asset/73853eebb2ea2ff73da7e0bdda36dee397630939.jpg";
import imgImage1 from "figma:asset/6b15c6b0441488f2e54624dd47b69095349db0ef.jpg";
import imgImage2 from "figma:asset/b2f2319a062105f4188697d938fdf6b256404c1d.jpg";

function Group() {
  return (
    <div className="absolute inset-[63.66%_44.04%_34.13%_54.3%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0482 25">
        <g id="Group 4">
          <path d={svgPaths.p1a658880} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2b355c00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.pf539000} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p138f2480} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p2ca51140} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p5545000} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p27df94f0} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[295px] top-[268px]">
      <div className="absolute h-[491px] left-[295px] top-[268px] w-[916px]" data-name="Screenshot 2026-02-14 at 11.55.57 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260214At115557Pm1} />
      </div>
      <div className="absolute left-[733px] size-[46px] top-[710px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bg-[#d9d9d9] h-[44.253px] left-[708.06px] top-[715px] w-[1.77px]" />
      <div className="absolute bg-[#d9d9d9] h-[44.253px] left-[802px] top-[715px] w-[1.77px]" />
      <div className="absolute h-[28px] left-[658px] top-[720px] w-[26px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Group />
      <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[0] left-[756.5px] not-italic text-[12.611px] text-black text-center top-[797px] w-[273px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`Visit us at `}</span>
        <span className="leading-[normal]">1206 Maple Ave, Los Angeles 90015</span>
      </p>
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[686px] not-italic text-[11.665px] text-black top-[850px]">© Sight Photography 2026</p>
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1131px] left-0 top-0 w-[1512px]" data-name="网站首图test 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTest1} />
      </div>
      <Group1 />
    </div>
  );
}