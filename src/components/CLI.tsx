import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Users, Briefcase, Code, Server, AlertTriangle, ArrowRight, Sparkles, User, LucideIcon } from 'lucide-react';
import BioSection from './BioSection';
import ProjectCard, { PROJECTS } from './ProjectCard';
import { ResumeButton, ContactButton } from './PremiumButton';
import Floating3D from './Floating3D';

interface CLIProps {
  onModeChange: (mode: string) => void;
}

interface ModeCard {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

const modes: ModeCard[] = [
  {
    id: 'recruiter',
    title: 'Recruiter',
    subtitle: 'Fast Overview',
    icon: Users,
    color: '#00d9ff',
    description: 'Quick view of skills, projects & experience',
  },
  {
    id: 'founder',
    title: 'Founder',
    subtitle: 'Business Impact',
    icon: Briefcase,
    color: '#8b5cf6',
    description: 'Startup experience, ownership, and what I ship',
  },
  {
    id: 'engineer',
    title: 'Engineer',
    subtitle: 'Technical Deep-Dive',
    icon: Code,
    color: '#f59e9b',
    description: 'Architecture decisions, tradeoffs, and code',
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Infrastructure',
    icon: Server,
    color: '#22c55e',
    description: 'CI/CD, Docker, reliability engineering',
  },
  {
    id: 'systems',
    title: 'Systems',
    subtitle: 'Failure Stories',
    icon: AlertTriangle,
    color: '#f59e0b',
    description: 'What broke, how I fixed it, lessons learned',
  },
  {
    id: 'about',
    title: 'About',
    subtitle: 'My Journey',
    icon: User,
    color: '#ec4899',
    description: 'Full story, timeline, and philosophy',
  },
];

const ASCII_INTRO = `
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║   ██╗   ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗████████╗        ║
║   ██║   ██║██╔══██╗████╗  ██║██╔════╝██║  ██║██║╚══██╔══╝        ║
║   ██║   ██║███████║██╔██╗ ██║███████╗███████║██║   ██║           ║
║   ╚██╗ ██╔╝██╔══██║██║╚██╗██║╚════██║██╔══██║██║   ██║           ║
║    ╚████╔╝ ██║  ██║██║ ╚████║███████║██║  ██║██║   ██║           ║
║     ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝           ║
║                                                                   ║
║   Software Engineer & SRE | 40+ Projects Shipped                  ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
`;

const HELP_TEXT = `
Available commands:
  recruiter   - View portfolio for recruiters
  founder     - View founder/startup perspective
  engineer    - Technical deep-dive
  devops      - Infrastructure & CI/CD
  systems     - Failure stories & lessons
  about       - My full journey
  help        - Show this message
  clear       - Clear terminal
  whoami      - Who am I?
  projects    - List all projects
  contact     - Get contact info
`;

export default function CLI({ onModeChange }: CLIProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: string }[]>([]);
  const [showVisualMode, setShowVisualMode] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when terminal is visible
  useEffect(() => {
    if (!showVisualMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showVisualMode]);

  // Scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let output = '';

    if (['recruiter', 'founder', 'engineer', 'devops', 'systems', 'about'].includes(command)) {
      onModeChange(command);
      return;
    }

    switch (command) {
      case 'help':
        output = HELP_TEXT;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'whoami':
        output = `
Vanshit Ahuja
Software Engineer & Site Reliability Engineer
BML Munjal University • B.Tech CSE • GPA 7.9

> 40+ projects shipped
> 10+ client projects (freelancing & internships)  
> 12 end-to-end systems built
> Co-founded Mental Sync at 17 (2021-2022)
> Specializing in reliability engineering & DevOps

Email: vanshitahuja@gmail.com
GitHub: github.com/vanshitahujaa
`;
        break;
      case 'projects':
        output = `
Featured Projects:

1. FaultLine - Chaos Engineering Platform
   Docker Hub: hub.docker.com/r/vanshahuja/
   GitHub: github.com/vanshitahujaa/FaultLine

2. Vibe - Social Media Platform  
   Live: vibe-social-media-application.vercel.app

3. Travel Planner - AI + CSP Algorithm
   Live: travel-planner-seven-rouge.vercel.app

4. Glaucoma Detection - Medical ML with Grad-CAM
   GitHub: github.com/vanshitahujaa/glaucoma-detection
`;
        break;
      case 'contact':
        output = `
Email: vanshitahuja@gmail.com
GitHub: github.com/vanshitahujaa
LinkedIn: linkedin.com/in/vanshit-ahuja

Status: Open to opportunities!
`;
        break;
      case 'visual':
      case 'gui':
        setShowVisualMode(true);
        return;
      case '':
        break;
      default:
        output = `Command not found: ${command}\nType 'help' for available commands.`;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  // Visual mode (default)
  if (showVisualMode) {
    return (
      <div className="min-h-screen bg-mesh relative overflow-hidden">
        {/* 3D Floating Elements */}
        <Floating3D
          shape="icosahedron"
          color1="#00d9ff"
          color2="#8b5cf6"
          style={{ top: '5%', right: '5%', width: '180px', height: '180px' }}
        />
        <Floating3D
          shape="torus"
          color1="#8b5cf6"
          color2="#f59e9b"
          style={{ bottom: '10%', left: '3%', width: '150px', height: '150px' }}
        />
        <Floating3D
          shape="octahedron"
          color1="#f59e9b"
          color2="#00d9ff"
          style={{ top: '40%', left: '8%', width: '120px', height: '120px' }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00d9ff]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container relative z-10 py-8">
          {/* Terminal Header with Toggle */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-white/40 text-sm font-mono">portfolio.sh</span>
            </div>

            <button
              onClick={() => setShowVisualMode(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all text-sm font-mono"
            >
              <Terminal className="w-4 h-4" />
              Switch to Terminal
            </button>
          </motion.div>

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <BioSection variant="hero" />
          </motion.section>

          {/* Mode Selection */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-[#00d9ff]" />
              <h2 className="text-xl font-semibold text-white">Choose Your View</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {modes.map((mode, i) => (
                <motion.button
                  key={mode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onModeChange(mode.id)}
                  className="group relative p-5 rounded-2xl text-left transition-all overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${mode.color}20, transparent 70%)`,
                    }}
                  />

                  {/* Top accent */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: mode.color }}
                  />

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${mode.color}15`, border: `1px solid ${mode.color}30` }}
                  >
                    {(() => {
                      const IconComponent = mode.icon;
                      return <IconComponent className="w-5 h-5" style={{ color: mode.color }} />;
                    })()}
                  </div>

                  <h3 className="text-white font-semibold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                    {mode.title}
                  </h3>
                  <p className="text-white/40 text-xs mb-2">{mode.subtitle}</p>
                  <p className="text-white/30 text-xs leading-relaxed line-clamp-2">
                    {mode.description}
                  </p>

                  {/* Arrow */}
                  <ArrowRight
                    className="absolute bottom-4 right-4 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0"
                    style={{ color: mode.color }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* Quick Actions */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <ResumeButton />
            <ContactButton />
          </motion.section>

          {/* Featured Projects */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Featured Projects</h2>
              <span className="text-white/40 text-sm">Click for live demos</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    );
  }

  // Terminal mode
  return (
    <div className="min-h-screen bg-[#0a0a0f] p-4 md:p-8 font-mono">
      {/* Floating 3D in background */}
      <Floating3D
        shape="icosahedron"
        color1="#00d9ff"
        color2="#8b5cf6"
        style={{ top: '10%', right: '5%', width: '150px', height: '150px', opacity: 0.3 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Terminal Window */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d0d12]/90 backdrop-blur-xl shadow-2xl">
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/[0.05]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-white/40 text-sm">vanshit@portfolio ~ </span>
            <button
              onClick={() => setShowVisualMode(true)}
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              [Visual Mode]
            </button>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="p-6 h-[70vh] overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
          >
            {/* ASCII Art */}
            <pre className="text-[#00d9ff] text-xs md:text-sm mb-6 leading-tight">
              {ASCII_INTRO}
            </pre>

            {/* Welcome message */}
            <div className="text-white/60 mb-4">
              <p>Welcome! Type <span className="text-[#00d9ff]">help</span> for commands or click mode names below:</p>
              <p className="mt-2">
                {modes.map((m, i) => (
                  <span key={m.id}>
                    <button
                      onClick={() => onModeChange(m.id)}
                      className="hover:underline"
                      style={{ color: m.color }}
                    >
                      {m.id}
                    </button>
                    {i < modes.length - 1 && <span className="text-white/30"> | </span>}
                  </span>
                ))}
              </p>
            </div>

            {/* Command History */}
            {history.map((entry, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-[#22c55e]">➜</span>
                  <span className="text-[#00d9ff]">~</span>
                  <span>{entry.command}</span>
                </div>
                {entry.output && (
                  <pre className="text-white/60 whitespace-pre-wrap mt-1 ml-6 text-sm">
                    {entry.output}
                  </pre>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2">
              <span className="text-[#22c55e]">➜</span>
              <span className="text-[#00d9ff]">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="w-2 h-5 bg-white/60 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Quick mode buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => onModeChange(mode.id)}
              className="px-4 py-2 rounded-lg text-sm transition-all hover:scale-105"
              style={{
                background: `${mode.color}15`,
                border: `1px solid ${mode.color}30`,
                color: mode.color,
              }}
            >
              {mode.title}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
