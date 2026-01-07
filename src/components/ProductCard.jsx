import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.id}`} className="block h-full">
            <motion.div
                whileHover={{ y: -8 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500"
            >
                <div className="flex flex-col flex-1">
                    {/* Imagem */}
                    <div className="relative flex h-64 items-center justify-center bg-gray-50/50 p-8 transition-colors group-hover:bg-orange-50/30 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <motion.img
                            src={`/img/${product.image}`}
                            alt={product.name}
                            className="relative z-10 max-h-full w-auto object-contain drop-shadow-md"
                            transition={{ duration: 0.4 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                        />

                        {/* Badge */}
                        {product.type && (
                            <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur-md">
                                {product.type}
                            </div>
                        )}
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col p-6">
                        <div className="mb-2">
                            <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-repsol-orange transition-colors">
                                {product.name}
                            </h3>
                            {product.description && (
                                <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                    {product.description}
                                </p>
                            )}
                        </div>

                        <div className="mt-auto pt-4 flex items-center text-repsol-orange font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                            Ver Detalhes
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
