import { motion } from 'framer-motion';
import { Clock, CheckCircle, MessageSquare, Star } from 'lucide-react';
import { UpworkIcon } from './BioSection';

export const freelancePackages = [
    {
        name: 'DevOps & Monitoring',
        price: 'from $30/hr',
        duration: '3-7 days',
        description: 'Infra, CI/CD & observability',
        features: ['Docker / Compose setup', 'CI/CD pipelines (GitHub Actions)', 'Prometheus + Grafana dashboards', 'Server replication & backups', 'Alerting & health checks'],
        color: '#22c55e',
    },
    {
        name: 'API / Backend Platform',
        price: 'from $20/hr',
        duration: '1-3 weeks',
        description: 'End-to-end APIs & data',
        features: ['REST APIs (Node.js / FastAPI)', 'Database design & indexing', 'Auth, rate limiting & RBAC', 'Admin & health dashboards', 'Docs + deployment'],
        color: '#8b5cf6',
    },
    {
        name: 'Full Website',
        price: 'from $15/hr',
        duration: '2-4 weeks',
        description: 'End-to-end web app — 3D optional',
        features: ['React / Next.js frontend', 'Backend + database', 'Optional 3D / motion design', 'Responsive + SEO ready', 'Deployment & handover'],
        color: '#00d9ff',
    },
];

export default function PricingPackages() {
    return (
        <div className="space-y-6">
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
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-medium transition-all magnetic"
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

            {/* Trust line */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-white/50">
                <span className="flex items-center gap-1.5 text-[#22c55e]">
                    <Star className="w-4 h-4 fill-current" />
                    5-star rated by clients
                </span>
                <span className="text-white/20">•</span>
                <span>On-time delivery</span>
                <span className="text-white/20">•</span>
                <a
                    href="https://www.upwork.com/freelancers/~0173f50c6212e19412"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#6fda44] hover:underline"
                >
                    <UpworkIcon className="w-4 h-4" />
                    Hire on Upwork
                </a>
            </div>
        </div>
    );
}
