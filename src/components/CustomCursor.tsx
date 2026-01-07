import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics for the trailing ring
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show custom cursor on fine pointer devices (mouse)
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
            // Check for interactive elements
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('magnetic') ||
                window.getComputedStyle(target).cursor === 'pointer';

            if (isInteractive) {
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
            {/* Main precise dot - no lag */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>

            {/* Trailing ring - with spring physics */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="rounded-full border border-white"
                    animate={{
                        width: isHovering ? 40 : 20,
                        height: isHovering ? 40 : 20,
                        opacity: isClicking ? 0.8 : isHovering ? 1 : 0.5,
                        scale: isClicking ? 0.75 : 1,
                        backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    }}
                    transition={{
                        type: 'spring',
                        damping: 25,
                        stiffness: 400,
                        mass: 0.5
                    }}
                />
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