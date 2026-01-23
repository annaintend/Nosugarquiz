import imgImage20942 from "figma:asset/c4c12baae59dc1d461f41ac88acba5609da92d25.png";
import imgDoughnut3D from "figma:asset/05b032611d53a344beb07d44c76066a4c74f4bf5.png";

function DoubleGift32Px() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[450px] size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Double_gift - 32px">
      <div className="absolute bottom-[-3px] h-[32px] left-1/2 translate-x-[-50%] w-[31.831px]" data-name="image 20942">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage20942} />
      </div>
    </div>
  );
}

function Nr() {
  return (
    <div className="bg-white overflow-clip relative rounded-[360px] shrink-0 size-[40px]" data-name="nr">
      <DoubleGift32Px />
    </div>
  );
}

function NrDivider() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="nr + divider">
      <Nr />
    </div>
  );
}

function Content() {
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

function EducationalArticleSelfTradingContent() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[24px]" data-name="Educational article (self trading) content" style={{ backgroundImage: "linear-gradient(87.5981deg, rgb(70, 162, 255) 0.38278%, rgb(10, 132, 255) 99.443%)" }}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <Content />
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
      <NrDivider />
      <EducationalArticleSelfTradingContent />
    </div>
  );
}

export default function Progress() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Progress">
      <Row />
    </div>
  );
}