import { motion } from 'motion/react';
import { X, ChevronRight } from 'lucide-react';

interface PaywallScreenProps {
  onClose: () => void;
  onStartTrial: () => void;
}

export function PaywallScreen({ onClose, onStartTrial }: PaywallScreenProps) {
  // Calculate trial dates
  const getTrialDates = () => {
    const today = new Date();
    const reminderDate = new Date(today);
    reminderDate.setDate(today.getDate() + 5);
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 7);

    const formatDate = (date: Date) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}`;
    };

    return {
      reminder: formatDate(reminderDate),
      end: formatDate(endDate),
    };
  };

  const dates = getTrialDates();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#f2f2f7] flex flex-col"
    >
      {/* Header */}
      <div className="pt-12 px-6 pb-4 flex justify-end">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
        >
          <X className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-6 flex flex-col">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-[32px] font-semibold leading-[120%] tracking-[0.4px] text-black mb-2">
            Worried? Try #sugar.no ✨
          </h1>
          <p className="text-[32px] font-bold leading-[120%] tracking-[0.4px] text-[#0a84ff]">
            Free for 7 days
          </p>
        </motion.div>

        {/* What you'll get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[17px] font-semibold leading-[22px] tracking-[-0.43px] text-black mb-6">
            What you'll get in trial:
          </p>

          {/* Benefits List */}
          <div className="space-y-0">
            {/* Benefit 1 */}
            <div className="flex items-start gap-4 relative pb-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-[#0a84ff] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.3337 4L6.00033 11.3333L2.66699 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-0.5 h-full bg-[#0a84ff] mt-1"></div>
              </div>
              <div className="flex-1 pt-0.5">
                <p className="text-[17px] font-semibold leading-[22px] tracking-[-0.43px] text-black mb-1">
                  Personalized glucose insights
                </p>
                <p className="text-[15px] font-normal leading-[20px] tracking-[-0.23px] text-[rgba(60,60,67,0.6)]">
                  Understand how food affects your blood sugar
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-4 relative pb-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-[#0a84ff] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.3337 4L6.00033 11.3333L2.66699 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-0.5 h-full bg-[#0a84ff] mt-1"></div>
              </div>
              <div className="flex-1 pt-0.5">
                <p className="text-[17px] font-semibold leading-[22px] tracking-[-0.43px] text-black mb-1">
                  Food and restaurant guidance
                </p>
                <p className="text-[15px] font-normal leading-[20px] tracking-[-0.23px] text-[rgba(60,60,67,0.6)]">
                  Make better choices when eating out
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-[#0a84ff] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.3337 4L6.00033 11.3333L2.66699 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <p className="text-[17px] font-semibold leading-[22px] tracking-[-0.43px] text-black mb-1">
                  Tools to make confident choices
                </p>
                <p className="text-[15px] font-normal leading-[20px] tracking-[-0.23px] text-[rgba(60,60,67,0.6)]">
                  Track progress and see patterns over time
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-auto"
        >
          <p className="text-center text-[13px] font-medium leading-[18px] tracking-[-0.08px] text-[rgba(60,60,67,0.6)] mb-2">
            7 days free, then $6.99 / Week
          </p>
          <p className="text-center text-[40px] font-bold leading-[48px] tracking-[0.4px] text-[#0a84ff] mb-8">
            Only $1.00 / Day
          </p>

          {/* CTA Button */}
          <button
            onClick={onStartTrial}
            className="w-full bg-[#f14e58] text-white py-4 rounded-[20px] text-[17px] font-medium leading-[22px] tracking-[-0.43px] flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform mb-6"
          >
            Start your free 7-day trial
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-8">
            <button className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-[rgba(60,60,67,0.6)]">
              Terms of Use
            </button>
            <button className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-[rgba(60,60,67,0.6)]">
              Privacy Policy
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}