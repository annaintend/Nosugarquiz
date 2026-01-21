import { motion } from 'motion/react';
import { Area, AreaChart, XAxis, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

interface IntermediateScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const data = [
  { name: '3 Days', value: 30 },
  { name: '7 Days', value: 55 },
  { name: '30 Days', value: 85 }
];

const CustomDot = (props: any) => {
  const { cx, cy, index } = props;
  return (
    <circle
      key={`dot-${index}`}
      cx={cx}
      cy={cy}
      r={6}
      fill="#f14e58"
      stroke="#fff"
      strokeWidth={2}
    />
  );
};

export function IntermediateScreen({ onContinue, onBack }: IntermediateScreenProps) {
  const [animatedData, setAnimatedData] = useState(data.map(d => ({ ...d, value: 0 })));

  useEffect(() => {
    // Animate the data points
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f2f2f7] flex flex-col">
      {/* Header with Back Button */}
      <div className="bg-[#f2f2f7] sticky top-0 z-10">
        <div className="h-[44px] relative flex items-center justify-center px-4">
          <button
            onClick={onBack}
            className="absolute left-4 bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-1 flex flex-col px-6"
      >
        <div className="mb-8">
          <h1 className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black mb-4">
            See how a few minutes a day can{' '}
            <span className="text-[#0a84ff]">stabilize your energy</span>
          </h1>
          <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-[rgba(60,60,67,0.6)]">
            A preview of how your body adapts with better blood sugar awareness
          </p>
        </div>

        <div className="mb-6">
          <div className="h-[240px] mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={animatedData} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f14e58" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#f14e58" stopOpacity={0.02}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(60,60,67,0.6)', fontSize: 13, fontWeight: 500 }}
                  dy={10}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#f14e58"
                  strokeWidth={3}
                  fill="url(#colorValue)"
                  dot={CustomDot}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="text-sm font-semibold text-[#f14e58] mt-0.5 min-w-[60px]">3 Days</div>
              <div className="flex-1 text-[15px] font-medium leading-[20px] tracking-[-0.43px] text-[rgba(60,60,67,0.8)]">
                Fewer sudden energy crashes
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-sm font-semibold text-[#f14e58] mt-0.5 min-w-[60px]">7 Days</div>
              <div className="flex-1 text-[15px] font-medium leading-[20px] tracking-[-0.43px] text-[rgba(60,60,67,0.8)]">
                More predictable energy throughout the day
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-sm font-semibold text-[#f14e58] mt-0.5 min-w-[60px]">30 Days</div>
              <div className="flex-1 text-[15px] font-medium leading-[20px] tracking-[-0.43px] text-[rgba(60,60,67,0.8)]">
                Clear understanding of your personal patterns
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-black">
            Based on scientific data, blood sugar responses become more predictable within the first week.
            As patterns emerge, energy crashes decrease and food decisions require less effort.
          </p>
        </div>
      </motion.div>

      <div className="px-6 pb-8">
        <button
          onClick={onContinue}
          className="w-full bg-[#f14e58] text-white py-4 rounded-[20px] text-[17px] font-medium leading-[22px] tracking-[-0.43px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
