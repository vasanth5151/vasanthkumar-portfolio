import React from 'react';
import { motion } from 'framer-motion';
import { 
    Code2, 
    Database, 
    Layout, 
    Server, 
    Terminal, 
    Cpu, 
    Zap,
    ShieldCheck,
    Globe,
    ExternalLink
} from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="text-cyan-400" />,
        skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "HTML", "CSS", "Tailwind CSS", "Shadcn UI", "WordPress"]
    },
    {
        title: "Backend Development",
        icon: <Server className="text-green-400" />,
        skills: ["Node.js", "Express.js", "RESTful APIs", "API Design", "Authentication & Authorization", "Rate Limiting"]
    },
    {
        title: "Databases & ORM",
        icon: <Database className="text-indigo-400" />,
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Prisma ORM"]
    },
    {
        title: "Programming Languages",
        icon: <Code2 className="text-yellow-400" />,
        skills: ["JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
        title: "Tools & DevOps",
        icon: <Terminal className="text-gray-400" />,
        skills: ["Git", "GitHub", "Docker", "Postman", "GSAP"]
    },
    {
        title: "Backend Architecture",
        icon: <Cpu className="text-red-400" />,
        skills: ["CRUD Operations", "MVC Architecture", "Performance Optimization"]
    },
    {
        title: "Specialized Excellence",
        icon: <Zap className="text-pink-400" />,
        skills: ["SaaS Development", "SEO Optimization", "AI Integration"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4"
                    >
                        <ShieldCheck size={14} className="text-indigo-400" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Technical Expertise</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white"
                    >
                        Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Tech Stack</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        A comprehensive overview of my technical capabilities and the technologies I use to build world-class digital solutions.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Backdrop Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-400/50 group-hover:bg-indigo-400/5 transition-all duration-500">
                                        {React.cloneElement(category.icon, { 
                                            size: 28,
                                            className: `${category.icon.props.className} group-hover:scale-110 transition-transform duration-500`
                                        })}
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-500 tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, sIdx) => (
                                        <motion.span 
                                            key={sIdx}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05] text-gray-400 text-xs font-semibold hover:border-indigo-500/30 hover:text-white transition-all duration-300 cursor-default shadow-sm shadow-black/20"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                {React.cloneElement(category.icon, { size: 100 })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
