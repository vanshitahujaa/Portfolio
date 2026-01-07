import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Users, Briefcase, Code, Server, AlertTriangle, ArrowRight, Sparkles, User, LucideIcon } from 'lucide-react';
import BioSection from './BioSection';
import ProjectCard, { PROJECTS } from './ProjectCard';
import { ResumeButton, ContactButton } from './PremiumButton';
import Floating3D from './Floating3D';
import PricingPackages from './PricingPackages';

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
  github      - View source code
  
Type 'help --secret' for easter eggs 🥚
`;

const SECRET_HELP = `
🥚 Easter Eggs:
  sudo hire-me    - Special hiring message
  matrix          - Enter the Matrix
  party           - Celebration mode
  coffee          - Developer fuel
  fortune         - Random wisdom
`;

const MATRIX_ASCII = `
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

[!] Connection established to Vanshit's server
[+] Skill tree loaded: Full-Stack, DevOps, SRE
[+] Experience: 40+ projects compiled
[>] Ready to deploy production code

Knock, knock, ${new Date().getHours() < 12 ? 'Good morning' : new Date().getHours() < 18 ? 'Good afternoon' : 'Good evening'}...
`;

const FORTUNES = [
  "You will merge 10 PRs without conflicts today.",
  "A mysterious bug will reveal itself before standup.",
  "Docker containers sense your fear. Stay calm.",
  "The code you write today will confuse you in 6 months.",
  "sudo make me a sandwich - PERMISSION GRANTED",
  "Your next deployment will be flawless. Maybe.",
  "The cloud is just someone else's computer having a good day.",
];

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
      case 'help --secret':
        output = SECRET_HELP;
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
      case 'github':
        output = `
📦 Portfolio Source Code
GitHub: github.com/vanshitahujaa/Portfolio

Built with: React 19 + TypeScript + Three.js + Framer Motion
Open source - feel free to fork and customize!
`;
        window.open('https://github.com/vanshitahujaa/Portfolio', '_blank');
        break;
      case 'sudo hire-me':
        output = `
🎉 ACCESS GRANTED 🎉

╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 CONGRATULATIONS! You've unlocked the hiring mode!   ║
║                                                           ║
║   ┌─────────────────────────────────────────────────┐     ║
║   │  Vanshit is:                                    │     ║
║   │  ✓ Available for full-time roles               │     ║
║   │  ✓ Open to exciting freelance projects         │     ║
║   │  ✓ Ready to ship production code on Day 1     │     ║
║   └─────────────────────────────────────────────────┘     ║
║                                                           ║
║   📧 vanshitahuja@gmail.com                              ║
║   💼 linkedin.com/in/vanshit-ahuja                       ║
║                                                           ║
║   Let's build something amazing together! 🔥              ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`;
        break;
      case 'matrix':
        output = MATRIX_ASCII;
        break;
      case 'party':
        output = `
🎊🎉🥳 PARTY MODE ACTIVATED! 🥳🎉🎊

    🎈  🎈  🎈  🎈  🎈
      \\  |  /
       \\ | /
  🎂 ===★=== 🎂
       / | \\
      /  |  \\
    🎈  🎈  🎈  🎈  🎈

Thanks for exploring! You're awesome! 🌟
`;
        break;
      case 'coffee':
        output = `
☕ FUEL DISPENSED ☕

    ( (
     ) )
   .______.
   |      |]
   \\      /
    \`----'

  "Code runs on caffeine and determination"
  
  Current caffeine level: ████████░░ 80%
  Lines of code remaining: ∞
`;
        break;
      case 'fortune':
        output = `
🔮 Your Developer Fortune:

"${FORTUNES[Math.floor(Math.random() * FORTUNES.length)]}"

Lucky numbers: ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}
Lucky framework: ${['React', 'Vue', 'Svelte', 'Solid'][Math.floor(Math.random() * 4)]}
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

          {/* Skills Section - Innovative Orbit Design */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 mb-16"
          >
            <h2 className="text-xl font-semibold text-white mb-8">Core Skills</h2>

            {/* Skills as animated experience bars */}
            <div className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Backend Development', level: 95, icon: '⚡', color: '#00d9ff' },
                  { name: 'System Design & Architecture', level: 90, icon: '🏗️', color: '#8b5cf6' },
                  { name: 'DevOps & CI/CD', level: 88, icon: '🔄', color: '#22c55e' },
                  { name: 'React & TypeScript', level: 85, icon: '⚛️', color: '#00d9ff' },
                  { name: 'Python & FastAPI', level: 92, icon: '🐍', color: '#22c55e' },
                  { name: 'Docker & Kubernetes', level: 85, icon: '🐳', color: '#8b5cf6' },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-white/40 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: 1 + i * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          boxShadow: `0 0 20px ${skill.color}40`
                        }}
                      >
                        {/* Animated shimmer */}
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            background: 'linear-gradient(90deg, transparent, white 50%, transparent)',
                            animation: 'shimmer 2s infinite',
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="mt-8 flex flex-wrap gap-2 justify-center">
                {['AWS', 'GCP', 'PostgreSQL', 'MongoDB', 'Redis', 'Node.js', 'GraphQL', 'Kafka'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-mono hover:bg-white/10 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Testimonials - Premium Card Design */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-xl font-semibold text-white mb-8">What People Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Kamal Kant', role: 'Founder & CEO', company: 'Dental AI', quote: 'Vanshit delivered our MVP in record time. The code was clean, well-documented, and the system has been running flawlessly for months.' },
                { name: 'Weizhi Li', role: 'CEO', company: 'Adaptive Machines', quote: 'Exceptional work on our machine learning pipeline. Production-ready code that exceeded our expectations.' },
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.15 }}
                  className="glass-card p-8 relative overflow-hidden group hover:border-white/20 transition-all"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,217,255,0.03) 0%, rgba(139,92,246,0.03) 100%)`,
                  }}
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-white/5 group-hover:text-white/10 transition-colors">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 text-lg leading-relaxed mb-6 relative z-10">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                      style={{
                        background: `linear-gradient(135deg, #00d9ff, #8b5cf6)`,
                        boxShadow: '0 8px 20px rgba(0,217,255,0.3)'
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-white/50 text-sm">{testimonial.role} • {testimonial.company}</p>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'linear-gradient(90deg, #00d9ff, #8b5cf6)' }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pricing Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="mb-16"
          >
            <h2 className="text-xl font-semibold text-white mb-8">Freelance Packages</h2>
            <PricingPackages />
          </motion.section>

          {/* Hire Me CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-16"
          >
            <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/10 via-transparent to-[#8b5cf6]/10" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-sm font-medium mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  Available for Hire
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's Build Something{' '}
                  <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
                    Amazing
                  </span>
                </h2>

                <p className="text-white/60 max-w-xl mx-auto mb-8">
                  Looking for a developer who ships production-ready code? Whether it's a new product,
                  a complex backend system, or reliability engineering — I'd love to help.
                </p>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <ContactButton />
                  <ResumeButton />
                </div>
              </div>
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
