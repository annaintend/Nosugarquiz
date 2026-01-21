import { motion } from 'motion/react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function ResultsScreen({ totalQuestions, onRestart }: ResultsScreenProps) {
  return (
    <div className="min-h-screen bg-[#f2f2f7] flex flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="flex-1 flex flex-col px-6 pt-20"
      >
        <div className="mb-8">
          <h1 className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black mb-4">
            Thank{' '}
            <span className="text-[#0a84ff]">You!</span>
          </h1>
          <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-[rgba(60,60,67,0.6)]">
            You've completed all {totalQuestions} questions
          </p>
        </div>

        <div className="bg-white rounded-[24px] p-4 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-4xl">✓</div>
            <div className="flex-1 pt-1">
              <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-[#2cbc50] mb-2">
                Your responses have been recorded
              </p>
              <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-black">
                Understanding your relationship with blood sugar is the first step toward balance and confidence with food.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="px-6 pb-8">
        <button
          onClick={onRestart}
          className="w-full bg-[#f14e58] text-white py-4 rounded-[20px] text-[17px] font-medium leading-[22px] tracking-[-0.43px]"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}