import svgPaths from "./svg-vukimh1xdu";
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
      <div className="h-[20px] relative shrink-0 w-[20px]" data-name="image 2">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.668-.072-4.948C23.73 2.69 21.31.273 16.951.073 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            fill="black"
          />
        </svg>
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
      className="content-stretch flex items-center relative shrink-0 hover:opacity-60 transition-opacity cursor-pointer h-[36px]"
      aria-label="Xiaohongshu"
    >
      <span className="font-['Aeonik:Regular',sans-serif] not-italic text-black text-[15px] whitespace-nowrap">
        小红书
      </span>
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