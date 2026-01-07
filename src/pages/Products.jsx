import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

export default function Products() {
    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(4);

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.type === filter);

    // Reset visible count when filter changes
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setVisibleCount(4);
    };

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    const categories = [
        { id: 'all', label: 'Todos' },
        { id: 'butano', label: 'Butano' },
        { id: 'propano', label: 'Propano' },
        { id: 'acessorio', label: 'Acessórios' },
    ];

    return (
        <AppLayout>
            <SEO
                title="Produtos Repsol"
                description="Consulte o nosso catálogo de garrafas de gás butano e propano Repsol. Entregas em Gondomar, Rio Tinto, Valbom e Fânzeres."
                keywords="gás repsol, produtos, butano, propano, k11, k6, gondomar"
            />
            <div className="bg-white py-16 min-h-screen relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 rounded-full bg-orange-50 blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 tracking-tight">Nossos Produtos</h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                            Descubra a gama completa de garrafas de gás <span className="text-repsol-orange font-semibold">Repsol</span>, desenhadas para o seu conforto.
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleFilterChange(cat.id)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === cat.id
                                    ? 'bg-repsol-orange text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:border-repsol-orange/50'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 min-h-[400px]">
                        <AnimatePresence mode='wait'>
                            {visibleProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Load More Button */}
                    {visibleCount < filteredProducts.length && (
                        <div className="mt-16 text-center">
                            <button
                                onClick={handleLoadMore}
                                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-repsol-orange hover:bg-repsol-darkOrange transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-repsol-orange"
                            >
                                Ver Mais Produtos
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Heating Oil Promo Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-24 relative rounded-3xl overflow-hidden bg-repsol-darkBlue text-white shadow-2xl"
                    >
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1510511233900-1982d92bd425?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-repsol-darkBlue via-repsol-darkBlue/90 to-transparent"></div>

                        <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                    Gasóleo de Aquecimento
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    Garanta o máximo conforto para o seu lar com o nosso gasóleo de aquecimento de alta performance.
                                    Eficiência energética superior e entregas rápidas ao domicílio.
                                </p>
                                <ul className="space-y-2 mb-8 text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-repsol-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Maior poder calorífico
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-repsol-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Proteção anticorrosão para a sua caldeira
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <Link
                                    to="/gasoleo-aquecimento"
                                    className="inline-block px-8 py-4 bg-repsol-orange hover:bg-repsol-darkOrange text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform"
                                >
                                    Saber Mais
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AppLayout>
    );
}
