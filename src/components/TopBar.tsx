import { motion } from 'framer-motion';
import { ArrowLeft, Download, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface TopBarProps {
  mode: string;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

const modeColors: Record<string, string> = {
  recruiter: '#00d9ff',
  founder: '#8b5cf6',
  engineer: '#f59e9b',
  devops: '#22c55e',
  systems: '#f59e0b',
  about: '#8b5cf6',
};

export default function TopBar({ mode, onBack, onNavigate }: TopBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const accentColor = modeColors[mode] || '#00d9ff';

  const handleDownload = () => {
    window.open('/data/Vanshit_SDE_Resume.pdf', '_blank');
  };

  const handleContact = () => {
    window.location.href = 'mailto:vanshitahuja@gmail.com';
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-4 mt-4">
          <div className="glass-card px-6 py-4 flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Back Button */}
              <motion.button
                onClick={onBack}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group magnetic"
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5 group-hover:text-[#00d9ff] transition-colors" />
                <span className="hidden sm:inline font-medium">Back</span>
              </motion.button>

              {/* Divider */}
              <div className="h-6 w-px bg-white/10" />

              {/* Mode Indicator */}
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
                />
                <span className="font-mono text-sm text-white/50">
                  MODE: <span className="text-white font-medium capitalize">{mode}</span>
                </span>
              </div>
            </div>

            {/* Center Section - Navigation (Desktop) */}
            <div className="hidden md:flex items-center gap-1">
              {['recruiter', 'founder', 'engineer', 'devops', 'systems'].map((m) => (
                <button
                  key={m}
                  onClick={() => onNavigate?.(m)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all magnetic ${mode === m
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  style={mode === m ? {
                    borderBottom: `2px solid ${modeColors[m]}`,
                  } : {}}
                >
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Status Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[#22c55e] text-xs font-medium">Available</span>
              </div>

              {/* Contact Button */}
              <motion.button
                onClick={handleContact}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all magnetic"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Contact</span>
              </motion.button>

              {/* Resume Button */}
              <motion.button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] text-[#0a0a0f] font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all magnetic"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden mx-4 mt-2"
        >
          <div className="glass-card p-4 space-y-2">
            {['recruiter', 'founder', 'engineer', 'devops', 'systems'].map((m) => (
              <button
                key={m}
                onClick={() => {
                  onNavigate?.(m);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all ${mode === m
                  ? 'bg-white/10 text-white'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={handleContact}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-24" />
    </>
  );
}
