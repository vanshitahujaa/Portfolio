import { motion } from 'framer-motion';
import { Clock, CheckCircle, MessageSquare } from 'lucide-react';

export const freelancePackages = [
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

export default function PricingPackages() {
    return (
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
    );
}
