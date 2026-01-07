import { useState, useEffect, useCallback } from 'react';
import CLI from './components/CLI';
import TopBar from './components/TopBar';
import RecruiterMode from './modes/RecruiterMode';
import FounderMode from './modes/FounderMode';
import EngineerMode from './modes/EngineerMode';
import DevOpsMode from './modes/DevOpsMode';
import SystemsMode from './modes/SystemsMode';
import AboutPage from './pages/AboutPage';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';

const MODES = ['recruiter', 'founder', 'engineer', 'devops', 'systems', 'about'];

function App() {
  const [currentMode, setCurrentMode] = useState<string | null>(null);
  const [showKeyboardHint, setShowKeyboardHint] = useState(false);

  const handleModeChange = useCallback((mode: string) => {
    setCurrentMode(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBack = useCallback(() => {
    setCurrentMode(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Number keys 1-6 for modes
      if (e.key >= '1' && e.key <= '6') {
        const index = parseInt(e.key) - 1;
        if (MODES[index]) {
          handleModeChange(MODES[index]);
        }
      }

      // Escape to go back
      if (e.key === 'Escape' && currentMode) {
        handleBack();
      }

      // ? to show keyboard hints
      if (e.key === '?') {
        setShowKeyboardHint(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentMode, handleModeChange, handleBack]);

  // Show keyboard hint on first visit
  useEffect(() => {
    if (!localStorage.getItem('keyboardHintShown')) {
      setTimeout(() => {
        setShowKeyboardHint(true);
        localStorage.setItem('keyboardHintShown', 'true');
        setTimeout(() => setShowKeyboardHint(false), 5000);
      }, 3000);
    }
  }, []);

  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />

      {/* Keyboard hint overlay */}
      {showKeyboardHint && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] glass-card px-6 py-3 animate-slide-up">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-white/50">Keyboard:</span>
            <span className="text-white/70">
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono">1-6</kbd> modes
            </span>
            <span className="text-white/70">
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono">Esc</kbd> back
            </span>
            <span className="text-white/70">
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono">?</kbd> toggle
            </span>
          </div>
        </div>
      )}

      {!currentMode ? (
        <CLI onModeChange={handleModeChange} />
      ) : (
        <div className="min-h-screen bg-mesh">
          <TopBar
            mode={currentMode}
            onBack={handleBack}
            onNavigate={handleModeChange}
          />
          {currentMode === 'recruiter' && <RecruiterMode />}
          {currentMode === 'founder' && <FounderMode />}
          {currentMode === 'engineer' && <EngineerMode />}
          {currentMode === 'devops' && <DevOpsMode />}
          {currentMode === 'systems' && <SystemsMode />}
          {currentMode === 'about' && <AboutPage />}
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
