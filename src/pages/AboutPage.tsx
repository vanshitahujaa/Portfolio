import { motion } from 'framer-motion';
import { Code, Rocket, Zap, Award, Github } from 'lucide-react';
import BioSection from '../components/BioSection';
import ProjectCard, { PROJECTS } from '../components/ProjectCard';
import { ResumeButton, ContactButton } from '../components/PremiumButton';
import Floating3D from '../components/Floating3D';
import Testimonials from '../components/Testimonials';
import GitHubStats from '../components/GitHubStats';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    type: 'education' | 'work' | 'project' | 'achievement';
}

const timeline: TimelineItem[] = [
    {
        year: '2021',
        title: 'Co-founded Mental Sync',
        description: 'Started a mental health startup at age 17. Built MVP, achieved sales, and learned invaluable lessons about distribution and cash flow.',
        type: 'achievement',
    },
    {
        year: '2023',
        title: 'Started B.Tech in CSE',
        description: 'Began Computer Science journey at BML Munjal University (CGPA: 7.96) with focus on systems and backend development.',
        type: 'education',
    },
    {
        year: '2024',
        title: 'SDE Intern',
        description: 'Joined Signity Software Solutions for two separate stints. Built responsive React.js components and optimized backend services.',
        type: 'work',
    },
    {
        year: '2024',
        title: 'Built FaultLine',
        description: 'Created production-ready chaos engineering platform for Docker. 9/9 tests passing, published on Docker Hub.',
        type: 'project',
    },
    {
        year: '2025',
        title: '20+ Projects Shipped',
        description: '20+ projects including 5+ for clients, 12 end-to-end systems. Open to opportunities.',
        type: 'achievement',
    },
];

const skills = [
    { name: 'Backend Development', level: 95, color: '#00d9ff' },
    { name: 'System Design', level: 90, color: '#8b5cf6' },
    { name: 'DevOps & CI/CD', level: 88, color: '#f59e9b' },
    { name: 'Python & FastAPI', level: 92, color: '#22c55e' },
    { name: 'Docker & Containers', level: 85, color: '#f59e0b' },
    { name: 'React & TypeScript', level: 80, color: '#00d9ff' },
];

const typeIcons = {
    education: Award,
    work: Zap,
    project: Rocket,
    achievement: Award,
};

const typeColors = {
    education: '#8b5cf6',
    work: '#00d9ff',
    project: '#f59e9b',
    achievement: '#22c55e',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-mesh relative overflow-hidden">
            {/* 3D Decorations */}
            <Floating3D
                shape="icosahedron"
                color1="#00d9ff"
                color2="#8b5cf6"
                style={{ top: '10%', right: '5%', width: '250px', height: '250px' }}
            />
            <Floating3D
                shape="torus"
                color1="#8b5cf6"
                color2="#f59e9b"
                style={{ bottom: '20%', left: '3%', width: '200px', height: '200px' }}
            />
            <Floating3D
                shape="octahedron"
                color1="#f59e9b"
                color2="#00d9ff"
                style={{ top: '50%', right: '10%', width: '150px', height: '150px' }}
            />

            <div className="container relative z-10 py-16">
                {/* Hero Section */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-12"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-sm font-medium mb-6"
                        >
                            <Code className="inline w-4 h-4 mr-2" />
                            About Me
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold mb-6"
                        >
                            Building{' '}
                            <span className="bg-gradient-to-r from-[#00d9ff] via-[#8b5cf6] to-[#f59e9b] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                                Reliable
                            </span>
                            <br />
                            Systems
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-white/60 max-w-2xl mx-auto"
                        >
                            I'm Vanshit Ahuja, a software engineer who believes that the best code
                            is the one that runs reliably in production, not just looks good in demos.
                        </motion.p>
                    </motion.div>

                    {/* Bio Card */}
                    <BioSection variant="full" className="max-w-4xl mx-auto" />
                </section>

                {/* Philosophy Section */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                icon: Zap,
                                title: 'Reliability First',
                                description: 'Systems should work consistently under pressure. I design for failure, not just success.',
                                color: '#00d9ff',
                            },
                            {
                                icon: Rocket,
                                title: 'Ownership Mindset',
                                description: 'I don\'t just write code—I own the entire lifecycle from design to deployment to monitoring.',
                                color: '#8b5cf6',
                            },
                            {
                                icon: Code,
                                title: 'Pragmatic Solutions',
                                description: 'Choose the right tool for the job. Complexity should be justified, not assumed.',
                                color: '#f59e9b',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 text-center"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                                >
                                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-white/60 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Journey Timeline */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            From curious coder to shipping production systems, here's how my path has evolved.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d9ff] via-[#8b5cf6] to-[#f59e9b]" />

                            {/* Timeline items */}
                            <div className="space-y-8">
                                {timeline.map((item, i) => {
                                    const Icon = typeIcons[item.type];
                                    const color = typeColors[item.type];

                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="relative flex items-start gap-6 pl-16"
                                        >
                                            {/* Icon */}
                                            <div
                                                className="absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                                                style={{
                                                    background: `${color}15`,
                                                    border: `2px solid ${color}40`,
                                                    boxShadow: `0 0 20px ${color}20`
                                                }}
                                            >
                                                <Icon className="w-6 h-6" style={{ color }} />
                                            </div>

                                            {/* Content */}
                                            <div className="glass-card p-6 flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span
                                                        className="text-xs font-mono px-3 py-1 rounded-full"
                                                        style={{ background: `${color}15`, color }}
                                                    >
                                                        {item.year}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                                <p className="text-white/60 text-sm">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            Technologies and domains I've built production systems with.
                        </p>
                    </motion.div>

                    <div className="max-w-2xl mx-auto space-y-6">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-white font-medium">{skill.name}</span>
                                    <span className="text-white/50 text-sm font-mono">{skill.level}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                                        className="h-full rounded-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                                            boxShadow: `0 0 20px ${skill.color}40`
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Social Proof Section */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Social Proof</h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            What people say and my open-source activity.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        <Testimonials />
                        <GitHubStats />
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            Production systems I've designed, built, and shipped.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {PROJECTS.map((project, i) => (
                            <ProjectCard key={i} project={project} index={i} />
                        ))}
                    </div>

                    {/* Open Source CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 text-center"
                    >
                        <a
                            href="https://github.com/vanshitahujaa/Portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all magnetic"
                        >
                            <Github className="w-5 h-5" />
                            <span>View Portfolio Source Code</span>
                        </a>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 text-center relative overflow-hidden"
                    >
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/10 via-transparent to-[#8b5cf6]/10" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Let's Build Something Together
                            </h2>
                            <p className="text-white/60 max-w-xl mx-auto mb-8">
                                Whether you need a reliable backend system, want to discuss architecture,
                                or just want to chat about systems design — I'd love to hear from you.
                            </p>

                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <ContactButton />
                                <ResumeButton />
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
