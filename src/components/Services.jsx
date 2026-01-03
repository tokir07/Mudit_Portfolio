import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, MonitorPlay, Palette, Clapperboard, Share2, Music } from 'lucide-react';

const services = [
    { icon: Camera, title: "Cinematography", desc: "Crafting visual languages for narrative and commercial projects." },
    { icon: MonitorPlay, title: "Video Editing", desc: "Pacing and storytelling through precise post-production." },
    { icon: Music, title: "Music Videos", desc: "Enhancing mood and tone with professional color workflows & Visuals." },
    { icon: Clapperboard, title: "Short Films", desc: "Complete production services for independent cinema." },
    { icon: Film, title: "Commercial Shoots", desc: "High-end promotional content for brands and agencies." },
    { icon: Share2, title: "Social Content", desc: "Engaging short-form content for Instagram and Youtube." },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-cinematic-900 border-t border-white/5">
            <div className="container mx-auto container-padding">
                <motion.div
                    className="mb-16 md:flex md:justify-between md:items-end"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-xl">
                        <span className="text-brand-gold text-sm tracking-widest uppercase block mb-2">My Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">SERVICES</h2>
                    </div>
                    <p className="text-gray-400 mt-4 md:mt-0 max-w-md text-sm md:text-base">
                        Comprehensive video production services tailored to bring your vision to screen with cinematic quality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-cinematic-800 border border-white/5 hover:border-brand-gold/50 transition-colors group rounded-sm"
                        >
                            <div className="w-12 h-12 bg-cinematic-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                                <service.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-transparent group-hover:border-brand-gold pl-0 group-hover:pl-4 transition-all duration-300">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
