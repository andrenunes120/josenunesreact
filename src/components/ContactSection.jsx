import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <div id="contact-section" className="bg-gray-50 py-24 relative">
            {/* Background decoration */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Visite-nos Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-repsol-orange hover:shadow-2xl transition-shadow duration-500"
                    >
                        <div className="p-10">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-orange-50 p-4 rounded-full shadow-inner">
                                    <svg className="w-10 h-10 text-repsol-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Visite-nos</h3>

                            <div className="text-center space-y-6 mb-10">
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">José Nunes - Sociedade Distribuidora de Gás, Lda</p>
                                    <p className="text-gray-600 mt-1">Travessa da Fontela, 370</p>
                                    <p className="text-gray-600">4420-150 Gondomar</p>
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <p className="font-semibold text-gray-900 mb-3 uppercase tracking-wide text-xs">Horário de Funcionamento</p>
                                    <p className="text-gray-700 font-medium">Segunda a Sexta: <span className="text-repsol-orange">9h - 19h</span></p>
                                    <p className="text-gray-700 font-medium">Sábado: <span className="text-repsol-orange">9h - 14h</span></p>
                                    <p className="text-gray-400 italic mt-2">Domingo: Fechado</p>
                                </div>
                            </div>

                            {/* Mapa Embed */}
                            <div className="w-full h-72 bg-gray-200 rounded-2xl overflow-hidden shadow-inner ring-1 ring-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.8567663947897!2d-8.52778433746847!3d41.1354854947783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2463063d70db29%3A0xae526d43ee4d00bb!2zSm9zw6kgTnVuZXMgLSBTb2MuIERpc3RyaWJ1acOnw6NvIGRlIEGDoXM!5e0!3m2!1spt-PT!2spt!4v1738769483104!5m2!1spt-PT!2spt"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Fale Connosco Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-repsol-darkBlue hover:shadow-2xl transition-shadow duration-500"
                    >
                        <div className="p-10 h-full flex flex-col">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-blue-50 p-4 rounded-full shadow-inner">
                                    <svg className="w-10 h-10 text-repsol-darkBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">Fale Connosco</h3>

                            <div className="flex-1 space-y-10 text-center flex flex-col justify-center">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Telemóveis</h4>
                                    <div className="space-y-3">
                                        <a href="tel:+351933368655"
                                            className="block text-2xl font-black text-repsol-orange hover:text-repsol-darkOrange transition hover:scale-105 transform duration-200">
                                            933 368 655
                                        </a>
                                        <a href="tel:+351913703072"
                                            className="block text-2xl font-black text-repsol-orange hover:text-repsol-darkOrange transition hover:scale-105 transform duration-200">
                                            913 703 072
                                        </a>
                                        <p className="text-xs text-gray-400 mt-2 font-medium">(Chamada para rede móvel nacional)</p>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-100">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Telefone</h4>
                                    <a href="tel:+351224830326"
                                        className="block text-2xl font-black text-gray-800 hover:text-gray-600 transition hover:scale-105 transform duration-200">
                                        224 830 326
                                    </a>
                                    <p className="text-xs text-gray-400 mt-2 font-medium">(Chamada para rede fixa nacional)</p>
                                </div>

                                <div className="pt-8 border-t border-gray-100 pb-4">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Email</h4>
                                    <a href="mailto:josenuneslda@gmail.com"
                                        className="inline-flex items-center text-xl text-repsol-blue hover:text-repsol-darkBlue transition font-semibold group">
                                        <svg className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        josenuneslda@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
