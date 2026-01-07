import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, CheckCircle, Lightbulb, ChevronRight, Flame, Zap, Bug, Clock, LucideIcon } from 'lucide-react';
import ProjectCard, { PROJECTS } from '../components/ProjectCard';
import Floating3D from '../components/Floating3D';

interface FailureStory {
  id: number;
  title: string;
  project: string;
  symptom: string;
  rootCause: string;
  fix: string;
  lesson: string;
  severity: 'high' | 'medium' | 'low';
  icon: LucideIcon;
}

const failureStories: FailureStory[] = [
  {
    id: 1,
    title: 'Silent Container Restarts',
    project: 'FaultLine',
    symptom: 'Container restarts not detected, metrics showing false stability',
    rootCause: 'Health checks misconfigured—checking liveness instead of readiness',
    fix: 'Added stability window validation with minimum healthy duration checks',
    lesson: 'Recovery ≠ Restart. A restarted container isn\'t healthy until it\'s been stable for a meaningful period.',
    severity: 'high',
    icon: Bug,
  },
  {
    id: 2,
    title: 'Feed Latency Spike',
    project: 'Vibe',
    symptom: 'Feed load times jumped from 200ms to 8 seconds under moderate load',
    rootCause: 'Unbounded queries—pagination using OFFSET which scans all previous rows',
    fix: 'Implemented cursor-based pagination with indexed columns',
    lesson: 'Scalability must be designed in from the start, not retrofitted. OFFSET pagination is a time bomb.',
    severity: 'high',
    icon: Clock,
  },
  {
    id: 3,
    title: 'CI/CD Pipeline Slowdown',
    project: 'All Projects',
    symptom: 'Builds taking 20+ minutes, blocking rapid iteration',
    rootCause: 'No build caching, redundant dependency installs on every build',
    fix: 'Implemented layer caching, parallel job execution, and dependency caching',
    lesson: 'Developer velocity is a feature. Slow pipelines break iteration cycles and compound into technical debt.',
    severity: 'medium',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Overlapping AI Schedules',
    project: 'Travel Planner',
    symptom: 'AI generating itineraries with conflicting time slots and impossible transitions',
    rootCause: 'No constraint validation on LLM outputs—trusting generative AI to respect physics',
    fix: 'Implemented CSP layer + A* optimization for guaranteed valid schedules',
    lesson: 'AI is not magic. Generative models hallucinate. Deterministic validation is still required for reliability.',
    severity: 'high',
    icon: Flame,
  },
];

const severityColors = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#22c55e',
};

export default function SystemsMode() {
  return (
    <div className="min-h-screen bg-mesh relative overflow-hidden">
      {/* 3D Decorations */}
      <Floating3D
        shape="octahedron"
        color1="#ef4444"
        color2="#f59e0b"
        style={{ top: '8%', right: '5%', width: '200px', height: '200px' }}
      />
      <Floating3D
        shape="torusKnot"
        color1="#f59e0b"
        color2="#8b5cf6"
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
            className="inline-block px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-sm font-medium mb-6"
          >
            <AlertTriangle className="inline w-4 h-4 mr-2" />
            Systems Mode
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Failures &{' '}
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#ef4444] bg-clip-text text-transparent">
              Postmortems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Real failures I've encountered, debugged, and learned from.
            Because the best engineers learn more from their failures than their successes.
          </motion.p>
        </motion.section>

        {/* Failure Summary Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Incidents Resolved', value: '15+', color: '#22c55e' },
              { label: 'Systems Hardened', value: '4', color: '#00d9ff' },
              { label: 'MTTR Improved', value: '85%', color: '#8b5cf6' },
              { label: 'Lessons Learned', value: '∞', color: '#f59e0b' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 text-center"
              >
                <div
                  className="text-3xl font-bold font-mono mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Failure Stories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Failure Stories</h2>

          <div className="space-y-6">
            {failureStories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 relative overflow-hidden"
              >
                {/* Severity indicator */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ background: severityColors[story.severity] }}
                />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${severityColors[story.severity]}15`,
                        border: `1px solid ${severityColors[story.severity]}30`
                      }}
                    >
                      {(() => {
                        const IconComponent = story.icon;
                        return <IconComponent className="w-6 h-6" style={{ color: severityColors[story.severity] }} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.title}</h3>
                      <p className="text-white/50 text-sm">Project: {story.project}</p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium capitalize"
                    style={{
                      background: `${severityColors[story.severity]}15`,
                      color: severityColors[story.severity],
                      border: `1px solid ${severityColors[story.severity]}30`
                    }}
                  >
                    {story.severity} severity
                  </span>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Symptom */}
                    <div>
                      <div className="flex items-center gap-2 text-[#f59e0b] font-semibold mb-2">
                        <AlertTriangle className="w-4 h-4" />
                        Symptom
                      </div>
                      <p className="text-white/70 text-sm pl-6">{story.symptom}</p>
                    </div>

                    {/* Root Cause */}
                    <div>
                      <div className="flex items-center gap-2 text-[#ef4444] font-semibold mb-2">
                        <XCircle className="w-4 h-4" />
                        Root Cause
                      </div>
                      <p className="text-white/70 text-sm pl-6">{story.rootCause}</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Fix */}
                    <div>
                      <div className="flex items-center gap-2 text-[#22c55e] font-semibold mb-2">
                        <CheckCircle className="w-4 h-4" />
                        Fix Applied
                      </div>
                      <p className="text-white/70 text-sm pl-6">{story.fix}</p>
                    </div>

                    {/* Lesson */}
                    <div>
                      <div className="flex items-center gap-2 text-[#00d9ff] font-semibold mb-2">
                        <Lightbulb className="w-4 h-4" />
                        Lesson Learned
                      </div>
                      <p className="text-[#00d9ff]/80 text-sm pl-6 italic">{story.lesson}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Takeaways */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/5 via-transparent to-[#ef4444]/5" />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Takeaways</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Design for Failure',
                    description: 'Every system will fail. The question is whether you\'ve anticipated how.',
                    color: '#ef4444',
                  },
                  {
                    title: 'Observability is Critical',
                    description: 'You can\'t fix what you can\'t see. Invest in monitoring and alerting early.',
                    color: '#f59e0b',
                  },
                  {
                    title: 'Validate Everything',
                    description: 'Never trust external inputs—including AI outputs. Verify deterministically.',
                    color: '#22c55e',
                  },
                ].map((takeaway, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `${takeaway.color}15`,
                        border: `2px solid ${takeaway.color}30`
                      }}
                    >
                      <ChevronRight className="w-8 h-8" style={{ color: takeaway.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{takeaway.title}</h3>
                    <p className="text-white/60 text-sm">{takeaway.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Related Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Related Projects</h2>
          <p className="text-white/50 mb-8">Systems where these lessons were applied</p>

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
