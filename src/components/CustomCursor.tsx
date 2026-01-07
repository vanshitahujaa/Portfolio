import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if device has fine pointer (mouse)
        const hasMouse = window.matchMedia('(pointer: fine)').matches;
        if (!hasMouse) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('magnetic')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                >
                    {/* Core */}
                    <div
                        className="w-4 h-4 rounded-full bg-white"
                        style={{
                            boxShadow: isHovering
                                ? '0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)'
                                : '0 0 10px rgba(255, 255, 255, 0.5)',
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Trailing ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: isHovering ? 2 : 1,
                        opacity: isHovering ? 0.5 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div
                        className="w-10 h-10 rounded-full border border-white/30"
                        style={{
                            boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)',
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Global style to hide default cursor */}
            <style>{`
        * {
          cursor: none !important;
        }
        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
        </>
    );
}
