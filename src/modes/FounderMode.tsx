import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Heart, XCircle, Clock, MessageSquare } from 'lucide-react';
import ProjectCard, { PROJECTS } from '../components/ProjectCard';
import { ResumeButton, ContactButton } from '../components/PremiumButton';
import Floating3D from '../components/Floating3D';

export default function FounderMode() {
  const startup = {
    name: 'Mental Sync',
    role: 'Co-Founder',
    period: '2021 - 2022',
    status: 'Sunset after 1 year',
    description: 'A mental health platform focused on making therapy and mental wellness accessible. We built features for mood tracking, guided exercises, and connecting users with mental health professionals.',
    achievements: [
      'Built and launched MVP within 3 months',
      'Achieved consistent sales and user growth',
      'Managed product development and technical decisions',
      'Gained invaluable startup experience at 17',
    ],
    lessons: [
      'Distribution is as important as product',
      'Cash flow management is critical for survival',
      'Start with a smaller, focused MVP',
      'Fail fast, but learn faster',
    ],
  };

  const freelancePackages = [
    {
      name: 'MVP Development',
      price: '$2,500+',
      duration: '2-4 weeks',
      description: 'Full-stack MVP with deployment',
      features: ['React/Next.js Frontend', 'Node.js/FastAPI Backend', 'Database Setup', 'Docker Deployment', 'Basic CI/CD'],
      color: '#00d9ff',
    },
    {
      name: 'Backend Systems',
      price: '$1,500+',
      duration: '1-3 weeks',
      description: 'API design & development',
      features: ['REST/GraphQL APIs', 'Database Design', 'Authentication', 'Rate Limiting', 'Documentation'],
      color: '#8b5cf6',
    },
    {
      name: 'DevOps Setup',
      price: '$800+',
      duration: '3-7 days',
      description: 'Infrastructure & automation',
      features: ['Docker/Compose', 'CI/CD Pipelines', 'Monitoring Setup', 'Cloud Deployment', 'Health Checks'],
      color: '#22c55e',
    },
  ];

  const problems = [
    {
      icon: Shield,
      problem: 'Systems breaking under load',
      solution: 'Built FaultLine—chaos engineering platform with real failure injection',
      color: '#ef4444',
    },
    {
      icon: Zap,
      problem: 'AI outputs that hallucinate',
      solution: 'Implemented CSP + A* validation layer for guaranteed valid results',
      color: '#f59e0b',
    },
    {
      icon: Target,
      problem: 'Silent production failures',
      solution: 'Built observability-first systems with recovery metrics',
      color: '#8b5cf6',
    },
  ];

  const impactMetrics = [
    { value: '40+', label: 'Projects Shipped' },
    { value: '10+', label: 'Client Projects' },
    { value: '12', label: 'End-to-End Systems' },
    { value: '1', label: 'Startup Founded' },
  ];

  return (
    <div className="min-h-screen bg-mesh relative overflow-hidden">
      {/* 3D Decorations */}
      <Floating3D
        shape="sphere"
        color1="#8b5cf6"
        color2="#f59e9b"
        style={{ top: '5%', right: '5%', width: '250px', height: '250px' }}
      />
      <Floating3D
        shape="torusKnot"
        color1="#00d9ff"
        color2="#8b5cf6"
        style={{ bottom: '15%', left: '3%', width: '200px', height: '200px' }}
      />

      <div className="container relative z-10 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-sm font-medium mb-6"
          >
            <TrendingUp className="inline w-4 h-4 mr-2" />
            Founder Mode
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            I Build &{' '}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#f59e9b] bg-clip-text text-transparent">
              Ship
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            From co-founding a startup at 17 to shipping 40+ projects for clients and companies.
            I take ownership from idea to production.
          </motion.p>
        </motion.section>

        {/* Impact Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-white/50 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Startup Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Startup Journey</h2>

          <div className="glass-card p-8 relative overflow-hidden max-w-4xl mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ec4899]/5 via-transparent to-[#8b5cf6]/5" />

            {/* Status badge */}
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-sm">
                <XCircle className="w-4 h-4" />
                {startup.status}
              </span>
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{startup.name}</h3>
                  <p className="text-[#ec4899] font-medium">{startup.role}</p>
                  <p className="text-white/50 text-sm mt-1">{startup.period}</p>
                </div>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">{startup.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Achievements */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#22c55e]" />
                    What We Built
                  </h4>
                  <ul className="space-y-2">
                    {startup.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <ArrowRight className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lessons */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#f59e0b]" />
                    Lessons Learned
                  </h4>
                  <ul className="space-y-2">
                    {startup.lessons.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <ArrowRight className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Future */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm italic">
                  Currently exploring new startup ideas. Open to co-founding something impactful. 🚀
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Freelance Pricing */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Hire Me</h2>
          <p className="text-white/50 text-center mb-8 max-w-xl mx-auto">
            Available for freelance projects. Quality code, on-time delivery, clear communication.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {freelancePackages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: pkg.color }}
                />

                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-white/50 text-sm">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: pkg.color }}>{pkg.price}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/60 text-sm">
                      <CheckCircle className="w-4 h-4" style={{ color: pkg.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="mailto:vanshitahuja@gmail.com?subject=Freelance%20Inquiry"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: `${pkg.color}15`,
                    border: `1px solid ${pkg.color}30`,
                    color: pkg.color
                  }}
                >
                  <MessageSquare className="w-4 h-4" />
                  Get Quote
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/40 text-sm mt-6">
            * Prices vary based on scope and complexity. Custom projects welcome.
          </p>
        </motion.section>

        {/* Problems I Solve */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Problems I Solve</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex items-center gap-6"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                <div className="flex-1">
                  <span className="text-white/70">{item.problem}</span>
                  <span className="text-white/30 mx-2">→</span>
                  <span className="text-[#22c55e]">{item.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What I've Shipped */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#f59e9b]/10" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Someone Who Ships?
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8">
                Startup experience taught me to move fast and ship quality.
                Let's build something together.
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
