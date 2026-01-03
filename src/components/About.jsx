import React from 'react';
import { motion } from 'framer-motion';
import { Film, Award, Camera, Video } from 'lucide-react';

import aboutImage from '../assets/p3.JPG';

const About = () => {
    return (
        <section id="about" className="py-24 bg-cinematic-900 overflow-hidden">
            <div className="container mx-auto container-padding">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-[3/4] rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                            <img
                                src={aboutImage}
                                alt="Cinematographer Portrait"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-cinematic-900 to-transparent opacity-50"></div>
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/30 -z-10"></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-gold text-sm tracking-widest uppercase block mb-2">The Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CAPTURING EMOTION IN EVERY FRAME</h2>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a visual storyteller obsessed with light, composition, and movement. For over a decade, I've helped brands, directors, and artists turn abstract concepts into cinematic realities.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-10">
                            My approach works backwards from the feeling. Whether it's a high-energy commercial or a somber documentary, the camera movement and color palette are chosen to evoke a specific emotional response. I don't just shoot video; I engineer atmosphere.
                        </p>

                        {/* Stats / Timeline */}
                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <h4 className="text-3xl font-bold text-white">2+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">50+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">10+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Achievements and Milestones</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">20+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</p>
                            </div>
                        </div>

                        <div className="p-6 bg-cinematic-800 border-l-4 border-brand-red italic text-gray-300">
                            "Cinema is a matter of what's in the frame and what's out."
                            <footer className="mt-2 text-brand-red text-sm not-italic font-bold uppercase">– Martin Scorsese</footer>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
