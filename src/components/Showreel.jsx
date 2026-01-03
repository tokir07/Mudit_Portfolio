import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import showreelVideo from '../assets/IMG_0329.MP4';
import bg from '../assets/p1.JPG';

const Showreel = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        if (isPlaying && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video play failed:", error);
            });
        }
    }, [isPlaying]);

    return (
        <section id="showreel" className="py-24 bg-black relative overflow-hidden">
            {/* Dynamic color glow behind video */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-teal/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="container mx-auto container-padding relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">LATEST SHOWREEL</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                </motion.div>
                <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-brand-teal/10 group">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        src={showreelVideo}
                        controls
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                    >
                        Your browser does not support the video tag.
                    </video>

                    {!isPlaying && (
                        <div className="absolute inset-0 z-20 bg-black">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                style={{ backgroundImage: `url(${bg})` }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => {
                                        if (videoRef.current) {
                                            videoRef.current.play()
                                                .then(() => setIsPlaying(true))
                                                .catch(e => console.error("Play failed", e));
                                        }
                                    }}
                                    className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300 cursor-pointer relative z-30"
                                >
                                    <Play className="w-10 h-10 fill-white text-white group-hover:fill-black group-hover:text-black transition-colors" />
                                </motion.button>
                                {/* Ripple Effect */}
                                <div className="absolute w-24 h-24 border border-white/30 rounded-full animate-ping opacity-75"></div>
                            </div>
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-left pointer-events-none">
                                <p className="text-brand-gold text-sm tracking-widest uppercase mb-1">Featured Work</p>
                                <h3 className="text-2xl md:text-4xl font-bold text-white">Cinematography 2026</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Showreel;
