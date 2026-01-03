import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    "Aryavarta", "ChupKarYash", "FruitsFitz", "MagicTouchUnisexSalon", "ArtistOfUdaipur"];

const Clients = () => {
    return (
        <section className="py-16 bg-black border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-gray-500 uppercase tracking-widest text-xs">Trusted by People and Brands</p>
            </div>

            <div className="relative flex overflow-hidden group">
                <motion.div
                    className="flex whitespace-nowrap gap-16"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={index} className="text-3xl md:text-5xl font-bold text-white/10 flex items-center justify-center uppercase select-none hover:text-white/30 transition-colors cursor-default">
                            {brand}
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    className="flex whitespace-nowrap gap-16 absolute top-0"
                    animate={{ x: ["100%", "50%"] }} // This doesn't quite work for seamless loop with just two divs unless they are identical. 
                    // Actually the first div handles the loop if it contains double content.
                    style={{ left: "100%" }} // Positioning it after
                >
                </motion.div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default Clients;
