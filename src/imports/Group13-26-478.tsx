function Group() {
  return (
    <div className="absolute contents left-[32px] top-[33px]">
      <div className="absolute flex items-center justify-center left-[32px] size-[32.864px] top-[33px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-black h-[4px] w-[42.477px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[32.4px] size-[32.864px] top-[33px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-135">
          <div className="bg-black h-[4px] w-[42.477px]" />
        </div>
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[98px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 98">
          <circle cx="49" cy="49" data-figma-bg-blur-radius="13.3" fill="var(--fill-0, #F5F5F5)" fillOpacity="0.3" id="Ellipse 1" r="49" />
          <defs>
            <clipPath id="bgblur_0_26_482_clip_path" transform="translate(13.3 13.3)">
              <circle cx="49" cy="49" r="49" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Group />
    </div>
  );
}