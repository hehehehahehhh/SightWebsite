export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute backdrop-blur-[21.05px] bg-[rgba(255,255,255,0.4)] h-[80px] left-0 rounded-[70px] top-0 w-[697px]" />
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[235px] not-italic text-[24px] text-black top-[25px]">Fashion</p>
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[410px] not-italic text-[24px] text-black top-[25px]">{`Exhibition `}</p>
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[602px] not-italic text-[24px] text-black top-[25px]">{`Food `}</p>
      <div className="absolute bg-white h-[66px] left-[9px] rounded-[70px] top-[7px] w-[178px]" />
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-[56px] not-italic text-[24px] text-black top-[25px]">{`Product `}</p>
    </div>
  );
}