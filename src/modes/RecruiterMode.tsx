import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Calendar, Award, Briefcase, Code2, Server, GraduationCap, BookOpen } from 'lucide-react';
import BioSection, { UpworkIcon } from '../components/BioSection';
import ProjectCard, { PROJECTS } from '../components/ProjectCard';
import { ResumeButton, ContactButton } from '../components/PremiumButton';
import Floating3D from '../components/Floating3D';

export default function RecruiterMode() {
  const experience = [
    {
      company: 'Freelance',
      role: 'Cloud & DevOps Engineer',
      period: 'Jan 2025 – Present',
      highlights: [
        'Built a Kubernetes self-healing system across 15+ microservices using pod restart policies and liveness/readiness probes — cut MTTR by ~60%',
        'Deployed a full observability stack (Prometheus, Grafana, Loki) with alerting on CPU, memory, pod restarts, and error rates',
        'Deployed Dockerized apps on AWS EC2 with Nginx reverse proxy and SSL/TLS via Certbot, designed for predictable recovery from failures',
        'Tuned alert thresholds from real incident patterns and documented incident-response runbooks',
      ],
    },
    {
      company: 'Signity Software Solutions',
      role: 'SDE Intern',
      period: 'Jun 2024 – Jan 2025',
      highlights: [
        'Shipped 10+ frontend features in React and TypeScript on a client-facing web app through Agile sprints',
        'Optimized GitHub Actions CI/CD pipelines, cutting build and deploy time from 12 to 7 minutes via parallelization and dependency caching',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Google Cloud Professional',
      issuer: 'Google',
      focus: 'SRE • Cloud Infrastructure • Design & Operations',
      year: '2025',
      color: '#4285f4',
    },
    {
      name: 'IBM Professional DevOps',
      issuer: 'IBM',
      focus: 'DevOps Practices • Agile/Scrum • CI/CD Foundations',
      year: '2025',
      color: '#054ada',
    },
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'REST APIs'] },
    { category: 'Frontend', items: ['React', 'Tailwind', 'TypeScript'] },
    { category: 'DevOps/Cloud', items: ['Docker', 'CI/CD', 'Google Cloud', 'SRE'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    { category: 'AI/ML', items: ['Optimization', 'ML Inference', 'Explainability'] },
  ];

  const highlights = [
    { icon: Code2, label: '20+ Projects', description: 'Shipped across industries', color: '#00d9ff' },
    { icon: Briefcase, label: '5+ Clients', description: 'Freelance & internships', color: '#8b5cf6' },
    { icon: Server, label: '12 E2E Systems', description: 'Full production apps', color: '#f59e9b' },
  ];

  // Animation variants for stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-mesh relative overflow-hidden">
      {/* 3D Decorations */}
      <Floating3D
        shape="icosahedron"
        color1="#00d9ff"
        color2="#8b5cf6"
        style={{ top: '10%', right: '3%', width: '200px', height: '200px' }}
      />
      <Floating3D
        shape="torus"
        color1="#8b5cf6"
        color2="#f59e9b"
        style={{ bottom: '20%', left: '2%', width: '180px', height: '180px' }}
      />

      <div className="container relative z-10 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio Card */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <BioSection variant="full" />
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>

              <div className="space-y-4">
                <ResumeButton className="w-full" />
                <ContactButton className="w-full" />

                <a
                  href="https://github.com/vanshitahujaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>

                <a
                  href="https://linkedin.com/in/vanshit-ahuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>

                <a
                  href="https://www.upwork.com/freelancers/~0173f50c6212e19412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#6fda44]/10 border border-[#6fda44]/20 text-[#6fda44] hover:bg-[#6fda44]/20 transition-all"
                >
                  <UpworkIcon className="w-5 h-5" />
                  Hire on Upwork
                </a>
              </div>

              {/* Status */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#22c55e]">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#22c55e]"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span className="text-sm font-medium">Open to Opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Highlights */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card p-6 flex items-center gap-4 cursor-pointer"
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold text-white">{item.label}</div>
                  <div className="text-white/50 text-sm">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[#00d9ff]" />
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: cert.color }}
                />
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-white/60 text-sm mb-2">{cert.issuer} • {cert.year}</p>
                    <p className="text-white/40 text-xs">{cert.focus}</p>
                  </div>
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cert.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-5 h-5" style={{ color: cert.color }} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-5"
              >
                <h3 className="text-[#00d9ff] font-semibold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * j }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,217,255,0.1)' }}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.05] border border-white/[0.08] text-white/70 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ x: 8 }}
                className="glass-card p-8 relative overflow-hidden group"
              >
                {/* Accent */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00d9ff] to-[#8b5cf6]"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                    <p className="text-[#00d9ff] font-medium text-lg">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-sm">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.08 }}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <Award className="w-5 h-5 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#8b5cf6]" />
            Research
          </h2>

          <motion.div
            className="glass-card p-6"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">In-situ Redevelopment Research</h3>
            <p className="text-white/50 text-sm mb-3">Urban Planning & Housing Policy</p>
            <p className="text-white/70">
              Research project on in-situ redevelopment solutions for slums in Gurugram,
              exploring sustainable urban planning approaches and housing policy frameworks
              for underserved communities.
            </p>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <span className="text-white/50 text-sm">Click cards for live demos</span>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROJECTS.map((project, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass-card p-8 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 via-transparent to-[#8b5cf6]/5" />

            <div className="relative z-10">
              <motion.h2
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Let's Connect
              </motion.h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8">
                I'm open to discussing new opportunities, interesting projects,
                or just having a chat about technology and systems design.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <motion.a
                  href="mailto:vanshitahuja@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] text-[#0a0a0f] font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  vanshitahuja@gmail.com
                </motion.a>
              </div>

              <div className="flex items-center justify-center gap-6 mt-6">
                <motion.a
                  href="https://github.com/vanshitahujaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#00d9ff] transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/vanshit-ahuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#00d9ff] transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.upwork.com/freelancers/~0173f50c6212e19412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#6fda44] transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <UpworkIcon className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
