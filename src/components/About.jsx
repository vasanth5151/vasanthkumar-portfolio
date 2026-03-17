import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = [
    "Frontend Development", "Backend Systems", "API Design", "DevOps & Cloud"
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#080808] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">About Me</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Software Developer with 1.3 year of professional full-stack experience building scalable SaaS applications.
                            Proficient in React.js, Next.js, and Node.js , with a strong track record of optimizing frontend Core Web Vitals
                            and designing efficient RESTful APIs. Experienced in database modeling with MongoDB and PostgreSQL ,
                            delivering performant, production-ready solutions in fast-paced environments.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-white">Core Skills & Tools</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle2 size={18} className="text-indigo-500" />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                            <div>
                                <span className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-1">1+</span>
                                <span className="text-sm text-gray-400 font-medium">Years Exp.</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-1">20+</span>
                                <span className="text-sm text-gray-400 font-medium">Freelance Projects Done</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 group">
                            {/* Replace with actual image, or generate one */}
                            <img
                                src="/vasanth-about.jpg"
                                alt="Fullstack Developer working on code"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
                                    <p className="text-sm italic text-gray-200">
                                        "Good code is like a well-written joke: it needs no explanation. I strive for clean, maintainable, and efficient solutions."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background blur */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
