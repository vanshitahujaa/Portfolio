import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Shape3DProps {
    shape: 'icosahedron' | 'torus' | 'octahedron' | 'sphere' | 'torusKnot';
    color1?: string;
    color2?: string;
    size?: number;
    speed?: number;
    distort?: number;
}

function Shape3D({
    shape,
    color1 = '#00d9ff',
    color2 = '#8b5cf6',
    size = 1,
    speed = 1,
    distort = 0.3
}: Shape3DProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
        }
    });

    const getGeometry = () => {
        switch (shape) {
            case 'icosahedron':
                return <icosahedronGeometry args={[size, 1]} />;
            case 'torus':
                return <torusGeometry args={[size, size * 0.4, 16, 32]} />;
            case 'octahedron':
                return <octahedronGeometry args={[size, 0]} />;
            case 'sphere':
                return <sphereGeometry args={[size, 32, 32]} />;
            case 'torusKnot':
                return <torusKnotGeometry args={[size * 0.7, size * 0.2, 100, 16]} />;
            default:
                return <icosahedronGeometry args={[size, 1]} />;
        }
    };

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                {getGeometry()}
                <MeshDistortMaterial
                    color={color1}
                    emissive={color2}
                    emissiveIntensity={0.1}
                    roughness={0.2}
                    metalness={0.8}
                    distort={distort}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

interface Floating3DProps {
    shape?: 'icosahedron' | 'torus' | 'octahedron' | 'sphere' | 'torusKnot';
    color1?: string;
    color2?: string;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function Floating3D({
    shape = 'icosahedron',
    color1 = '#00d9ff',
    color2 = '#8b5cf6',
    size = 1,
    className = '',
    style = {}
}: Floating3DProps) {
    return (
        <div
            className={`pointer-events-none ${className}`}
            style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                ...style
            }}
        >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
                <Shape3D
                    shape={shape}
                    color1={color1}
                    color2={color2}
                    size={size}
                />
            </Canvas>
        </div>
    );
}

// Particle Background Component
export function ParticleField() {
    const points = useRef<THREE.Points>(null);

    const particlesCount = 200;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i += 3) {
            pos[i] = (Math.random() - 0.5) * 20;
            pos[i + 1] = (Math.random() - 0.5) * 20;
            pos[i + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.02;
            points.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });

    const bufferRef = useRef<THREE.BufferAttribute>(null);

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    ref={bufferRef}
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#00d9ff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export function ParticleBackground({ className = '' }: { className?: string }) {
    return (
        <div
            className={`fixed inset-0 pointer-events-none ${className}`}
            style={{ zIndex: 0 }}
        >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}
