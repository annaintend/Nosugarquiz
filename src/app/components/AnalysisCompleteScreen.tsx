import { motion } from 'motion/react';

interface AnalysisCompleteScreenProps {
  onContinue: () => void;
  answers: Record<number, string[] | string>;
}

export function AnalysisCompleteScreen({ onContinue, answers }: AnalysisCompleteScreenProps) {
  // Calculate score based on answers
  const calculateScore = () => {
    let score = 50; // Base score
    
    // Question 1: How do you see yourself
    const q1 = answers[1];
    if (q1 === 'learning-improving') score += 15;
    else if (q1 === 'need-tools') score += 10;
    else if (q1 === 'trying-better') score += 5;
    else if (q1 === 'out-of-control') score -= 10;
    
    // Question 2: What frustrates you (multi-select)
    const q2 = answers[2];
    if (Array.isArray(q2)) {
      if (q2.length >= 3) score -= 10;
      else if (q2.length >= 2) score -= 5;
    }
    
    // Question 3: Social situations
    const q3 = answers[3];
    if (q3 === 'adjust-portions') score += 15;
    else if (q3 === 'anxious-overthink') score -= 5;
    else if (q3 === 'avoid-certain-foods') score -= 5;
    else if (q3 === 'eat-without-knowing') score -= 10;
    
    // Question 4: How you feel when others eat sugar
    const q4 = answers[4];
    if (q4 === 'confident-limits') score += 15;
    else if (q4 === 'frustrated-unpredictable') score -= 5;
    else if (q4 === 'worried-crash') score -= 8;
    else if (q4 === 'confused-comparison') score -= 10;
    
    // Question 5: Area most affected (multi-select)
    const q5 = answers[5];
    if (Array.isArray(q5)) {
      if (q5.length >= 3) score -= 8;
      else if (q5.length >= 2) score -= 4;
    }
    
    // Question 6: When negative effects (multi-select)
    const q6 = answers[6];
    if (Array.isArray(q6)) {
      if (q6.length >= 3) score -= 8;
      else if (q6.length >= 2) score -= 4;
    }
    
    // Question 7: Symptoms (multi-select)
    const q7 = answers[7];
    if (Array.isArray(q7)) {
      if (q7.length >= 3) score -= 10;
      else if (q7.length >= 2) score -= 5;
    }
    
    // Question 8: Biggest consequence (multi-select)
    const q8 = answers[8];
    if (Array.isArray(q8)) {
      if (q8.length >= 3) score -= 10;
      else if (q8.length >= 2) score -= 5;
    }
    
    // Ensure score is between 0-100
    return Math.max(0, Math.min(100, score));
  };

  const score = calculateScore();
  const averageScore = 54;
  const improvement = 100 - score;
  
  // Determine insight based on score
  const getInsight = () => {
    if (score >= 75) {
      return "Your answers indicate relatively good blood sugar awareness. You're already making conscious choices and understand many patterns. With the right tools, you can fine-tune your stability even further.";
    } else if (score >= 60) {
      return "Your answers indicate moderate blood sugar variability. This often shows up as energy crashes, cravings, or inconsistent appetite — but it's highly improvable with better awareness and small adjustments.";
    } else if (score >= 40) {
      return "Your answers suggest noticeable blood sugar instability. This often creates daily unpredictability around food and energy — but the good news is that awareness and feedback create rapid improvement.";
    } else {
      return "Your answers indicate significant blood sugar challenges affecting multiple areas of life. This level of instability creates real barriers — but also represents the highest opportunity for life-changing improvement.";
    }
  };

  const getStabilityZoneLabel = () => {
    if (score >= 75) return "Strong stability";
    if (score >= 60) return "Moderate stability";
    if (score >= 40) return "Variable stability";
    return "High variability";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#f2f2f7] flex flex-col px-6 py-12"
    >
      <div className="flex-1 flex flex-col">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black mb-4">
            Analysis complete{' '}
            <span className="text-[#0a84ff]">✅</span>
          </h1>
          <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-[rgba(60,60,67,0.6)]">
            Here's what your responses suggest about your blood sugar stability
          </p>
        </motion.div>

        {/* Main Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-[24px] p-6 mb-6"
        >
          {/* Score Header */}
          <div className="text-center mb-6">
            <p className="text-[15px] font-medium leading-[20px] tracking-[-0.24px] text-[rgba(60,60,67,0.6)] mb-2">
              Blood Sugar Stability Score
            </p>
            <div className="text-[48px] font-semibold leading-[120%] tracking-[0.4px] text-[#0a84ff]">
              {score}
              <span className="text-[24px] text-[rgba(60,60,67,0.6)]"> / 100</span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="relative mb-6">
            {/* Safety Line */}
            <div className="absolute top-[20%] left-0 right-0 border-t-2 border-dashed border-[rgba(60,60,67,0.2)] z-10">
              <span className="absolute right-0 -top-5 text-[12px] font-medium text-[rgba(60,60,67,0.4)]">
                Stability zone
              </span>
            </div>

            {/* Bars Container */}
            <div className="flex items-end justify-center gap-8 h-[200px] pt-8">
              {/* Your Score Bar */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(score / 100) * 160}px` }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  className="w-[80px] bg-gradient-to-b from-[#f14e58] to-[#ff6b6b] rounded-t-[16px] relative flex items-start justify-center pt-3"
                >
                  <span className="text-white font-semibold text-[16px]">{score}%</span>
                </motion.div>
                <span className="text-[13px] font-medium text-[rgba(60,60,67,0.6)]">Your Score</span>
              </div>

              {/* Average Score Bar */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(averageScore / 100) * 160}px` }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  className="w-[80px] bg-gradient-to-b from-[#34c759] to-[#30d158] rounded-t-[16px] relative flex items-start justify-center pt-3"
                >
                  <span className="text-white font-semibold text-[16px]">{averageScore}%</span>
                </motion.div>
                <span className="text-[13px] font-medium text-[rgba(60,60,67,0.6)]">Average Score</span>
              </div>
            </div>
          </div>

          {/* Comparison Labels */}
          <div className="flex justify-between items-center mb-4 px-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#f14e58] to-[#ff6b6b]"></div>
              <span className="text-[14px] font-medium text-[rgba(60,60,67,0.8)]">
                Your score: {score}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#34c759] to-[#30d158]"></div>
              <span className="text-[14px] font-medium text-[rgba(60,60,67,0.8)]">
                Average: {averageScore}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Insight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-white rounded-[24px] p-6 mb-4"
        >
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-[#0a84ff]/10 text-[#0a84ff] rounded-full text-[13px] font-medium">
              {getStabilityZoneLabel()}
            </span>
          </div>
          <p className="text-[15px] leading-[22px] tracking-[-0.24px] text-[rgba(60,60,67,0.8)] mb-4">
            {getInsight()}
          </p>
          {improvement > 0 && (
            <div className="flex items-center gap-2 pt-3 border-t border-[rgba(60,60,67,0.1)]">
              <span className="text-[#34c759] text-[20px]">↗</span>
              <span className="text-[14px] font-semibold text-[#34c759]">
                +{improvement} points of improvement potential
              </span>
            </div>
          )}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center mb-6 px-4"
        >
          <p className="text-[12px] leading-[16px] tracking-[-0.08px] text-[rgba(60,60,67,0.5)]">
            This score is not a medical diagnosis.<br />
            It's a lifestyle-based estimate using behavioral patterns.
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="pb-8"
      >
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-[20px] bg-[#f14e58] text-white text-[17px] font-medium leading-[22px] tracking-[-0.43px]"
        >
          Check your signals
        </button>
      </motion.div>
    </motion.div>
  );
}
