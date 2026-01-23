import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;
  const prevPercentageRef = useRef(percentage);

  useEffect(() => {
    prevPercentageRef.current = percentage;
  }, [percentage]);

  // Determine if we should animate or snap instantly
  const shouldAnimate = percentage >= prevPercentageRef.current;

  return (
    <div className="w-[194px] h-[9px] bg-white rounded-[8px] overflow-hidden">
      <motion.div
        className="h-full bg-[#0a84ff] rounded-[8px]"
        initial={false}
        animate={{ width: `${percentage}%` }}
        transition={shouldAnimate ? { duration: 0.3, ease: "easeOut" } : { duration: 0 }}
      />
    </div>
  );
}