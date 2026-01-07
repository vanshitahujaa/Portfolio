import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Code, GitBranch, Database, Cloud, ExternalLink, Github, LucideIcon } from 'lucide-react';
import ProjectCard, { PROJECTS } from '../components/ProjectCard';
import Floating3D from '../components/Floating3D';

interface TechSection {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  tradeoffs?: string[];
  githubUrl?: string;
  liveUrl?: string;
  dockerUrl?: string;
}

const techSections: TechSection[] = [
  {
    id: 'faultline',
    title: 'FaultLine',
    subtitle: 'Chaos Engineering Platform',
    icon: Cloud,
    color: '#00d9ff',
    features: [
      'Docker-based service orchestration using Python SDK',
      'Failure injection: container crash, network latency, memory pressure',
      'Recovery detection via health endpoint polling',
      'Metrics collection: MTTR, stability windows, failure rates',
      'JSON persistence for experiment reproducibility',
    ],
    tradeoffs: [
      'JSON persistence chosen over database for simplicity and portability',
      'Polling used over event-driven for deterministic recovery detection',
      'Single-host focus for v1, distributed mode planned',
    ],
    githubUrl: 'https://github.com/vanshitahujaa/FaultLine',
    dockerUrl: 'https://hub.docker.com/r/vanshahuja/',
  },
  {
    id: 'vibe',
    title: 'Vibe',
    subtitle: 'Social Media Platform Architecture',
    icon: Database,
    color: '#8b5cf6',
    features: [
      'Cursor-based infinite scrolling for consistent pagination',
      'Optimized feed queries with proper indexing strategy',
      'Real-time updates via WebSocket connections',
      'Supabase for auth, storage, and real-time subscriptions',
      'React Query for client-side cache management',
    ],
    tradeoffs: [
      'Cursor pagination vs offset for better performance at scale',
      'Supabase chosen for rapid development with row-level security',
      'Client-side optimistic updates for perceived performance',
    ],
    liveUrl: 'https://vibe-social-media-application.vercel.app/',
  },
  {
    id: 'travel',
    title: 'Travel Planner',
    subtitle: 'Constraint-Aware AI System',
    icon: GitBranch,
    color: '#f59e9b',
    features: [
      'Constraint Satisfaction Problem (CSP) for feasibility validation',
      'A* algorithm for route optimization',
      'Deterministic outputs despite AI involvement',
      'Time-window constraints for realistic schedules',
      'Budget and preference weighting',
    ],
    tradeoffs: [
      'CSP layer adds latency but guarantees valid outputs',
      'A* chosen over simpler algorithms for optimality guarantees',
      'Hybrid AI+algorithmic approach for reliability',
    ],
    liveUrl: 'https://travel-planner-seven-rouge.vercel.app/',
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Detection',
    subtitle: 'Medical ML System',
    icon: Code,
    color: '#22c55e',
    features: [
      'Deep learning inference with TensorFlow/Keras',
      'Explainability features for medical context',
      'FastAPI backend with async processing',
      'Docker deployment for reproducibility',
      'Production-ready medical ML workflow',
    ],
    tradeoffs: [
      'Explainability prioritized over pure accuracy gains',
      'FastAPI chosen for async support and type safety',
      'Docker used to ensure consistent inference environment',
    ],
    githubUrl: 'https://github.com/vanshitahujaa/glaucoma-detection',
  },
];

export default function EngineerMode() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    faultline: true, // Start with first one expanded
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-mesh relative overflow-hidden">
      {/* 3D Decorations */}
      <Floating3D
        shape="octahedron"
        color1="#f59e9b"
        color2="#00d9ff"
        style={{ top: '8%', right: '5%', width: '220px', height: '220px' }}
      />
      <Floating3D
        shape="icosahedron"
        color1="#8b5cf6"
        color2="#22c55e"
        style={{ bottom: '15%', left: '3%', width: '180px', height: '180px' }}
      />

      <div className="container relative z-10 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#f59e9b]/10 border border-[#f59e9b]/20 text-[#f59e9b] text-sm font-medium mb-6"
          >
            <Code className="inline w-4 h-4 mr-2" />
            Engineer Mode
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            System{' '}
            <span className="bg-gradient-to-r from-[#f59e9b] to-[#00d9ff] bg-clip-text text-transparent">
              Architecture
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Technical deep-dives into architecture decisions, tradeoffs, and implementation details
          </motion.p>
        </motion.section>

        {/* Technical Deep Dives */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Technical Deep Dives</h2>

          <div className="space-y-4">
            {techSections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${section.color}15`, border: `1px solid ${section.color}30` }}
                    >
                      {(() => {
                        const IconComponent = section.icon;
                        return <IconComponent className="w-6 h-6" style={{ color: section.color }} />;
                      })()}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">{section.title}</h3>
                      <p className="text-white/50 text-sm">{section.subtitle}</p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedSections[section.id] ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-6 h-6" style={{ color: section.color }} />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {expandedSections[section.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/[0.05]">
                        <div className="pt-6 grid md:grid-cols-2 gap-8">
                          {/* Features */}
                          <div>
                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full" style={{ background: section.color }} />
                              Implementation Details
                            </h4>
                            <ul className="space-y-3">
                              {section.features.map((feature, j) => (
                                <li key={j} className="flex items-start gap-3 text-white/70 text-sm">
                                  <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: section.color }} />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tradeoffs */}
                          {section.tradeoffs && (
                            <div>
                              <h4 className="text-[#f59e0b] font-semibold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                                Design Tradeoffs
                              </h4>
                              <ul className="space-y-3">
                                {section.tradeoffs.map((tradeoff, j) => (
                                  <li key={j} className="flex items-start gap-3 text-white/60 text-sm">
                                    <span className="text-[#f59e0b]">→</span>
                                    {tradeoff}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Links */}
                        <div className="mt-6 pt-6 border-t border-white/[0.05] flex items-center gap-4 flex-wrap">
                          {section.githubUrl && (
                            <a
                              href={section.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white/70 hover:text-white hover:bg-white/[0.1] transition-all text-sm"
                            >
                              <Github className="w-4 h-4" />
                              View Source
                            </a>
                          )}
                          {section.liveUrl && (
                            <a
                              href={section.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                              style={{
                                background: `${section.color}20`,
                                border: `1px solid ${section.color}40`,
                                color: section.color
                              }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          )}
                          {section.dockerUrl && (
                            <a
                              href={section.dockerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white/70 hover:text-white hover:bg-white/[0.1] transition-all text-sm"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .103.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .103.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
                              </svg>
                              Docker Hub
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Projects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Project Cards</h2>
          <p className="text-white/50 mb-8">Quick access to all projects with live demos and source code</p>

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
