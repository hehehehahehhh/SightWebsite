import svgPaths from "./svg-gqsvx20xik";
import imgImage1 from "figma:asset/6b15c6b0441488f2e54624dd47b69095349db0ef.jpg";
import imgImage2 from "figma:asset/b2f2319a062105f4188697d938fdf6b256404c1d.jpg";

function Group() {
  return (
    <div className="absolute contents left-[129px] top-[50px]">
      <div className="absolute left-[191px] size-[46px] top-[50px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[28px] left-[129px] top-[60px] w-[26px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute inset-[43.15%_49.96%_41.28%_45.39%]" data-name="Wechat">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.2227 22.7322">
          <path d={svgPaths.p38fd6c00} fill="var(--fill-0, black)" id="Wechat" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Group />
    </div>
  );
}