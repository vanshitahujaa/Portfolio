import { useState } from 'react';
import CLI from './components/CLI';
import TopBar from './components/TopBar';
import RecruiterMode from './modes/RecruiterMode';
import FounderMode from './modes/FounderMode';
import EngineerMode from './modes/EngineerMode';
import DevOpsMode from './modes/DevOpsMode';
import SystemsMode from './modes/SystemsMode';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentMode, setCurrentMode] = useState<string | null>(null);

  const handleModeChange = (mode: string) => {
    setCurrentMode(mode);
    // Scroll to top when changing modes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentMode(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!currentMode) {
    return <CLI onModeChange={handleModeChange} />;
  }

  return (
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
  );
}

export default App;
