import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-repsol-darkBlue text-white pt-16 pb-8 mt-auto border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/img/jn_logo.png" alt="Logo" className="h-10 w-auto brightness-0 invert opacity-90" />
                            <span className="font-bold text-2xl tracking-tight text-white opacity-90"></span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            Concessionário oficial Repsol.
                            Energia que move o mundo com soluções sustentáveis e inovadoras para o seu conforto e mobilidade.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white/90">Redes Sociais</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>
                                <a href="https://www.instagram.com/josenuneslda/" target="_blank" rel="noopener noreferrer" className="hover:text-repsol-orange transition-colors duration-300 flex items-center gap-3 group">
                                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-repsol-orange/20 transition-colors">
                                        <svg className="w-5 h-5 text-white group-hover:text-repsol-orange transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </div>
                                    <span className="font-medium">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/people/Jos%C3%A9-Nunes/61566573945012/" target="_blank" rel="noopener noreferrer" className="hover:text-repsol-orange transition-colors duration-300 flex items-center gap-3 group">
                                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-repsol-orange/20 transition-colors">
                                        <svg className="w-5 h-5 text-white group-hover:text-repsol-orange transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </div>
                                    <span className="font-medium">Facebook</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white/90">Contactos</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-repsol-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>(+351) 224 830 326</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-repsol-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span>(+351) 933 368 655</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-repsol-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span>(+351) 913 703 072</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-repsol-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>josenuneslda@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} José Nunes Lda. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
