function Heading() {
  return (
    <div className="w-full md:absolute md:h-[48px] md:left-0 md:top-0 md:w-[1094px] mb-6 md:mb-0" data-name="Heading 2">
      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[36px] md:leading-[48px] not-italic text-[#0a0a0a] text-[24px] md:text-[36px] tracking-[-1%]">Our clients</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">PKI-U</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">Kyi Atelier</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">Micro Ingredients</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="md:absolute content-stretch flex flex-col h-[78px] items-start md:left-0 md:top-0 w-full md:w-[343.328px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">3CAT</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">WUSHILAND</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">Radical Characters</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="md:absolute content-stretch flex flex-col h-[78px] items-start md:left-[375.33px] md:top-0 w-full md:w-[343.336px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">Art Zen</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">H Foundation for the Arts</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#525252] text-[16px] tracking-[-0.3125px]">Otis College of Art and Design</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="md:absolute content-stretch flex flex-col h-[78px] items-start md:left-[750.66px] md:top-0 w-full md:w-[343.336px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex flex-col md:absolute gap-6 md:gap-0 md:h-[78px] md:left-0 md:top-[78px] w-full md:w-[1094px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative w-full h-auto md:size-full flex flex-col md:block">
      <Heading />
      <Container />
    </div>
  );
}