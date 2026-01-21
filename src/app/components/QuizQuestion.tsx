import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: Array<{
    value: string;
    label: string;
    supportText: string;
  }>;
  selectedOption: string[] | string | null;
  onSelectOption: (option: string) => void;
  questionNumber: number;
  totalQuestions: number;
  isMultiSelect: boolean;
}

export function QuizQuestion({
  question,
  options,
  selectedOption,
  onSelectOption,
  isMultiSelect,
}: QuizQuestionProps) {
  const [revealedSupport, setRevealedSupport] = useState<Set<string>>(new Set());

  // Reset revealed support when question changes
  useEffect(() => {
    // Show support text for already selected options
    if (Array.isArray(selectedOption)) {
      setRevealedSupport(new Set(selectedOption));
    } else if (selectedOption) {
      setRevealedSupport(new Set([selectedOption]));
    } else {
      setRevealedSupport(new Set());
    }
  }, [selectedOption]);

  const handleOptionClick = (optionText: string) => {
    onSelectOption(optionText);
    // Reveal support text for this option
    setRevealedSupport((prev) => new Set([...prev, optionText]));
  };

  const isSelected = (optionText: string) => {
    if (Array.isArray(selectedOption)) {
      return selectedOption.includes(optionText);
    }
    return selectedOption === optionText;
  };

  return (
    <div className="w-full px-6 pb-6">
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index}>
            <button
              onClick={() => handleOptionClick(option.value)}
              className={`w-full transition-all rounded-[20px] ${
                isSelected(option.value)
                  ? 'bg-[#e8f8ff]'
                  : 'bg-white'
              }`}
            >
              <div className="flex items-center gap-1 py-4 px-4">
                <div className="flex items-center justify-center w-11 h-11 shrink-0">
                  <div className="text-2xl">
                    {index === 0 ? '🤔' : index === 1 ? '😰' : index === 2 ? '😓' : '❓'}
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-black">
                    {option.label}
                  </p>
                </div>
                <div className="flex items-center justify-center w-6 h-6 shrink-0 mr-2">
                  {isSelected(option.value) ? (
                    <div className="w-[22px] h-[22px] rounded-full bg-[#0a84ff] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-[22px] h-[22px] rounded-full border-2 border-gray-300 bg-white" />
                  )}
                </div>
              </div>
            </button>
            
            <AnimatePresence>
              {revealedSupport.has(option.value) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 mb-2 bg-white rounded-[20px] p-4">
                    <p className="text-[17px] font-medium leading-[22px] tracking-[-0.43px] text-black">
                      {option.supportText}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}