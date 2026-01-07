import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    delay: number;
}

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [showInitials, setShowInitials] = useState(false);

    useEffect(() => {
        // Check if already shown this session
        if (sessionStorage.getItem('loadingShown')) {
            setIsLoading(false);
            return;
        }

        // Generate particles that will form "VA"
        const letterPaths = getLetterPaths();
        const newParticles: Particle[] = letterPaths.map((point, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            targetX: point.x,
            targetY: point.y,
            delay: Math.random() * 0.5,
        }));
        setParticles(newParticles);

        // Show initials after particles animate
        setTimeout(() => setShowInitials(true), 800);

        // Hide loading screen
        setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('loadingShown', 'true');
        }, 2500);
    }, []);

    if (!isLoading) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0f]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-radial from-[#8b5cf6]/10 via-transparent to-transparent" />

                    {/* Particles */}
                    <div className="relative w-[300px] h-[200px]">
                        {particles.map((particle) => (
                            <motion.div
                                key={particle.id}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, #00d9ff, #8b5cf6)',
                                    boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
                                }}
                                initial={{
                                    x: particle.x - 150,
                                    y: particle.y - 100,
                                    opacity: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    x: particle.targetX,
                                    y: particle.targetY,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: particle.delay,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            />
                        ))}

                        {/* VA Text overlay */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showInitials ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span
                                className="text-7xl font-bold tracking-wider"
                                style={{
                                    background: 'linear-gradient(135deg, #00d9ff, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '0 0 40px rgba(0, 217, 255, 0.5)',
                                }}
                            >
                                VA
                            </span>
                        </motion.div>
                    </div>

                    {/* Loading text */}
                    <motion.p
                        className="absolute bottom-20 text-white/50 text-sm font-mono tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        INITIALIZING...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Generate points that form "VA" letters
function getLetterPaths(): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];
    const centerX = 150;
    const centerY = 100;

    // V shape
    for (let i = 0; i < 15; i++) {
        const t = i / 14;
        // Left line of V
        points.push({ x: 20 + t * 40, y: 20 + t * 140 });
        // Right line of V
        points.push({ x: 100 - t * 40, y: 20 + t * 140 });
    }

    // A shape
    for (let i = 0; i < 15; i++) {
        const t = i / 14;
        // Left line of A
        points.push({ x: 140 + t * 40, y: 160 - t * 140 });
        // Right line of A
        points.push({ x: 220 - t * 40, y: 160 - t * 140 });
    }
    // Crossbar of A
    for (let i = 0; i < 8; i++) {
        const t = i / 7;
        points.push({ x: 155 + t * 50, y: 100 });
    }

    return points.map(p => ({ x: p.x - centerX + 150, y: p.y - centerY + 100 }));
}
