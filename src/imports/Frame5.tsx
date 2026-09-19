import svgPaths from "./svg-vukimh1xdu";
import imgImage2 from "figma:asset/b2f2319a062105f4188697d938fdf6b256404c1d.jpg";
import imgImage1 from "figma:asset/6b15c6b0441488f2e54624dd47b69095349db0ef.jpg";
import Group from "./Group5";
import { useState } from "react";

function Frame() {
  return (
    <a
      href="https://www.instagram.com/sight_photostudio/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex h-[36px] items-center p-[8px] relative shrink-0 hover:opacity-60 transition-opacity cursor-pointer"
      aria-label="Instagram"
    >
      <div className="h-[22px] relative shrink-0 w-[20px]" data-name="image 2">
        <img
          alt="Instagram"
          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
          src={imgImage2}
        />
      </div>
    </a>
  );
}

function Frame1() {
  return (
    <a
      href="https://www.xiaohongshu.com/user/profile/6763bb900000000018016f9c?xsec_token=YBR7HPKol8QrF4UGMrpKyo5tipw9cEios1vntQyI0WAns=&xsec_source=app_share&xhsshare=CopyLink&appuid=6763bb900000000018016f9c&apptime=1756369290&share_id=8e0ba79875a64c0988eb0fd7b0c0dd82"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex items-center relative shrink-0 hover:opacity-60 transition-opacity cursor-pointer"
      aria-label="Xiaohongshu"
    >
      <div className="relative shrink-0 size-[36px]" data-name="image 1">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage1}
        />
      </div>
    </a>
  );
}

function Frame2() {
  const [showQR, setShowQR] = useState(false);
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowQR(true)}
      onMouseLeave={() => setShowQR(false)}
    >
      <div
        className="h-[34px] relative shrink-0 w-[38px] hover:opacity-60 transition-opacity cursor-pointer block"
        aria-label="WeChat"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.525 42.9994">
          <g id="Frame 4">
            <path d={svgPaths.p37515800} fill="var(--fill-0, black)" id="Wechat" />
          </g>
        </svg>
      </div>
      
      {/* QR Code Popup */}
      {showQR && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-[256.287px] h-[321px]">
          <Group />
        </div>
      )}
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[23px] items-end relative size-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}