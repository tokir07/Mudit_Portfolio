import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink } from 'lucide-react';

import v1 from '../assets/v1.MP4';
import v2 from '../assets/v2.MP4';
import v3 from '../assets/v3.MP4';
import v4 from '../assets/v4.MP4';
import v5 from '../assets/v5.MP4';
import v6 from '../assets/V6.MP4'; // Note the capital V based on list_dir output

import p5 from '../assets/P5.PNG';
import p6 from '../assets/P6.PNG';
import p7 from '../assets/P7.PNG';
import p8 from '../assets/j1.jpeg';
import p9 from '../assets/j2.jpeg';
import p10 from '../assets/j3.jpeg';

const categories = ["All", "Films", "Commercials", "Product ADs", "Reels", "Music Videos"];

const projects = [
    { id: 1, title: "Murder Mystery", category: "Films", img: p8, video: v1 },
    { id: 2, title: "Summer Vibe", category: "Reels", img: p9, video: v5 },
    { id: 3, title: "Festive Edits", category: "Reels", img: p5, video: v3 },
    { id: 4, title: "Promotional Reels", category: "Commercials", img: p6, video: v4 },
    { id: 5, title: "Product Advertisement", category: "Product ADs", img: p7, video: v2 },
    { id: 6, title: "Horror", category: "Films", img: p10, video: v6 },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 bg-black">
            <div className="container mx-auto container-padding">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">SELECTED WORKS</h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-white text-black border-white font-bold'
                                    : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-500 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative h-72 overflow-hidden rounded-sm cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <Play className="fill-white text-white ml-1" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">{project.category}</p>
                                    <h3 className="text-2xl font-bold text-white leading-none">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-cinematic-800 w-full max-w-4xl rounded-lg overflow-hidden border border-white/10 shadow-2xl relative"
                        >
                            <button
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X size={24} />
                            </button>

                            <div className="aspect-video bg-black">
                                <video
                                    className="w-full h-full object-contain"
                                    src={selectedProject.video}
                                    controls
                                    autoPlay
                                    playsInline
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                        <p className="text-brand-gold text-sm uppercase tracking-widest">{selectedProject.category}</p>
                                    </div>
                                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <span className="text-sm">View Project</span>
                                        <ExternalLink size={16} />
                                    </button>
                                </div>
                                <p className="text-gray-300 leading-relaxed max-w-2xl">
                                    Cinematic execution with a focus on color grading and dynamic motion. Shot on Red Komodo with Atlas Orion Anamorphic lenses to achieve that signature flare and depth.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
