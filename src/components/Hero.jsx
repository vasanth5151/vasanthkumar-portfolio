import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Code } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-medium text-gray-300">Available for freelance projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight">
                        Building Digital <br className="hidden md:block" />
                        Experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Code.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">I'm Vasanth kumar, </span>a professional Fullstack Developer crafting scalable web applications,
                        redundant architectures, and seamless user experiences that drive growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer"
                        >
                            View Projects
                            <Code size={18} />
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors cursor-pointer text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
