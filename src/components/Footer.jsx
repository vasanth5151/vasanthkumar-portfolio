import React from 'react';
import { Link } from 'react-scroll';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-3xl font-bold tracking-tighter cursor-pointer text-white"
                    >
                        Vasanth<span className="text-indigo-500">.</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <a href="https://www.instagram.com/vasanthdev_62" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="https://x.com/vasanthdev_62" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Twitter size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/vasanth-kumar-r-314411249/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://github.com/vasanth5151" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Github size={18} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500 gap-4">
                    <p>© {new Date().getFullYear()} Vasanth Portfolio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
