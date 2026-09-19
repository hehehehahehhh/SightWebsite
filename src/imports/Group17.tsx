import svgPaths from "./svg-ley7m9vqbp";

function Group() {
  return (
    <div className="absolute h-[35.986px] left-[1326px] top-[2.17px] w-[21px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 35.9863">
        <g id="Group 14">
          <path d={svgPaths.p18d0d700} data-figma-bg-blur-radius="1.60618" fill="var(--fill-0, #353535)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_0_26_869_clip_path" transform="translate(1.60618 1.60618)">
            <path d={svgPaths.p18d0d700} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[993px] top-0">
      <Group />
      <p className="absolute font-['Aeonik:Medium',sans-serif] leading-[normal] left-[993px] not-italic text-[33.406px] text-black top-0">Packaging Designs</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[35.986px] relative w-[21px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 35.9863">
        <g id="Group 14">
          <path d={svgPaths.p18d0d700} data-figma-bg-blur-radius="1.60618" fill="var(--fill-0, #353535)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_0_26_864_clip_path" transform="translate(1.60618 1.60618)">
            <path d={svgPaths.p18d0d700} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute flex h-[35.986px] items-center justify-center left-0 top-[2.17px] w-[21px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group4 />
        </div>
      </div>
      <p className="absolute font-['Aeonik:Medium',sans-serif] leading-[normal] left-[47px] not-italic text-[33.406px] text-black top-0">E-Commerce</p>
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <Group1 />
      <Group2 />
    </div>
  );
}