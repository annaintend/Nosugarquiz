import svgPaths from "./svg-pmg9ayl62k";

function Sugarno1() {
  return (
    <div className="absolute h-[105.622px] left-[127.7px] top-[43.1px] w-[555.778px]" data-name="#sugarno">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 555.778 105.622">
        <g id="#sugarno">
          <path d={svgPaths.p9552880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2887dc40} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1e4a1200} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p18150900} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p6ec4300} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p20fea400} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p18c8e780} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[127.7px] top-[43.1px]" data-name="Logo">
      <Sugarno1 />
    </div>
  );
}

function HashtagFork() {
  return (
    <div className="absolute inset-[13.03%_83.49%_15.01%_2.91%]" data-name="hashtag fork">
      <div className="absolute inset-[-0.36%_-0.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.6339 123.959">
          <g id="hashtag fork">
            <path d={svgPaths.p2a596b00} fill="var(--fill-0, white)" id="8" stroke="var(--stroke-0, white)" strokeWidth="0.893005" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Logo />
      <HashtagFork />
    </div>
  );
}

export default function Sugarno() {
  return (
    <div className="relative size-full" data-name="sugarno">
      <Group />
    </div>
  );
}