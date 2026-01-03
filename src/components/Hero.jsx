import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import v5 from '../assets/j4.jpg';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cinematic-900">
            {/* Background with Grain */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for Cinematic Video Loop */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cinematic-900 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${v5})` }}
                ></div>
                {/* Grain Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <filter id="noiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs tracking-[0.2em] font-light text-gray-300 mb-6 uppercase backdrop-blur-sm">
                        Cinematographer • Editor • Colorist
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white mb-6 text-glow">
                        STORIES<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 italic font-serif">SHOT CINEMATICALLY</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                        Bringing visuals to life with cinematic precision and creative storytelling.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="#showreel"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-8 py-4 bg-brand-gold text-black font-semibold rounded-sm hover:bg-white transition-colors group"
                        >
                            <Play className="fill-current w-4 h-4 group-hover:scale-110 transition-transform" />
                            View Showreel
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-white/20 text-white rounded-sm hover:bg-white/10 backdrop-blur-sm transition-colors"
                        >
                            Hire Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
