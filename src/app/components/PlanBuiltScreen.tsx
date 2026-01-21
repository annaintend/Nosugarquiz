import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface PlanBuiltScreenProps {
  onComplete: () => void;
  firstName: string;
}

export function PlanBuiltScreen({ onComplete, firstName }: PlanBuiltScreenProps) {
  // Get current date in MM/DD format
  const getCurrentDate = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${month}/${day}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#f2f2f7] flex flex-col items-center px-6 pt-16 pb-8"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black">
          We've built a plan just for you
        </h1>
      </motion.div>

      {/* Streak Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-[340px] relative mb-12"
      >
        {/* Sparkle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="absolute -top-2 -right-2 z-10"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 0L26.472 17.528L36 12L30.472 21.528L48 24L30.472 26.472L36 36L26.472 30.472L24 48L21.528 30.472L12 36L17.528 26.472L0 24L17.528 21.528L12 12L21.528 17.528L24 0Z"
              fill="#f14e58"
            />
          </svg>
        </motion.div>

        {/* Card */}
        <div className="bg-gradient-to-br from-[#ff006e] via-[#ff3d6f] to-[#ff5733] rounded-[24px] p-6 shadow-lg">
          {/* Header with Logo and Book Icon */}
          <div className="flex items-center justify-between mb-32">
            <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
              <div className="text-white text-[11px] font-bold leading-tight text-center">
                ST<br />PR
              </div>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="4" y="3" width="12" height="14" rx="1" fill="white" />
                <rect x="4" y="3" width="6" height="14" fill="white" fillOpacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Active Streak */}
          <div>
            <p className="text-white/90 text-[14px] font-medium mb-1">Active Streak</p>
            <p className="text-white text-[48px] font-bold leading-none mb-4">0 days</p>
          </div>
        </div>

        {/* Bottom Info Card */}
        <div className="bg-white rounded-b-[24px] -mt-4 pt-8 pb-4 px-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[rgba(60,60,67,0.6)] text-[13px] font-medium mb-1">Name</p>
              <p className="text-black text-[20px] font-semibold">{firstName}</p>
            </div>
            <div className="text-right">
              <p className="text-[rgba(60,60,67,0.6)] text-[13px] font-medium mb-1">Free since</p>
              <p className="text-black text-[20px] font-semibold">{getCurrentDate()}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="w-full max-w-[340px] mt-auto"
      >
        <button
          onClick={onComplete}
          className="w-full py-4 rounded-[20px] bg-[#0a84ff] text-white text-[17px] font-medium leading-[22px] tracking-[-0.43px] transition-all active:scale-[0.98]"
        >
          Yes, I'm ready to start journey!
        </button>
      </motion.div>
    </motion.div>
  );
}