import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    quote: string;
    avatar?: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Tech Lead',
        role: 'Engineering Manager',
        company: 'Signity Solutions',
        quote: 'Vanshit\'s ability to take ownership and deliver production-ready code is exceptional. He quickly grew into a team lead role and consistently shipped high-quality work.',
    },
    {
        name: 'Client',
        role: 'Startup Founder',
        company: 'Freelance Project',
        quote: 'Delivered our MVP in record time. The code was clean, well-documented, and the system has been running smoothly for months. Highly recommend for any full-stack work.',
    },
    {
        name: 'Professor',
        role: 'Faculty Advisor',
        company: 'BML Munjal University',
        quote: 'One of the most driven students I\'ve mentored. His research on urban development showed remarkable depth, and his technical projects consistently exceed expectations.',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const next = () => {
        setIsAutoPlaying(false);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setIsAutoPlaying(false);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="glass-card p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 right-4 text-white/5">
                <Quote className="w-24 h-24" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">What People Say</h3>

            <div className="relative min-h-[200px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Quote */}
                        <p className="text-lg text-white/80 leading-relaxed italic">
                            "{testimonials[current].quote}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#8b5cf6] flex items-center justify-center text-white font-bold">
                                {testimonials[current].name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-white font-semibold">{testimonials[current].name}</p>
                                <p className="text-white/50 text-sm">
                                    {testimonials[current].role} • {testimonials[current].company}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
                {/* Dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrent(i);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${i === current
                                    ? 'w-6 bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6]'
                                    : 'bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                    <motion.button
                        onClick={prev}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all magnetic"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                        onClick={next}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all magnetic"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
