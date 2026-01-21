import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { ProgressBar } from '@/app/components/ProgressBar';
import feedbackIcon from 'figma:asset/90486e22ff62a6a395345bf739033db8966d35f7.png';

interface WeeklyFeedbackScreenProps {
  onContinue: () => void;
  onBack: () => void;
  frequency: string;
  portionSize: string;
}

export function WeeklyFeedbackScreen({ 
  onContinue, 
  onBack, 
  frequency, 
  portionSize 
}: WeeklyFeedbackScreenProps) {
  // Calculate weekly treats count and calories
  const getFrequencyCount = (freq: string): number => {
    switch (freq) {
      case 'rarely': return 0.5;
      case '1-2': return 1.5;
      case '3-4': return 3.5;
      case '5-7': return 6;
      case 'multiple': return 14;
      default: return 0;
    }
  };

  const getPortionCalories = (portion: string): number => {
    switch (portion) {
      case 'small': return 150;
      case 'medium': return 250;
      case 'large': return 425;
      default: return 250;
    }
  };

  const weeklyTreats = Math.round(getFrequencyCount(frequency));
  const caloriesPerTreat = getPortionCalories(portionSize);
  const totalWeeklyCalories = Math.round(weeklyTreats * caloriesPerTreat);

  // Determine feedback level based on frequency
  const getFeedbackData = () => {
    const freqCount = getFrequencyCount(frequency);
    
    if (freqCount <= 1.5) {
      // Rarely or 1-2 times per week
      return {
        icon: '✅',
        title: 'Excellent Control',
        subtitle: "You're already managing your intake very well",
        points: [
          'Your sugar intake is well-controlled',
          'You have strong dietary awareness',
          'Small optimizations can still boost energy',
          'You\'re positioned for excellent results',
        ],
      };
    } else if (freqCount <= 3.5) {
      // 3-4 times per week
      return {
        icon: '✅',
        title: 'Good Foundation',
        subtitle: "You're doing well, but there's room for improvement",
        points: [
          'Your sugar intake is relatively controlled',
          'Fine-tuning your habits will boost energy levels',
          'You can achieve complete sugar freedom easily',
          'You\'re already on the right track',
        ],
      };
    } else if (freqCount <= 6) {
      // 5-7 times per week
      return {
        icon: '💪',
        title: 'High Potential',
        subtitle: 'You have a significant opportunity for improvement',
        points: [
          'Daily treats may be driving energy crashes',
          'Small changes can create dramatic improvements',
          'You could see results within the first week',
          'Your body will thank you for this shift',
        ],
      };
    } else {
      // Multiple times daily
      return {
        icon: '🎯',
        title: 'Transform Possible',
        subtitle: 'Your biggest wins are just ahead',
        points: [
          'Frequent sugar intake is likely impacting your energy',
          'You have the most room for positive change',
          'Early results could be life-changing',
          'Every small step will make a noticeable difference',
        ],
      };
    }
  };

  const feedbackData = getFeedbackData();

  return (
    <>
      {/* Header */}
      <div className="bg-[#f2f2f7] sticky top-0 z-10">
        {/* Progress Bar Section */}
        <div className="h-[44px] relative flex items-center justify-center px-4">
          <button
            onClick={onBack}
            className="absolute left-4 bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center justify-center">
            <ProgressBar current={8} total={10} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Icon */}
        <div className="flex justify-center mt-8 mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-[100px] h-[100px] rounded-[24px] bg-gradient-to-br from-[#34c759] to-[#30d158] flex items-center justify-center shadow-lg"
          >
            <span className="text-[56px]">{feedbackData.icon}</span>
          </motion.div>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black mb-3"
          >
            {feedbackData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[17px] font-normal leading-[22px] tracking-[1.5px] text-[rgba(60,60,67,0.6)]"
          >
            {feedbackData.subtitle}
          </motion.p>
        </div>

        {/* Bullet Points */}
        <div className="space-y-4 mb-8">
          {feedbackData.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#f14e58] mt-2 flex-shrink-0"></div>
              <p className="text-[17px] font-normal leading-[24px] tracking-[-0.24px] text-[rgba(60,60,67,0.85)]">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Weekly Impact Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[rgba(142,142,147,0.12)] rounded-[20px] p-6 text-center mb-24"
        >
          <p className="text-[15px] font-medium leading-[20px] tracking-[-0.24px] text-[rgba(60,60,67,0.6)] mb-2">
            Your Weekly Impact:
          </p>
          <p className="text-[20px] font-semibold leading-[24px] tracking-[-0.43px] text-black">
            {weeklyTreats} spike{weeklyTreats !== 1 ? 's' : ''} • {totalWeeklyCalories} calories
          </p>
        </motion.div>
      </div>

      {/* Bottom Button Section */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#f2f2f7] pb-8 pt-4 px-6">
        <motion.button
          onClick={onContinue}
          className="w-full py-4 rounded-[20px] text-[17px] font-medium leading-[22px] tracking-[-0.43px] bg-gradient-to-r from-[#e91e63] via-[#f14e58] to-[#ff6b4a] text-white"
          whileTap={{ scale: 0.98 }}
        >
          Continue
        </motion.button>
      </div>
    </>
  );
}