import { motion } from 'framer-motion';
import AppLayout from '../layouts/AppLayout';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';

export default function HeatingOil() {
    const benefits = [
        {
            title: "Elevado Poder Calorífico",
            description: "O nosso Gasóleo de Aquecimento oferece um rendimento superior, aquecendo a sua casa de forma mais rápida e eficiente.",
            icon: (
                <svg className="w-8 h-8 text-repsol-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
            )
        },
        {
            title: "Proteção da Caldeira",
            description: "A sua fórmula exclusiva protege a instalação contra a corrosão e mantém a caldeira como nova por mais tempo.",
            icon: (
                <svg className="w-8 h-8 text-repsol-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Respeito pelo Ambiente",
            description: "Com um teor de enxofre reduzido, este gasóleo é mais amigo do ambiente, reduzindo as emissões poluentes.",
            icon: (
                <svg className="w-8 h-8 text-repsol-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <AppLayout>
            <SEO
                title="Gasóleo de Aquecimento"
                description="Repsol Energy e+ - Gasóleo de aquecimento de alta performance em Gondomar. Conforto, economia e proteção para a sua caldeira."
                keywords="gasóleo aquecimento, repsol energy e+, gondomar, aquecimento central, caldeira"
            />

            {/* Hero Section */}
            <div className="relative bg-repsol-darkBlue overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full"
                    >
                        <img
                            src="/img/banner2.jpeg"
                            alt="Gasóleo de Aquecimento Banner"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-repsol-darkBlue via-repsol-darkBlue/90 to-transparent"></div>
                </div>

                <div className="relative max-w-7xl mx-auto pt-32 pb-40 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[500px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-repsol-orange/20 text-repsol-orange font-bold text-sm mb-6 border border-repsol-orange/30 backdrop-blur-sm">
                            Gasóleo de Aquecimento
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
                            O Melhor Calor <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-repsol-orange to-yellow-400">
                                Para o Seu Lar
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            Descubra o gasóleo de aquecimento exclusivo da Repsol. Mais eficiência, maior poupança e melhor proteção para a sua instalação.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-repsol-darkBlue mb-4">Porquê escolher o nosso Gasóleo?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Uma fórmula exclusiva patenteada que garante o máximo rendimento e durabilidade da sua caldeira.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-repsol-orange/20 group"
                            >
                                <div className="bg-white rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Maintenance Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dicas de Manutenção</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Para garantir o melhor rendimento da sua caldeira e prolongar a sua vida útil, recomendamos alguns cuidados essenciais:
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Analise anualmente o estado da câmara de combustão e do filtro de gasóleo.",
                                    "Verifique tanto o medidor como os queimadores regularmente para evitar má combustão.",
                                    "Limpe anualmente a chaminé para evitar acumulação de resíduos.",
                                    "Controle as perdas de calor medindo as emissões de gases."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-repsol-orange/10 flex items-center justify-center mt-1">
                                            <span className="text-repsol-orange font-bold text-sm">{i + 1}</span>
                                        </div>
                                        <p className="text-gray-700">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/img/caldeira.jpg"
                                    alt="Manutenção de Caldeira"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-repsol-darkBlue mb-3">Que caldeiras podem utilizar o nosso gasóleo?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Todas as caldeiras de gasóleo podem utilizar o nosso gasóleo de aquecimento. Sejam antigas ou modernas, domésticas ou industriais.
                                O produto é compatível com equipamentos de última geração, incluindo caldeiras de condensação.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-repsol-darkBlue mb-3">É compatível com outros gasóleos?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Sim, o nosso gasóleo de aquecimento é perfeitamente miscível com outros gasóleos de aquecimento.
                                Pode ser adicionado ao tanque mesmo que este ainda contenha outro tipo de gasóleo, sem qualquer risco para a sua instalação.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-repsol-darkBlue/5 border border-repsol-darkBlue/10 rounded-2xl p-8"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-repsol-darkBlue mb-2">Pronto para encomendar?</h3>
                                    <p className="text-gray-600">Entregamos em Gondomar, Rio Tinto, Valbom e arredores.</p>
                                </div>
                                <a
                                    href="tel:+351224830326"
                                    className="px-8 py-3 bg-repsol-orange text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                                >
                                    Ligar Agora
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </AppLayout>
    );
}
