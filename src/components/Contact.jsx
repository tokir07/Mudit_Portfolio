import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', project: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        // Format the message for WhatsApp
        // TODO: Replace with your actual WhatsApp number (include country code, no + sign)
        const phoneNumber = "7878845300";

        const messageBody = encodeURIComponent(
            `*New Project Inquiry*\n\n` +
            `*Name:* ${formState.name}\n` +
            `*Email:* ${formState.email}\n` +
            `*Project:* ${formState.project}\n` +
            `*Message:* ${formState.message}`
        );

        // Open WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${messageBody}`, '_blank');

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-black relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cinematic-900 to-black pointer-events-none"></div>

            <div className="container mx-auto container-padding relative z-10 max-w-4xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-brand-gold text-sm tracking-widest uppercase">Get in Touch</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">LET'S CREATE CINEMA</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Ready to elevate your visual storytelling? Tell me about your project and let's bring it to life.
                    </p>
                </motion.div>

                <div className="bg-cinematic-800 p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl">
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16"
                        >
                            <CheckCircle className="w-20 h-20 text-brand-gold mx-auto mb-6" />
                            <h3 className="text-3xl font-bold text-white mb-4">Message Sent</h3>
                            <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-8 text-brand-gold hover:text-white transition-colors underline underline-offset-4"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-cinematic-900 border-b border-gray-700 text-white p-4 focus:outline-none focus:border-brand-gold focus:bg-white/5 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-cinematic-900 border-b border-gray-700 text-white p-4 focus:outline-none focus:border-brand-gold focus:bg-white/5 transition-all"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Project Type</label>
                                <select
                                    name="project"
                                    value={formState.project}
                                    onChange={handleChange}
                                    className="w-full bg-cinematic-900 border-b border-gray-700 text-white p-4 focus:outline-none focus:border-brand-gold focus:bg-black transition-all appearance-none"
                                >
                                    <option value="" disabled>Select a project type</option>
                                    <option value="commercial">Commercial / Ad</option>
                                    <option value="music-video">Music Video</option>
                                    <option value="narrative">AI Films and Vlogs</option>
                                    <option value="documentary">Documentary</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-cinematic-900 border-b border-gray-700 text-white p-4 focus:outline-none focus:border-brand-gold focus:bg-white/5 transition-all"
                                    placeholder="Tell me about your vision..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
