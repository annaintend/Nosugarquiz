import { motion } from 'motion/react';
import svgPaths from "@/imports/svg-4jiaeetmq9";
import imgImage from "figma:asset/6dbf9c0179ba84e8486d96b4af5a3d60dede42d8.png";
import imgImage1 from "figma:asset/2c14d1a130083115ce9de36bb94dd14e9b1324c9.png";
import imgImage2 from "figma:asset/8fba64bbab167490051412715368c28e0dc3cebf.png";
import imgImage3 from "figma:asset/31d06230db586f0f904cfa4ae92265109368220d.png";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2f2f7] to-[#0a84ff] flex flex-col relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Image Cards */}
        <div className="absolute flex h-[225.337px] items-center justify-center left-[42.5px] top-[30px] w-[192.147px]">
          <div className="flex-none rotate-[356.156deg]">
            <div className="h-[213.869px] pointer-events-none relative rounded-[28.516px] w-[178.224px]">
              <div className="absolute inset-0 overflow-hidden rounded-[28.516px]">
                <img alt="" className="absolute h-[131.28%] left-[1.48%] max-w-none top-[-8.77%] w-[157.54%]" src={imgImage} />
              </div>
              <div aria-hidden="true" className="absolute border-[5.347px] border-solid border-white inset-0 rounded-[28.516px]" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[240.964px] items-center justify-center left-[170.83px] top-[24px] w-[188.669px]">
          <div className="flex-none rotate-[3.122deg] skew-x-[0.032deg]">
            <div className="h-[231.692px] pointer-events-none relative rounded-[28.516px] w-[176.442px]">
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
        <div className="absolute bg-black blur-[26.734px] h-[129.213px] left-[170.34px] top-[77.46px] w-[30.298px]" />
      </div>

      {/* Review Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute left-1/2 top-[210px] translate-x-[-50%] flex h-[185.771px] items-center justify-center w-[335.373px]"
      >
        <div className="flex-none rotate-[357.549deg]">
          <div className="w-[328.323px]">
            <div className="backdrop-blur-[5.052px] bg-[#f2f2f7] rounded-[26.944px]">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="flex flex-col gap-[10.104px] items-start p-[16.84px]">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[14.314px] font-medium leading-[18.524px] tracking-[-0.3621px] text-[rgba(60,60,67,0.6)]">
                      Mia, 35
                    </p>
                    <div className="flex items-center">
                      <svg className="w-[79.225px] h-[14.814px]" fill="none" preserveAspectRatio="none" viewBox="0 0 79.2248 14.8148">
                        <g>
                          <path d={svgPaths.p33f4a500} fill="#56D898" />
                          <path d={svgPaths.p2e185c80} fill="#56D898" />
                          <path d={svgPaths.p237f8780} fill="#56D898" />
                          <path d={svgPaths.p3d6bf700} fill="#56D898" />
                          <path d={svgPaths.p28bb6b00} fill="#56D898" />
                          <path d={svgPaths.p18ca200} fill="white" />
                          <path d={svgPaths.p231095f0} fill="white" />
                          <path d={svgPaths.p1697bb00} fill="white" />
                          <path d={svgPaths.p15c6cf00} fill="white" />
                          <path d={svgPaths.p1516ec00} fill="white" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[16.84px] font-semibold leading-[21.05px] tracking-[-0.3789px] text-black">
                    #sugar.no is like having a nutritionist in my pocket 🥗
                  </p>
                  <p className="text-[13.472px] font-medium leading-[18.524px] tracking-[-0.3621px] text-[rgba(0,0,0,0.8)]">
                    I love that everything is planned out for me, tracking my food and seeing real progress makes such a difference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Section - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto w-full flex flex-col gap-[12px] px-6 pb-2 bg-gradient-to-b from-transparent via-[#0a84ff] to-[#0a84ff] pt-8">
        {/* Title and Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col gap-[16px] items-center"
        >
          {/* Title */}
          <h1 className="text-[28px] font-semibold leading-[120%] tracking-[0.4px] text-white text-center">
            Eat smarter. Feel better. Lose weight your way.
          </h1>

          {/* Chips */}
          <div className="flex flex-wrap gap-[8px] items-center justify-center">
            {/* 2-min chip */}
            <div className="backdrop-blur-[40px] bg-[rgba(255,255,255,0.1)] h-[36px] px-[10px] py-[4px] rounded-[999px] flex items-center gap-[4.189px]">
              <div className="size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_42_630)">
                    <path d={svgPaths.p15e26c00} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_630">
                      <rect fill="white" height="20" rx="8" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[15px] font-medium leading-[20px] tracking-[-0.23px] text-white">
                2-min
              </p>
            </div>

            {/* Insights chip */}
            <div className="backdrop-blur-[40px] bg-[rgba(255,255,255,0.1)] h-[36px] px-[10px] py-[4px] rounded-[999px] flex items-center gap-[4.189px]">
              <div className="size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_42_625)">
                    <path d={svgPaths.p15263680} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_625">
                      <rect fill="white" height="20" rx="8" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[15px] font-medium leading-[20px] tracking-[-0.23px] text-white">
                Insights
              </p>
            </div>

            {/* Personal Plan chip */}
            <div className="backdrop-blur-[40px] bg-[rgba(255,255,255,0.1)] h-[36px] px-[10px] py-[4px] rounded-[999px] flex items-center gap-[4.189px]">
              <div className="size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_42_635)">
                    <path d={svgPaths.p2d04cf00} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_635">
                      <rect fill="white" height="20" rx="8" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[15px] font-medium leading-[20px] tracking-[-0.23px] text-white">
                Personal Plan
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={onStart}
          className="w-full bg-[#f14e58] text-white py-4 rounded-[20px] text-[17px] font-medium leading-[22px] tracking-[-0.43px]"
        >
          Take the Quiz
        </motion.button>

        {/* Stars and Satisfaction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-2 py-1.5"
        >
          {/* 5 Stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg key={index} width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFC107"
                  stroke="#FFC107"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
          {/* Satisfaction Text */}
          <p className="text-[15px] font-semibold leading-[22px] tracking-[-0.43px] text-white">
            98% Satisfaction
          </p>
        </motion.div>

        {/* Terms and Privacy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col items-center pb-2"
        >
          <p className="text-[13px] font-normal leading-[18px] tracking-[-0.23px] text-center text-white">
            By proceeding, you acknowledge and agree
          </p>
          <div className="flex gap-[6px] items-center">
            <button className="text-[13px] font-normal leading-[18px] tracking-[-0.23px] text-white underline">
              Terms of Use
            </button>
            <p className="text-[13px] font-normal leading-[18px] tracking-[-0.23px] text-white">
              and
            </p>
            <button className="text-[13px] font-normal leading-[18px] tracking-[-0.23px] text-white underline">
              Privacy Policy
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}