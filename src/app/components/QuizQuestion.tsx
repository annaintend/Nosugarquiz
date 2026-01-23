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

// Emoji mapping based on option content/sentiment
const getEmojiForOption = (label: string, index: number): string => {
  const lowerLabel = label.toLowerCase();
  
  // Negative/struggling states
  if (lowerLabel.includes('out of control') || lowerLabel.includes('anxious') || lowerLabel.includes('worried')) return '😰';
  if (lowerLabel.includes('confus') || lowerLabel.includes('don\'t understand')) return '🤔';
  if (lowerLabel.includes('fine sometimes') || lowerLabel.includes('terrible other times')) return '🎢';
  if (lowerLabel.includes('frustrat') || lowerLabel.includes('crash')) return '😓';
  if (lowerLabel.includes('avoid') || lowerLabel.includes('rather not')) return '🙅';
  
  // Positive/improving states
  if (lowerLabel.includes('learning') || lowerLabel.includes('improving') || lowerLabel.includes('confident')) return '💪';
  if (lowerLabel.includes('calm') || lowerLabel.includes('trust')) return '😌';
  if (lowerLabel.includes('free') || lowerLabel.includes('no,')) return '🙆';
  
  // Specific topics
  if (lowerLabel.includes('energy') || lowerLabel.includes('focus')) return '⚡';
  if (lowerLabel.includes('mood') || lowerLabel.includes('emotional')) return '😊';
  if (lowerLabel.includes('weight') || lowerLabel.includes('body')) return '⚖️';
  if (lowerLabel.includes('food') && lowerLabel.includes('relationship')) return '🍽️';
  if (lowerLabel.includes('craving')) return '🍫';
  if (lowerLabel.includes('tools') || lowerLabel.includes('feedback')) return '🎯';
  if (lowerLabel.includes('pattern') || lowerLabel.includes('tracking')) return '📊';
  if (lowerLabel.includes('social') || lowerLabel.includes('eating out')) return '👥';
  if (lowerLabel.includes('stress')) return '😤';
  if (lowerLabel.includes('health')) return '💚';
  
  // Gender options
  if (lowerLabel.includes('female') || lowerLabel.includes('woman')) return '👩';
  if (lowerLabel.includes('male') || lowerLabel.includes('man')) return '👨';
  if (lowerLabel.includes('non-binary') || lowerLabel.includes('other')) return '🧑';
  
  // Default based on index
  const defaultEmojis = ['🤔', '😰', '💪', '🎯'];
  return defaultEmojis[index % defaultEmojis.length];
};

// Helper function to get contextual support title based on support text content
const getSupportTitle = (supportText: string): string => {
  const lowerText = supportText.toLowerCase();
  
  // Analyze the support text content
  if (lowerText.includes('not failing') || lowerText.includes('you\'re not alone')) return '✓ You\'re not failing';
  if (lowerText.includes('conflicting advice') || lowerText.includes('confusing')) return '✓ It\'s confusing';
  if (lowerText.includes('mindset') && lowerText.includes('stability')) return '✓ Perfect mindset';
  if (lowerText.includes('awareness') && lowerText.includes('feedback')) return '✓ You\'re right';
  if (lowerText.includes('inconsistency') || lowerText.includes('lack of discipline')) return '✓ Not your fault';
  if (lowerText.includes('normal') && lowerText.includes('glucose')) return '✓ Important insight';
  if (lowerText.includes('universal limit') || lowerText.includes('hasn\'t been mapped')) return '✓ Exactly';
  if (lowerText.includes('predictability') || lowerText.includes('post-event')) return '✓ Common issue';
  if (lowerText.includes('avoidance') && lowerText.includes('feedback')) return '✓ Makes sense';
  if (lowerText.includes('uncertainty') && lowerText.includes('cognitive burden')) return '✓ We understand';
  if (lowerText.includes('flexibility') && lowerText.includes('control')) return '✓ Great approach';
  if (lowerText.includes('glycemic responses') || lowerText.includes('comparison')) return '✓ Everyone\'s different';
  if (lowerText.includes('anticipation') || lowerText.includes('past glucose')) return '✓ Valid concern';
  if (lowerText.includes('patterns exist') || lowerText.includes('identified yet')) return '✓ Patterns exist';
  if (lowerText.includes('awareness changes') || lowerText.includes('removes anxiety')) return '✓ Knowledge is power';
  if (lowerText.includes('fatigue') || lowerText.includes('brain fog')) return '✓ Very common';
  if (lowerText.includes('irritability') || lowerText.includes('mood swings')) return '✓ It\'s physical';
  if (lowerText.includes('insulin spikes') || lowerText.includes('fat storage')) return '✓ Not about calories';
  if (lowerText.includes('over-restriction') || lowerText.includes('reactive eating')) return '✓ Understandable';
  if (lowerText.includes('healthy foods') && lowerText.includes('spike')) return '✓ Surprising, right?';
  if (lowerText.includes('delayed glucose') || lowerText.includes('classic window')) return '✓ Classic pattern';
  if (lowerText.includes('stress raises') || lowerText.includes('harder to predict')) return '✓ Stress impacts it';
  if (lowerText.includes('unfamiliar foods') || lowerText.includes('amplify')) return '✓ Hard to control';
  if (lowerText.includes('physiological response')) return '✓ Not willpower';
  if (lowerText.includes('emotional regulation')) return '✓ It\'s connected';
  if (lowerText.includes('mental effort')) return '✓ Exhausting';
  if (lowerText.includes('background stress')) return '✓ Relief is possible';
  if (lowerText.includes('cause and effect')) return '✓ Confidence follows';
  if (lowerText.includes('mental load') || lowerText.includes('space for life')) return '✓ Freedom matters';
  if (lowerText.includes('cognitive performance')) return '✓ Brain needs it';
  if (lowerText.includes('signals become consistent')) return '✓ Trust rebuilds';
  if (lowerText.includes('food neutrality') || lowerText.includes('restriction')) return '✓ Peace with food';
  if (lowerText.includes('compounds') || lowerText.includes('better days')) return '✓ It compounds';
  if (lowerText.includes('cornerstone') || lowerText.includes('metabolic')) return '✓ Foundation matters';
  if (lowerText.includes('removes guesswork')) return '✓ No more guessing';
  if (lowerText.includes('real-time') || lowerText.includes('in the moment')) return '✓ Instant help';
  if (lowerText.includes('trends reveal')) return '✓ Patterns matter';
  if (lowerText.includes('clarity without pressure')) return '✓ Sustainable way';
  if (lowerText.includes('metabolic') && lowerText.includes('men')) return '✓ We\'ll personalize';
  if (lowerText.includes('hormonal cycles')) return '✓ Cycles matter';
  if (lowerText.includes('personalized based on')) return '✓ Fully personalized';
  
  // Default
  return '✓ Got it';
};

export function QuizQuestion({
  question,
  options,
  selectedOption,
  onSelectOption,
  isMultiSelect,
}: QuizQuestionProps) {
  const handleOptionClick = (optionText: string) => {
    onSelectOption(optionText);
  };

  const isSelected = (optionText: string) => {
    if (Array.isArray(selectedOption)) {
      return selectedOption.includes(optionText);
    }
    return selectedOption === optionText;
  };

  return (
    <div className="w-full pb-6">
      <div className="space-y-2">
        {options.map((option, index) => {
          const selected = isSelected(option.value);

          return (
            <div key={index}>
              {/* Option Button */}
              <button
                onClick={() => handleOptionClick(option.value)}
                className={`w-full transition-all rounded-[24px] pl-2 pr-4 border ${
                  selected 
                    ? 'bg-[#E8F3FF] border-[#0a84ff]' 
                    : 'bg-white border-transparent'
                }`}
              >
                <div className="py-3">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center justify-center w-11 h-11 shrink-0">
                      <div className="text-2xl">
                        {getEmojiForOption(option.label, index)}
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-[16px] font-normal leading-[22px] tracking-[-0.2px] ${
                        selected ? 'text-[#0a84ff]' : 'text-black'
                      }`}>
                        {option.label}
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 shrink-0">
                      {selected ? (
                        <div className="w-[22px] h-[22px] rounded-full bg-[#0a84ff] flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-[22px] h-[22px] rounded-full border-2 border-gray-300 bg-white" />
                      )}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Export helper functions for use in App.tsx
export { getEmojiForOption, getSupportTitle };