import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100 over 3 seconds
    const duration = 3000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Calculate circle properties
  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#f2f2f7] flex flex-col items-center justify-between px-6 py-12"
    >
      {/* Top Section with Title and Subtitle */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black mb-4">
            Analyzing your{' '}
            <span className="text-[#0a84ff]">blood sugar patterns</span>
          </h1>
          <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-[rgba(60,60,67,0.6)]">
            Building your personalized stability profile
          </p>
        </motion.div>

        {/* Circular Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(10, 132, 255, 0.1)"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#0a84ff"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: 'stroke-dashoffset 0.05s linear',
              }}
            />
          </svg>
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[28px] font-semibold text-[#0a84ff]">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>

        {/* Progress Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-[rgba(60,60,67,0.6)]">
            Calculating…
          </p>
        </motion.div>
      </div>

      {/* Bottom Trust Line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center pb-8"
      >
        <p className="text-[15px] font-medium leading-[20px] tracking-[-0.24px] text-[rgba(60,60,67,0.6)]">
          Profiles analyzed: <span className="text-[#0a84ff]">7,000+</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
