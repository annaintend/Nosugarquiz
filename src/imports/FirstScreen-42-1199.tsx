import svgPaths from "./svg-tkgqnng92k";
import imgImage from "figma:asset/6dbf9c0179ba84e8486d96b4af5a3d60dede42d8.png";
import imgImage1 from "figma:asset/2c14d1a130083115ce9de36bb94dd14e9b1324c9.png";
import imgImage2 from "figma:asset/8fba64bbab167490051412715368c28e0dc3cebf.png";
import imgImage3 from "figma:asset/31d06230db586f0f904cfa4ae92265109368220d.png";

function Bg() {
  return (
    <div className="absolute h-[875px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[402px]" data-name="Bg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 875">
        <g clipPath="url(#clip0_42_525)" id="Bg">
          <g id="Ellipse 2049" />
        </g>
        <defs>
          <clipPath id="clip0_42_525">
            <rect fill="white" height="875" width="402" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f14e58] h-[54px] relative rounded-[20px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
          <p className="css-ew64yg font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-white tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Take the Quiz
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-0 relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[4px] relative rounded-[40px] shrink-0" data-name="Button">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-white tracking-[-0.23px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Terms of Use
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[4px] relative rounded-[40px] shrink-0" data-name="Button">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-white tracking-[-0.23px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Privacy Policy
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Button1 />
      <p className="css-ew64yg font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-white tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        and
      </p>
      <Button2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-[12px] px-0 relative shrink-0 w-[402px]">
      <p className="css-ew64yg font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-center text-white tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        By proceeding, you acknowledge and agree
      </p>
      <Frame1 />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34px] opacity-0 relative shrink-0 w-full" data-name="Home Indicator">
      <div className="absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
      <HomeIndicator />
    </div>
  );
}

function ButtonTc() {
  return (
    <div className="absolute bottom-px content-stretch flex flex-col gap-[12px] items-start left-0 w-[402px]" data-name="button, TC">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[41px] min-w-full relative shrink-0 text-[34px] text-center text-white tracking-[0.4px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Eat smarter. Feel better. Lose weight your way.
      </p>
    </div>
  );
}

function Ill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Ill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Ill">
          <g clipPath="url(#clip0_42_630)">
            <path d={svgPaths.p15e26c00} fill="var(--fill-0, white)" id="Subtract" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_42_630">
            <rect fill="white" height="20" rx="8" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[4.189px] items-center relative shrink-0 w-full" data-name="name">
      <Ill />
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[20px] relative shrink-0 text-[15px] text-white tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`2-min `}</p>
    </div>
  );
}

function Review() {
  return (
    <div className="backdrop-blur-[40px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[36px] items-start justify-center overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="Review">
      <Name />
    </div>
  );
}

function Ill1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Ill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Ill">
          <g clipPath="url(#clip0_42_625)">
            <path d={svgPaths.p15263680} fill="var(--fill-0, white)" id="Subtract" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_42_625">
            <rect fill="white" height="20" rx="8" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[4.189px] items-center relative shrink-0 w-full" data-name="name">
      <Ill1 />
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[20px] relative shrink-0 text-[15px] text-white tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Insights
      </p>
    </div>
  );
}

function Review1() {
  return (
    <div className="backdrop-blur-[40px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[36px] items-start justify-center overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="Review">
      <Name1 />
    </div>
  );
}

function Ill2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Ill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Ill">
          <g clipPath="url(#clip0_42_635)">
            <path d={svgPaths.p2d04cf00} fill="var(--fill-0, white)" id="Subtract" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_42_635">
            <rect fill="white" height="20" rx="8" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex gap-[4.189px] items-center relative shrink-0 w-full" data-name="name">
      <Ill2 />
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[20px] relative shrink-0 text-[15px] text-white tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personal Plan
      </p>
    </div>
  );
}

function Review2() {
  return (
    <div className="backdrop-blur-[40px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[36px] items-start justify-center overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="Review">
      <Name2 />
    </div>
  );
}

function Chips() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="chips">
      <Review />
      <Review1 />
      <Review2 />
    </div>
  );
}

function TextChips() {
  return (
    <div className="absolute bottom-[205px] content-stretch flex flex-col gap-[24px] items-center left-1/2 translate-x-[-50%] w-[354px]" data-name="text, chips">
      <Title />
      <Chips />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bottom-px contents left-0" data-name="content">
      <ButtonTc />
      <TextChips />
    </div>
  );
}

function Ill3() {
  return (
    <div className="absolute contents left-[42.5px] top-[64px]" data-name="ill">
      <div className="absolute flex h-[225.337px] items-center justify-center left-[42.5px] top-[70.74px] w-[192.147px]" style={{ "--transform-inner-width": "1024", "--transform-inner-height": "1027.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[356.156deg]">
          <div className="h-[213.869px] pointer-events-none relative rounded-[28.516px] w-[178.224px]" data-name="image">
            <div className="absolute inset-0 overflow-hidden rounded-[28.516px]">
              <img alt="" className="absolute h-[131.28%] left-[1.48%] max-w-none top-[-8.77%] w-[157.54%]" src={imgImage} />
            </div>
            <div aria-hidden="true" className="absolute border-[5.347px] border-solid border-white inset-0 rounded-[28.516px]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[240.964px] items-center justify-center left-[170.83px] top-[64px] w-[188.669px]" style={{ "--transform-inner-width": "3840", "--transform-inner-height": "5428" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.122deg] skew-x-[0.032deg]">
          <div className="h-[231.692px] pointer-events-none relative rounded-[28.516px] w-[176.442px]" data-name="image">
            <div aria-hidden="true" className="absolute inset-0 rounded-[28.516px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[28.516px] size-full" src={imgImage1} />
              <div className="absolute inset-0 overflow-hidden rounded-[28.516px]">
                <img alt="" className="absolute h-full left-[-99.13%] max-w-none top-[1.32%] w-[196.97%]" src={imgImage2} />
              </div>
              <div className="absolute inset-0 overflow-hidden rounded-[28.516px]">
                <img alt="" className="absolute h-[160.39%] left-[-110.57%] max-w-none top-[-1.04%] w-[210.61%]" src={imgImage3} />
              </div>
              <div className="absolute inset-0 overflow-hidden rounded-[28.516px]">
                <img alt="" className="absolute h-[144.33%] left-[-91.97%] max-w-none top-[-3.49%] w-[188.94%]" src={imgImage} />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[5.347px] border-solid border-white inset-0 rounded-[28.516px]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-black blur-[26.734px] h-[129.213px] left-[170.34px] top-[117.46px] w-[30.298px]" />
    </div>
  );
}

function TrustpilotRatings5StarRgb() {
  return (
    <div className="absolute contents inset-0" data-name="Trustpilot ratings 5star RGB">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.2248 14.8148">
        <g id="Group">
          <path d={svgPaths.p33f4a500} fill="var(--fill-0, #56D898)" id="Rectangle path" />
          <path d={svgPaths.p2e185c80} fill="var(--fill-0, #56D898)" id="Rectangle path_2" />
          <path d={svgPaths.p237f8780} fill="var(--fill-0, #56D898)" id="Rectangle path_3" />
          <path d={svgPaths.p3d6bf700} fill="var(--fill-0, #56D898)" id="Rectangle path_4" />
          <path d={svgPaths.p28bb6b00} fill="var(--fill-0, #56D898)" id="Rectangle path_5" />
          <path d={svgPaths.p18ca200} fill="var(--fill-0, white)" id="Shape" />
          <path d={svgPaths.p231095f0} fill="var(--fill-0, white)" id="Shape_2" />
          <path d={svgPaths.p1697bb00} fill="var(--fill-0, white)" id="Shape_3" />
          <path d={svgPaths.p15c6cf00} fill="var(--fill-0, white)" id="Shape_4" />
          <path d={svgPaths.p1516ec00} fill="var(--fill-0, white)" id="Shape_5" />
        </g>
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="h-[14.814px] overflow-clip relative shrink-0 w-[79.225px]" data-name="stars-5 1">
      <TrustpilotRatings5StarRgb />
    </div>
  );
}

function TrustPilotMicroStar() {
  return (
    <div className="content-stretch flex h-[15.156px] items-center relative shrink-0 w-[79.148px]" data-name="Trust Pilot Micro Star">
      <Stars />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="label">
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18.524px] relative shrink-0 text-[14.314px] text-[rgba(60,60,67,0.6)] tracking-[-0.3621px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mia, 35
      </p>
      <TrustPilotMicroStar />
    </div>
  );
}

function Review4() {
  return (
    <div className="backdrop-blur-[5.052px] bg-[#f2f2f7] relative rounded-[26.944px] shrink-0 w-full" data-name="Review">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10.104px] items-start p-[16.84px] relative w-full">
          <Label />
          <p className="css-4hzbpn font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[21.05px] relative shrink-0 text-[16.84px] text-black tracking-[-0.3789px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            #sugar.no is like having a nutritionist in my pocket 🥗
          </p>
          <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18.524px] relative shrink-0 text-[13.472px] text-[rgba(0,0,0,0.8)] tracking-[-0.3621px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            I love that everything is planned out for me, tracking my food and seeing real progress makes such a difference
          </p>
        </div>
      </div>
    </div>
  );
}

function Review3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shadow-[0px_-1px_20px_0px_rgba(1,44,88,0.25),0px_4px_20px_0px_rgba(255,255,255,0.25)] w-[328.323px]" data-name="Review">
      <Review4 />
    </div>
  );
}

export default function FirstScreen() {
  return (
    <div className="bg-gradient-to-b from-[#f2f2f7] overflow-clip relative rounded-[48px] size-full to-[#0a84ff]" data-name="First Screen">
      <Bg />
      <Content />
      <Ill3 />
      <div className="absolute flex h-[185.771px] items-center justify-center left-1/2 top-[268px] translate-x-[-50%] w-[335.373px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[357.549deg]">
          <Review3 />
        </div>
      </div>
    </div>
  );
}