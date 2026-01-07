import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';

interface BioSectionProps {
    variant?: 'hero' | 'compact' | 'full';
    className?: string;
}

const bioData = {
    name: 'Vanshit Ahuja',
    title: 'Software Engineer & SRE',
    tagline: 'Building systems that don\'t break',
    location: 'India',
    email: 'vanshitahuja@gmail.com',
    photo: '/vanshit-photo.png',
    education: {
        degree: 'B.Tech in Computer Science',
        university: 'BML Munjal University',
        gpa: '7.9',
        years: '2023 - 2027',
    },
    stats: {
        projects: '40+',
        clients: '10+',
        e2e: '12',
    },
    social: {
        github: 'https://github.com/vanshitahujaa',
        linkedin: 'https://linkedin.com/in/vanshit-ahuja',
    },
    bio: 'I build production-ready systems with a focus on reliability, observability, and developer experience. From chaos engineering platforms to AI-powered applications, I ship software that works under pressure.',
};

export default function BioSection({ variant = 'hero', className = '' }: BioSectionProps) {
    if (variant === 'compact') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-4 ${className}`}
            >
                <img
                    src={bioData.photo}
                    alt={bioData.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#00d9ff]/30"
                />
                <div>
                    <h3 className="text-white font-semibold">{bioData.name}</h3>
                    <p className="text-[#00d9ff] text-sm">{bioData.title}</p>
                </div>
            </motion.div>
        );
    }

    if (variant === 'full') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className={`glass-card p-8 relative overflow-hidden ${className}`}
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 via-transparent to-[#8b5cf6]/5" />

                <div className="relative z-10">
                    {/* Header with photo */}
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                            <img
                                src={bioData.photo}
                                alt={bioData.name}
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#00d9ff]/30 shadow-lg shadow-[#00d9ff]/10"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#22c55e] border-2 border-[#0a0a0f] flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            </div>
                        </motion.div>

                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white mb-2">{bioData.name}</h2>
                            <p className="text-xl text-[#00d9ff] font-medium mb-3">{bioData.title}</p>

                            <div className="flex flex-wrap gap-4 text-white/50 text-sm">
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4" />
                                    {bioData.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Briefcase className="w-4 h-4" />
                                    Open to Opportunities
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <div className="flex items-center gap-3 mb-2">
                            <GraduationCap className="w-5 h-5 text-[#8b5cf6]" />
                            <span className="text-white font-medium">{bioData.education.degree}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-white/50 ml-8">
                            <span>{bioData.education.university}</span>
                            <span className="text-[#22c55e]">GPA: {bioData.education.gpa}/10</span>
                            <span>{bioData.education.years}</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                            <div className="text-2xl font-bold text-[#00d9ff]">{bioData.stats.projects}</div>
                            <div className="text-white/40 text-xs mt-1">Projects Shipped</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                            <div className="text-2xl font-bold text-[#8b5cf6]">{bioData.stats.clients}</div>
                            <div className="text-white/40 text-xs mt-1">Client Projects</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                            <div className="text-2xl font-bold text-[#f59e9b]">{bioData.stats.e2e}</div>
                            <div className="text-white/40 text-xs mt-1">End-to-End</div>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        <a
                            href={`mailto:${bioData.email}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/20 text-[#00d9ff] hover:bg-[#00d9ff]/20 transition-all text-sm"
                        >
                            <Mail className="w-4 h-4" />
                            {bioData.email}
                        </a>
                        <a
                            href={bioData.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href={bioData.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Hero variant (default)
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`glass-card p-8 relative overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 via-transparent to-[#8b5cf6]/5" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                {/* Photo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative flex-shrink-0"
                >
                    <img
                        src={bioData.photo}
                        alt={bioData.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#00d9ff]/30 shadow-lg shadow-[#00d9ff]/10"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#22c55e] border-2 border-[#0a0a0f]" />
                </motion.div>

                {/* Info */}
                <div className="text-center sm:text-left flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{bioData.name}</h2>
                    <p className="text-[#00d9ff] font-medium mb-1">{bioData.title}</p>
                    <p className="text-white/40 text-sm mb-1">{bioData.education.university} • GPA {bioData.education.gpa}</p>
                    <p className="text-white/50 text-sm">{bioData.tagline}</p>

                    {/* Quick stats */}
                    <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                        <div className="text-center">
                            <div className="text-lg font-bold text-white">{bioData.stats.projects}</div>
                            <div className="text-white/40 text-xs">Projects</div>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center">
                            <div className="text-lg font-bold text-white">{bioData.stats.clients}</div>
                            <div className="text-white/40 text-xs">Clients</div>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center">
                            <div className="text-lg font-bold text-white">{bioData.stats.e2e}</div>
                            <div className="text-white/40 text-xs">E2E</div>
                        </div>
                    </div>
                </div>

                {/* Social */}
                <div className="flex sm:flex-col gap-2">
                    <a
                        href={bioData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={bioData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${bioData.email}`}
                        className="p-2.5 rounded-xl bg-[#00d9ff]/10 border border-[#00d9ff]/20 text-[#00d9ff] hover:bg-[#00d9ff]/20 transition-all"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
