import { motion } from 'framer-motion';
import { Github, ExternalLink, Box } from 'lucide-react';

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    dockerUrl?: string;
    dockerFrontend?: string;
    accentColor: string;
}

export const PROJECTS: Project[] = [
    {
        title: 'FaultLine',
        description: 'Production-ready Chaos Engineering Platform for Docker. Deploy containers, inject controlled failures (kill, latency, memory pressure), visualize recovery in real-time. 9/9 tests passing, 8 critical bugs fixed.',
        techStack: ['Node.js', 'Express', 'React', 'Docker', 'Docker Compose', 'Dockerode', 'Nginx'],
        githubUrl: 'https://github.com/vanshitahujaa/FaultLine',
        dockerUrl: 'https://hub.docker.com/r/vanshahuja/faultline-backend',
        dockerFrontend: 'https://hub.docker.com/r/vanshahuja/faultline-frontend',
        accentColor: '#00d9ff',
    },
    {
        title: 'Vibe',
        description: 'Full-stack social media platform with cursor-based infinite scrolling, real-time updates via WebSocket, and optimized feed queries. Built for high-read workloads at scale.',
        techStack: ['React', 'Supabase', 'PostgreSQL', 'React Query', 'WebSocket', 'Row-Level Security'],
        liveUrl: 'https://vibe-social-media-application.vercel.app/',
        accentColor: '#8b5cf6',
    },
    {
        title: 'Travel Planner',
        description: 'AI-powered travel planner with Constraint Satisfaction Problem (CSP) layer + A* optimization. Guarantees valid schedules with no overlapping events or impossible transitions.',
        techStack: ['React', 'Python', 'CSP Algorithm', 'A* Pathfinding', 'AI Integration'],
        liveUrl: 'https://travel-planner-seven-rouge.vercel.app/',
        accentColor: '#f59e9b',
    },
    {
        title: 'Glaucoma Detection',
        description: 'Medical ML system with EfficientNet-B0/MobileNetV2 backbone, Grad-CAM explainability, and FastAPI backend. Features ROI extraction, CLAHE enhancement, and AlexNet preprocessing pipeline.',
        techStack: ['FastAPI', 'React', 'TypeScript', 'EfficientNet', 'Grad-CAM', 'Albumentations'],
        githubUrl: 'https://github.com/vanshitahujaa/glaucoma-detection',
        accentColor: '#22c55e',
    },
    {
        title: 'ApplyOps',
        description: 'Job Application Automation & Optimization Platform. Auto-track applications via Gmail, generate tailored resumes with ATS scoring, create personalized cover letters, and analyze job search performance with response rate analytics.',
        techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
        githubUrl: 'https://github.com/vanshitahujaa/Apply-Ops',
        liveUrl: 'https://apply-ops.vercel.app',
        accentColor: '#f59e0b',
    },
];

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl"
            style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            {/* Accent glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.accentColor}15, transparent 70%)`,
                }}
            />

            {/* Top accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}60)` }}
            />

            <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3
                            className="text-xl font-bold mb-1 transition-colors"
                            style={{ color: project.accentColor }}
                        >
                            {project.title}
                        </h3>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
                                title="View Source"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:scale-110 transition-all"
                                style={{ background: `${project.accentColor}20`, color: project.accentColor }}
                                title="Live Demo"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                        {project.dockerUrl && (
                            <a
                                href={project.dockerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[#0db7ed]/20 hover:bg-[#0db7ed]/30 text-[#0db7ed] transition-all"
                                title="Docker Hub"
                            >
                                <Box className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.05] border border-white/[0.08] text-white/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Docker Frontend link if exists */}
                {project.dockerFrontend && (
                    <div className="mt-4 pt-4 border-t border-white/[0.05]">
                        <a
                            href={project.dockerFrontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-[#0db7ed] hover:text-[#0db7ed]/80 transition-colors"
                        >
                            <Box className="w-3 h-3" />
                            Frontend Image on Docker Hub
                        </a>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
