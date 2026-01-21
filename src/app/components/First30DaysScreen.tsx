import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { ProgressBar } from '@/app/components/ProgressBar';

interface First30DaysScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

export function First30DaysScreen({ onContinue, onBack }: First30DaysScreenProps) {
  const metrics = [
    {
      value: '–2.5 lbs',
      label: 'of body fat reduced',
      description: 'More stable blood sugar helps lower insulin spikes, making it easier for your body to access stored fat',
      gradient: true,
    },
    {
      value: '–30%',
      label: 'fewer overeating episodes',
      description: 'Fewer glucose crashes often mean fewer strong cravings and less reactive eating',
      gradient: false,
    },
    {
      value: '+60 hours',
      label: 'of steady energy gained',
      description: 'Less time spent feeling tired, foggy, or "running on empty" throughout the month',
      gradient: false,
    },
  ];

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
            <ProgressBar current={9} total={10} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="mb-8 mt-3">
          <h1 className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black mb-4">
            Imagine yourself just in first 30 days
          </h1>
          <p className="text-[17px] font-normal leading-[22px] tracking-[1.5px] text-[rgba(60,60,67,0.6)]">
            Stick with it and you could:
          </p>
        </div>

        {/* Metrics */}
        <div className="space-y-4 mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[24px] p-6 ${
                metric.gradient
                  ? 'bg-gradient-to-br from-[#e91e63] via-[#f14e58] to-[#ff6b4a]'
                  : 'bg-white'
              }`}
            >
              <div className="mb-3">
                <div className={`text-[48px] font-bold leading-[1.1] mb-1 ${
                  metric.gradient ? 'text-white' : 'text-black'
                }`}>
                  {metric.value}
                </div>
                <div className={`text-[17px] font-semibold leading-[22px] tracking-[-0.43px] ${
                  metric.gradient ? 'text-white' : 'text-black'
                }`}>
                  {metric.label}
                </div>
              </div>
              <p className={`text-[15px] font-normal leading-[20px] tracking-[-0.24px] ${
                metric.gradient ? 'text-white/90' : 'text-[rgba(60,60,67,0.6)]'
              }`}>
                {metric.description}
              </p>
              
              {/* Progress bar */}
              {metric.gradient && (
                <div className="mt-4 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-white rounded-full"></div>
                </div>
              )}
              {!metric.gradient && (
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-[#e91e63] to-[#ff6b4a] rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[13px] font-normal leading-[18px] text-[rgba(60,60,67,0.4)] text-center px-4 mb-24">
          Estimates based on typical responses to improved blood sugar stability. Individual results may vary.
        </p>
      </div>

      {/* Bottom Button Section */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#f2f2f7] pb-8 pt-4 px-6">
        <motion.button
          onClick={onContinue}
          className="w-full py-4 rounded-[20px] text-[17px] font-medium leading-[22px] tracking-[-0.43px] bg-gradient-to-r from-[#e91e63] via-[#f14e58] to-[#ff6b4a] text-white"
          whileTap={{ scale: 0.98 }}
        >
          Next
        </motion.button>
      </div>
    </>
  );
}