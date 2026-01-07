import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="relative bg-repsol-darkBlue overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full"
                >
                    <img src="/img/background1.jpg" alt="Repsol Background"
                        className="w-full h-full object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-repsol-darkBlue via-repsol-darkBlue/90 to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto pt-20 pb-32 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[600px]">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span
                            className="inline-block py-1.5 px-4 rounded-full bg-repsol-orange/20 text-repsol-orange font-bold text-sm mb-8 border border-repsol-orange/30 backdrop-blur-sm shadow-[0_0_15px_rgba(255,130,0,0.3)]">
                            Concessionário Oficial José Nunes
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[1.1] mb-8 drop-shadow-xl"
                    >
                        Energia que <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-repsol-orange via-yellow-400 to-repsol-orange bg-[200%_auto] animate-gradient">
                            Move o Seu Mundo
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light"
                    >
                        Garrafas de gás Repsol com entrega <strong className="text-white font-semibold">rápida</strong>, <strong className="text-white font-semibold">segura</strong> e ao <strong className="text-white font-semibold">melhor preço</strong>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-12 flex flex-wrap gap-5"
                    >
                        <Link to="/products"
                            className="group relative px-8 py-4 bg-repsol-orange text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(255,130,0,0.4)] hover:shadow-[0_20px_40px_rgba(255,130,0,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden">
                            <span className="relative z-10">Ver Produtos</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                                stroke="currentColor" className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-repsol-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <a href="#contact-section"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Saiba Mais
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Add this to tailwind.config.js later if needed, or use inline styles for complex animations. 
// For now relying on framer-motion for entry. 
// Background gradient animation on text is done via standard tailwind classes if extended, 
// strictly standard classes used here: `bg-[200%_auto]` might need JIT but we are on v3.
