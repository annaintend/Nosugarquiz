import imgImage20942 from "figma:asset/c4c12baae59dc1d461f41ac88acba5609da92d25.png";
import imgDoughnut3D from "figma:asset/05b032611d53a344beb07d44c76066a4c74f4bf5.png";

function Check24Px() {
  return <div className="shrink-0 size-[20px]" data-name="check - 24 px" />;
}

function Nr1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="nr">
      <Check24Px />
    </div>
  );
}

function Nr() {
  return (
    <div className="bg-white overflow-clip relative rounded-[360px] shrink-0 size-[40px]" data-name="nr">
      <Nr1 />
    </div>
  );
}

function NrDivider() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pb-0 pt-[8px] px-0 relative self-stretch shrink-0" data-name="nr + divider">
      <Nr />
      <div className="bg-[rgba(84,84,86,0.12)] flex-[1_0_0] min-h-px min-w-px rounded-[360px] w-[2px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[24px] justify-center relative shrink-0 text-[20px] text-black tracking-[-0.45px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[25px]">Your Starting Point</p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[20px]">
          {`Just the basics — so we can tailor `}
          <br aria-hidden="true" />
          your plan from day one.
        </p>
      </div>
    </div>
  );
}

function DifficultyLevelChips() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[24px] items-center left-[239px] p-[8px] rounded-[20px] top-[12px]" data-name="Difficulty level chips" style={{ backgroundImage: "linear-gradient(-54.281deg, rgb(44, 188, 80) 21.223%, rgb(85, 218, 118) 96.433%)" }}>
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[16px] relative shrink-0 text-[12px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Done
      </p>
    </div>
  );
}

function EducationalArticleSelfTradingContent() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Educational article (self trading) content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Content />
          <DifficultyLevelChips />
        </div>
      </div>
    </div>
  );
}

function Progress() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[354px]" data-name="Progress">
      <NrDivider />
      <EducationalArticleSelfTradingContent />
    </div>
  );
}

function Nr3() {
  return <div className="absolute content-stretch flex flex-col items-center justify-center left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="nr" />;
}

function Nr2() {
  return (
    <div className="bg-white overflow-clip relative rounded-[360px] shrink-0 size-[40px]" data-name="nr">
      <Nr3 />
    </div>
  );
}

function NrDivider1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pb-0 pt-[8px] px-0 relative self-stretch shrink-0" data-name="nr + divider">
      <Nr2 />
      <div className="bg-[rgba(84,84,86,0.12)] flex-[1_0_0] min-h-px min-w-px rounded-[360px] w-[2px]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[24px] justify-center relative shrink-0 text-[20px] text-black tracking-[-0.45px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[25px]">{`What You've Tried`}</p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[20px]">We’ll skip what didn’t work and focus on what might.</p>
      </div>
    </div>
  );
}

function DifficultyLevelChips1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[24px] items-center left-[239px] p-[8px] rounded-[20px] top-[12px]" data-name="Difficulty level chips" style={{ backgroundImage: "linear-gradient(-54.281deg, rgb(44, 188, 80) 21.223%, rgb(85, 218, 118) 96.433%)" }}>
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[16px] relative shrink-0 text-[12px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Done
      </p>
    </div>
  );
}

function EducationalArticleSelfTradingContent1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Educational article (self trading) content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Content1 />
          <DifficultyLevelChips1 />
        </div>
      </div>
    </div>
  );
}

function Progress1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[354px]" data-name="Progress">
      <NrDivider1 />
      <EducationalArticleSelfTradingContent1 />
    </div>
  );
}

function Nr4() {
  return <div className="bg-white overflow-clip rounded-[360px] shrink-0 size-[40px]" data-name="nr" />;
}

function NrDivider2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pb-0 pt-[8px] px-0 relative self-stretch shrink-0" data-name="nr + divider">
      <Nr4 />
      <div className="bg-[rgba(84,84,86,0.12)] flex-[1_0_0] min-h-px min-w-px rounded-[360px] w-[2px]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[24px] justify-center relative shrink-0 text-[20px] text-black tracking-[-0.45px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[25px]">Your Daily Rhythm</p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[20px]">Your schedule matters more than you think. We’ll shape the plan around it.</p>
      </div>
    </div>
  );
}

function DifficultyLevelChips2() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[24px] items-center left-[239px] p-[8px] rounded-[20px] top-[12px]" data-name="Difficulty level chips" style={{ backgroundImage: "linear-gradient(-54.281deg, rgb(44, 188, 80) 21.223%, rgb(85, 218, 118) 96.433%)" }}>
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[16px] relative shrink-0 text-[12px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Done
      </p>
    </div>
  );
}

function EducationalArticleSelfTradingContent2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Educational article (self trading) content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Content2 />
          <DifficultyLevelChips2 />
        </div>
      </div>
    </div>
  );
}

function Progress2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[354px]" data-name="Progress">
      <NrDivider2 />
      <EducationalArticleSelfTradingContent2 />
    </div>
  );
}

function Nr5() {
  return <div className="bg-white overflow-clip rounded-[360px] shrink-0 size-[40px]" data-name="nr" />;
}

function NrDivider3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pb-0 pt-[8px] px-0 relative self-stretch shrink-0" data-name="nr + divider">
      <Nr5 />
      <div className="bg-[rgba(84,84,86,0.12)] flex-[1_0_0] min-h-px min-w-px rounded-[360px] w-[2px]" />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[24px] justify-center relative shrink-0 text-[20px] text-black tracking-[-0.45px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[25px]">Eating Habits</p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[20px]">
          {`Understanding how you eat helps `}
          <br aria-hidden="true" />
          us build a plan that actually sticks.
        </p>
      </div>
    </div>
  );
}

function DifficultyLevelChips3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[24px] items-center left-[239px] p-[8px] rounded-[20px] top-[12px]" data-name="Difficulty level chips" style={{ backgroundImage: "linear-gradient(-54.281deg, rgb(44, 188, 80) 21.223%, rgb(85, 218, 118) 96.433%)" }}>
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[16px] relative shrink-0 text-[12px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Done
      </p>
    </div>
  );
}

function EducationalArticleSelfTradingContent3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Educational article (self trading) content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Content3 />
          <DifficultyLevelChips3 />
        </div>
      </div>
    </div>
  );
}

function Progress3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[354px]" data-name="Progress">
      <NrDivider3 />
      <EducationalArticleSelfTradingContent3 />
    </div>
  );
}

function DoubleGift32Px() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[450px] size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Double_gift - 32px">
      <div className="absolute bottom-[-3px] h-[32px] left-1/2 translate-x-[-50%] w-[31.831px]" data-name="image 20942">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage20942} />
      </div>
    </div>
  );
}

function Nr6() {
  return (
    <div className="bg-white overflow-clip relative rounded-[360px] shrink-0 size-[40px]" data-name="nr">
      <DoubleGift32Px />
    </div>
  );
}

function NrDivider4() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="nr + divider">
      <Nr6 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="content">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.45px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[25px]">
          {`Your `}
          <br aria-hidden="true" />
          Personal Plan
        </p>
      </div>
    </div>
  );
}

function EducationalArticleSelfTradingContent4() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[24px]" data-name="Educational article (self trading) content" style={{ backgroundImage: "linear-gradient(87.5981deg, rgb(70, 162, 255) 0.38278%, rgb(10, 132, 255) 99.443%)" }}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <Content4 />
          <div className="relative shrink-0 size-[58px]" data-name="doughnut_3D">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-[-3.45%]" src={imgDoughnut3D} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative" data-name="row">
      <NrDivider4 />
      <EducationalArticleSelfTradingContent4 />
    </div>
  );
}

function Progress4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Progress">
      <Row />
    </div>
  );
}

export default function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-0 relative size-full" data-name="list">
      <Progress />
      <Progress1 />
      <Progress2 />
      <Progress3 />
      <Progress4 />
    </div>
  );
}