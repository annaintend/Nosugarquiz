import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';

interface GoalsScreenProps {
  onContinue: (goals: string[]) => void;
  onBack: () => void;
  initialGoals?: string[];
}

const goalOptions = [
  {
    id: 'steady-energy',
    emoji: '⚡',
    title: 'Steady daily energy',
    description: 'No more sharp crashes or afternoon slumps',
  },
  {
    id: 'clear-focus',
    emoji: '🧠',
    title: 'Clear focus and mental clarity',
    description: 'Stay sharp without relying on caffeine or snacks',
  },
  {
    id: 'weight-regulation',
    emoji: '⚖️',
    title: 'Easier weight regulation',
    description: 'Support fat balance by reducing glucose and insulin spikes',
  },
  {
    id: 'calm-eating',
    emoji: '🍽️',
    title: 'Calm, guilt-free eating',
    description: 'Eat without fear, overthinking, or restriction',
  },
  {
    id: 'mood-stability',
    emoji: '😊',
    title: 'Improved mood stability',
    description: 'Fewer mood swings driven by blood sugar drops',
  },
  {
    id: 'appetite-control',
    emoji: '🎯',
    title: 'Better appetite control',
    description: 'Reduce impulsive snacking and reactive eating',
  },
];

export function GoalsScreen({ onContinue, onBack, initialGoals = [] }: GoalsScreenProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(initialGoals);

  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      setSelectedGoals(selectedGoals.filter((id) => id !== goalId));
    } else {
      setSelectedGoals([...selectedGoals, goalId]);
    }
  };

  const handleContinue = () => {
    if (selectedGoals.length > 0) {
      onContinue(selectedGoals);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#f2f2f7] flex flex-col"
    >
      {/* Header */}
      <div className="bg-[#f2f2f7] sticky top-0 z-10">
        {/* Back Button Section */}
        <div className="h-[44px] relative flex items-center justify-center px-4">
          <button
            onClick={onBack}
            className="absolute left-4 bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Title Section */}
        <div className="px-6 py-3">
          <h1 className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black mb-4">
            Choose your{' '}
            <span className="text-[#0a84ff]">goals</span>
          </h1>
          <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-[rgba(60,60,67,0.6)]">
            Select all the outcomes you want to achieve by improving blood sugar stability
          </p>
        </div>
      </div>

      {/* Goal Cards */}
      <div className="flex-1 px-6 pt-6 pb-32">
        <div className="space-y-3">
          {goalOptions.map((goal, index) => {
            const isSelected = selectedGoals.includes(goal.id);
            
            return (
              <motion.button
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onClick={() => toggleGoal(goal.id)}
                className={`w-full p-5 rounded-[20px] text-left transition-all ${
                  isSelected
                    ? 'bg-[#0a84ff] shadow-lg'
                    : 'bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Emoji */}
                  <div className="text-[32px] flex-shrink-0">
                    {goal.emoji}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-[17px] font-semibold leading-[22px] tracking-[-0.43px] mb-1 ${
                      isSelected ? 'text-white' : 'text-black'
                    }`}>
                      {goal.title}
                    </h3>
                    <p className={`text-[15px] leading-[20px] tracking-[-0.24px] ${
                      isSelected ? 'text-white/90' : 'text-[rgba(60,60,67,0.6)]'
                    }`}>
                      {goal.description}
                    </p>
                  </div>

                  {/* Checkbox */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    isSelected
                      ? 'bg-white border-white'
                      : 'bg-transparent border-[rgba(60,60,67,0.3)]'
                  }`}>
                    {isSelected && (
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.5L5 9.5L13 1.5"
                          stroke="#0a84ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Bottom Button Section */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#f2f2f7] pb-8 pt-4 px-6">
        <button
          onClick={handleContinue}
          disabled={selectedGoals.length === 0}
          className={`w-full py-4 rounded-[20px] transition-colors text-[17px] font-medium leading-[22px] tracking-[-0.43px] ${
            selectedGoals.length > 0
              ? 'bg-[#f14e58] text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
}