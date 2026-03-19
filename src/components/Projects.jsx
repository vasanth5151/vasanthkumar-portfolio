import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';


const categories = ["All", "frontend", "SaaS (vibecoding)"];

const projectsData = [
    {
        id: 1,
        title: "Project Management Tool (WORKING)",
        category: "frontend",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
        description: "A large-scale e-commerce platform with real-time inventory management and secure payment integration.",
        link: ""
    },
    {
        id: 2,
        title: "FreeInvoiceGen",
        category: "SaaS (vibecoding)",
        image: "/projects/invoice-gen.png",
        description: "A fast, no-signup invoice generator that allows freelancers to create, download, and email professional PDF invoices instantly.",
        link: "https://freeinvoicegen.site/"
    },
    {
        id: 3,
        title: "AI Resume Editor",
        category: "SaaS (vibecoding)",
        image: "/projects/resume-editor.jpeg",
        description: "An interactive, AI-powered resume editor that optimizes content for ATS systems and helps users craft professional profiles.",
        link: "https://resume-editor.online/"
    },
    {
        id: 4,
        title: "react js portfolio",
        category: "frontend",
        image: "/projects/sathish.png",
        description: "Scalable editor portfolio website design using react js",
        link: "https://sathish1.netlify.app/"
    }
];

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Works</h2>
                        <p className="text-gray-400 max-w-xl">A collection of my recent fullstack development and architectural projects.</p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-white text-black'
                                    : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <div className="aspect-[16/9] w-full bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-indigo-400 text-sm font-bold mb-2 tracking-wider uppercase">{project.category}</p>
                                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                                            <button className="flex items-center gap-2 text-white font-medium hover:text-indigo-300 transition-colors">
                                                <a href={project.link} target="_blank" className="flex items-center gap-2">View Project <ArrowUpRight size={16} /></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                        <a href="https://github.com/vasanth5151" target="_blank">View All Projects</a>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Projects;
