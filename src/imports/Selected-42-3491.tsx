import svgPaths from "./svg-36z66p3gxa";
import imgImage from "figma:asset/dacbe4bf2af06cf00621de9dfa8198a328e678e5.png";
import imgImage1 from "figma:asset/579a741688bec507e611cf7b627bf410cba369c9.png";
import imgImage2 from "figma:asset/a865fe0b14ad3e71a727d8d7081a841e53308982.png";
import imgImage3 from "figma:asset/bea404c91db444da0e18a518fae188b12e8d4727.png";

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 w-[402px]" data-name="Home Indicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="css-ew64yg font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start pb-0 pt-[21px] px-0 relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function Progress2() {
  return (
    <div className="h-[6px] relative shrink-0 w-[194px]" data-name="progress">
      <div className="absolute bg-white h-[9px] left-0 right-0 rounded-[8px] top-0" data-name="progress 7" />
      <div className="absolute bg-[#0a84ff] h-[9px] left-0 rounded-[8px] top-0 w-[14px]" data-name="progress 3" />
    </div>
  );
}

function ProgressNavBar() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="_progress nav bar">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Progress2 />
        </div>
      </div>
    </div>
  );
}

function Progress1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[calc(50%+11px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[300px]" data-name="Progress">
      <ProgressNavBar />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white left-[16px] rounded-[999px] size-[34px] top-1/2 translate-y-[-50%]" data-name="Button">
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-1/2 size-[34px] text-[15px] text-black text-center top-1/2 tracking-[-0.23px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[20px]">􀆉</p>
      </div>
    </div>
  );
}

function TitleAndControls() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Title and Controls">
      <Progress1 />
      <Button />
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contents">
      <TitleAndControls />
    </div>
  );
}

function Progress() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Progress">
      <StatusBarIPhone />
      <Contents />
    </div>
  );
}

function Headline() {
  return (
    <div className="relative shrink-0 w-full" data-name="Headline">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[12px] relative w-full">
        <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[0px] text-black tracking-[0.4px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[1.3] text-[34px]">{`Are you currently `}</span>
          <span className="font-['Caveat:Bold',sans-serif] leading-[41px] text-[#0a84ff] text-[56px]">pregnant?</span>
        </p>
        <p className="css-4hzbpn font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] tracking-[-0.43px] w-[346px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          We ask this to make sure your plan
          <br aria-hidden="true" />
          is safe and right for your current stage.
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Progress />
      <Headline />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
      <div className="relative shrink-0 size-[44px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="44" src={imgImage} width="44" />
      </div>
    </div>
  );
}

function TitleAndDetail() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[60px] items-start justify-center min-h-px min-w-px relative" data-name="Title and Detail">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-hidden relative shrink-0 text-[17px] text-black text-ellipsis tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-g0mm18 leading-[22px] overflow-hidden">I’m currently pregnant</p>
      </div>
    </div>
  );
}

function EditButtonsLight() {
  return (
    <div className="h-[22px] relative shrink-0 w-[24px]" data-name="_Edit Buttons/Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22">
        <g id="_Edit Buttons/Light">
          <path d={svgPaths.pe7ec4f2} fill="var(--fill-0, #3C3C43)" fillOpacity="0.18" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ContentsTrailing() {
  return (
    <div className="content-stretch flex flex-col items-start pl-0 pr-[16px] py-0 relative shrink-0" data-name="Contents - Trailing">
      <EditButtonsLight />
    </div>
  );
}

function AccessoriesAndGrabber() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <ContentsTrailing />
    </div>
  );
}

function TitleAndTrailingAccessories() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Title and Trailing Accessories">
      <TitleAndDetail />
      <AccessoriesAndGrabber />
    </div>
  );
}

function Contents1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <Image />
          <TitleAndTrailingAccessories />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] h-[64px] items-center min-h-px min-w-px relative rounded-[20px]" data-name="Row">
      <Contents1 />
    </div>
  );
}

function SingleAndMultipleChoiceOption() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[354px]" data-name="Single and Multiple Choice Option">
      <Row />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
      <div className="relative shrink-0 size-[44px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="44" src={imgImage1} width="44" />
      </div>
    </div>
  );
}

function TitleAndDetail1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[60px] items-start justify-center min-h-px min-w-px relative" data-name="Title and Detail">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-hidden relative shrink-0 text-[17px] text-black text-ellipsis tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-g0mm18 leading-[22px] overflow-hidden">I’m in the postpartum stage</p>
      </div>
    </div>
  );
}

function EditButtonsLight1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[24px]" data-name="_Edit Buttons/Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22">
        <g id="_Edit Buttons/Light">
          <path d={svgPaths.pe7ec4f2} fill="var(--fill-0, #3C3C43)" fillOpacity="0.18" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ContentsTrailing1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-0 pr-[16px] py-0 relative shrink-0" data-name="Contents - Trailing">
      <EditButtonsLight1 />
    </div>
  );
}

function AccessoriesAndGrabber1() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <ContentsTrailing1 />
    </div>
  );
}

function TitleAndTrailingAccessories1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Title and Trailing Accessories">
      <TitleAndDetail1 />
      <AccessoriesAndGrabber1 />
    </div>
  );
}

function Contents2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <Image1 />
          <TitleAndTrailingAccessories1 />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] h-[64px] items-center min-h-px min-w-px relative rounded-[20px]" data-name="Row">
      <Contents2 />
    </div>
  );
}

function SingleAndMultipleChoiceOption1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[354px]" data-name="Single and Multiple Choice Option">
      <Row1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
      <div className="relative shrink-0 size-[44px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="44" src={imgImage2} width="44" />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="content-stretch flex h-[60px] items-center relative shrink-0" data-name="Image">
      <Image3 />
    </div>
  );
}

function TitleAndDetail2() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Title and Detail">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-0 pr-[12px] py-0 relative size-full">
          <div className="css-g0mm18 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[22px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[17px] text-black text-ellipsis tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[22px] overflow-hidden">No, neither</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditButtonsLight2() {
  return (
    <div className="h-[22px] relative shrink-0 w-[24px]" data-name="_Edit Buttons/Light">
      <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(10, 132, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <circle cx="11" cy="11" fill="var(--fill-0, #0A84FF)" id="Circle" r="11" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-1/2 size-[22px] text-[14.5px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss15'" }}>
        <p className="css-4hzbpn leading-[22px]">􀆅</p>
      </div>
    </div>
  );
}

function ContentsTrailing2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-0 pr-[16px] py-0 relative shrink-0" data-name="Contents - Trailing">
      <EditButtonsLight2 />
    </div>
  );
}

function AccessoriesAndGrabber2() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <ContentsTrailing2 />
    </div>
  );
}

function TitleAndTrailingAccessories2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Title and Trailing Accessories">
      <TitleAndDetail2 />
      <AccessoriesAndGrabber2 />
    </div>
  );
}

function Contents3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <Image2 />
          <TitleAndTrailingAccessories2 />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative rounded-[20px]" data-name="Row">
      <Contents3 />
    </div>
  );
}

function RowList() {
  return (
    <div className="content-stretch flex h-[64px] items-center overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Row List">
      <Row2 />
    </div>
  );
}

function SingleAndMultipleChoiceOption2() {
  return (
    <div className="bg-[#e8f8ff] content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-[354px]" data-name="Single and Multiple Choice Option">
      <RowList />
    </div>
  );
}

function Image4() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
      <div className="relative shrink-0 size-[44px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="44" src={imgImage3} width="44" />
      </div>
    </div>
  );
}

function TitleAndDetail3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[60px] items-start justify-center min-h-px min-w-px relative" data-name="Title and Detail">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-hidden relative shrink-0 text-[17px] text-black text-ellipsis tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-g0mm18 leading-[22px] overflow-hidden">I’d rather not share</p>
      </div>
    </div>
  );
}

function EditButtonsLight3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[24px]" data-name="_Edit Buttons/Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22">
        <g id="_Edit Buttons/Light">
          <path d={svgPaths.pe7ec4f2} fill="var(--fill-0, #3C3C43)" fillOpacity="0.18" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ContentsTrailing3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-0 pr-[16px] py-0 relative shrink-0" data-name="Contents - Trailing">
      <EditButtonsLight3 />
    </div>
  );
}

function AccessoriesAndGrabber3() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <ContentsTrailing3 />
    </div>
  );
}

function TitleAndTrailingAccessories3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Title and Trailing Accessories">
      <TitleAndDetail3 />
      <AccessoriesAndGrabber3 />
    </div>
  );
}

function Contents4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <Image4 />
          <TitleAndTrailingAccessories3 />
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] h-[64px] items-center min-h-px min-w-px relative rounded-[20px]" data-name="Row">
      <Contents4 />
    </div>
  );
}

function SingleAndMultipleChoiceOption3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[354px]" data-name="Single and Multiple Choice Option">
      <Row3 />
    </div>
  );
}

function SingleAndMultipl() {
  return (
    <div className="bg-[#f2f2f7] relative shrink-0 w-full" data-name="Single and Multipl">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[16px] relative w-full">
        <SingleAndMultipleChoiceOption />
        <SingleAndMultipleChoiceOption1 />
        <SingleAndMultipleChoiceOption2 />
        <SingleAndMultipleChoiceOption3 />
      </div>
    </div>
  );
}

function ontent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="сontent">
      <Header />
      <SingleAndMultipl />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="bg-clip-text css-ew64yg font-['SF_Pro:Regular',sans-serif] font-normal leading-[17.6px] relative shrink-0 text-[13.6px] tracking-[-0.344px]" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100", backgroundImage: "linear-gradient(-69.8374deg, rgb(44, 188, 80) 21.223%, rgb(85, 218, 118) 96.433%)" }}>
        􀇻
      </p>
      <p className="bg-clip-text css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[22px] relative shrink-0 text-[17px] tracking-[-0.43px]" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100", backgroundImage: "linear-gradient(-14.1874deg, rgb(44, 188, 80) 21.223%, rgb(85, 218, 118) 96.433%)" }}>{`BMI 22 – you're in a good spot`}</p>
    </div>
  );
}

function urrentWeight() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[24px] shrink-0 w-[354px]" data-name="Сurrent Weight">
      <Frame1 />
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[22px]">Perfect starting point — we’ll personalize the next steps based on this.</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f24438] relative rounded-[20px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="css-ew64yg font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-white tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Next
          </p>
        </div>
      </div>
    </div>
  );
}

function HomeIndicator1() {
  return (
    <div className="h-[34px] relative shrink-0 w-[375px]" data-name="Home Indicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="content">
      <Button1 />
      <HomeIndicator1 />
    </div>
  );
}

function ButtonsBlock() {
  return (
    <div className="absolute backdrop-blur-[25px] bg-[rgba(242,242,247,0.6)] bottom-0 content-stretch flex flex-col gap-[16px] items-center left-0 pb-0 pt-[16px] px-[24px] w-[402px]" data-name="Buttons Block">
      <urrentWeight />
      <Content />
    </div>
  );
}

export default function Selected() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[48px] size-full" data-name="Selected">
      <HomeIndicator />
      <ontent />
      <ButtonsBlock />
    </div>
  );
}