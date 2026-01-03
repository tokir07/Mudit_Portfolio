import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Yash Raj",
        role: "StandUp Comedian",
        text: "The most talented cinematographer I've worked with. He understands story better than most directors.",
        rating: 5
    },
    {
        id: 2,
        name: "Rajveer",
        role: "Founder of Aryavarta",
        text: "Turned our corporate footage into a cinematic masterpiece. Our engagement skyrocketed.",
        rating: 5
    },
    {
        id: 3,
        name: "Luv Purohit ",
        role: "Music Composer and Director",
        text: "The music video exceeds all expectations. The lighting and mood are just perfect.",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-cinematic-800">
            <div className="container mx-auto container-padding">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-gold text-sm tracking-widest uppercase">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">WHAT CLIENTS SAY</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-cinematic-900 border border-white/5 p-10 md:p-14 rounded-sm text-center relative"
                        >
                            <Quote className="absolute top-8 left-8 text-brand-gold/20 w-16 h-16 transform -scale-x-100" />

                            <div className="flex justify-center mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed mb-8 relative z-10">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div>
                                <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                <p className="text-brand-gold/80 text-sm">{testimonials[currentIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
                        <button onClick={prev} className="p-3 rounded-full bg-cinematic-700 text-white hover:bg-brand-gold hover:text-black transition-all">
                            <ChevronLeft size={20} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
                        <button onClick={next} className="p-3 rounded-full bg-cinematic-700 text-white hover:bg-brand-gold hover:text-black transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
