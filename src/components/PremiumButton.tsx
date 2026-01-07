import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Sparkles } from 'lucide-react';

interface PremiumButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
    size?: 'sm' | 'md' | 'lg';
    icon?: 'download' | 'mail' | 'arrow' | 'sparkles' | null;
    iconPosition?: 'left' | 'right';
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    disabled?: boolean;
}

export default function PremiumButton({
    variant = 'primary',
    size = 'md',
    icon = null,
    iconPosition = 'right',
    children,
    onClick,
    href,
    className = '',
    disabled = false,
}: PremiumButtonProps) {
    const icons = {
        download: Download,
        mail: Mail,
        arrow: ArrowRight,
        sparkles: Sparkles,
    };

    const IconComponent = icon ? icons[icon] : null;

    const sizes = {
        sm: 'px-4 py-2 text-sm gap-1.5',
        md: 'px-6 py-3 text-base gap-2',
        lg: 'px-8 py-4 text-lg gap-2.5',
    };

    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };

    const variants = {
        primary: `
      bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] 
      text-[#0a0a0f] font-semibold
      hover:shadow-[0_0_40px_rgba(0,217,255,0.4)]
      hover:scale-[1.02]
      active:scale-[0.98]
    `,
        secondary: `
      bg-transparent border-2 border-white/20
      text-white font-medium
      hover:border-[#00d9ff]/50 hover:bg-[#00d9ff]/10
      hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]
      active:scale-[0.98]
    `,
        ghost: `
      bg-white/[0.03] border border-white/[0.08]
      text-white/70 font-medium
      hover:bg-white/[0.08] hover:text-white hover:border-white/20
      active:scale-[0.98]
    `,
        glow: `
      bg-gradient-to-r from-[#8b5cf6] to-[#f59e9b]
      text-white font-semibold
      shadow-[0_0_30px_rgba(139,92,246,0.3)]
      hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]
      hover:scale-[1.02]
      active:scale-[0.98]
    `,
    };

    const baseStyles = `
    relative inline-flex items-center justify-center
    rounded-full overflow-hidden
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `;

    const content = (
        <>
            {/* Shimmer effect for primary */}
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                />
            )}

            {/* Icon left */}
            {IconComponent && iconPosition === 'left' && (
                <IconComponent className={iconSizes[size]} />
            )}

            {/* Text */}
            <span className="relative z-10">{children}</span>

            {/* Icon right */}
            {IconComponent && iconPosition === 'right' && (
                <motion.span
                    className="relative z-10"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                >
                    <IconComponent className={iconSizes[size]} />
                </motion.span>
            )}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={baseStyles}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={baseStyles}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    );
}

// Specialized button exports for common use cases
export function ResumeButton({ className = '' }: { className?: string }) {
    return (
        <PremiumButton
            variant="primary"
            icon="download"
            href="/data/Vanshit_SDE_Resume.pdf"
            className={className}
        >
            Download Resume
        </PremiumButton>
    );
}

export function ContactButton({ className = '' }: { className?: string }) {
    return (
        <PremiumButton
            variant="secondary"
            icon="mail"
            href="mailto:vanshitahuja@gmail.com"
            className={className}
        >
            Contact Me
        </PremiumButton>
    );
}
