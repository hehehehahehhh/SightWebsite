import svgPaths from "./svg-prlt7tn314";
import imgImage1 from "figma:asset/6b15c6b0441488f2e54624dd47b69095349db0ef.jpg";
import imgImage2 from "figma:asset/b2f2319a062105f4188697d938fdf6b256404c1d.jpg";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute left-[62px] size-[46px] top-0" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[28px] left-0 top-[10px] w-[26px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute inset-[28.26%_0_22.32%_83.89%]" data-name="Wechat">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.2228 22.7322">
          <path d={svgPaths.p7d49d80} fill="var(--fill-0, black)" id="Wechat" />
        </svg>
      </div>
    </div>
  );
}