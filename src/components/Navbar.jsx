import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* LOGO */}
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="transform hover:scale-105 transition-transform duration-300">
                                <img src="/img/jn_logo.png" className="block h-14 w-auto drop-shadow-sm" alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    {/* MENU DESKTOP */}
                    <div className="hidden sm:flex sm:items-center sm:ms-8 space-x-8">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="relative text-gray-700 hover:text-repsol-orange px-1 py-2 text-base font-semibold transition-colors duration-300 group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-repsol-orange transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/products" className="relative text-gray-700 hover:text-repsol-orange px-1 py-2 text-base font-semibold transition-colors duration-300 group">
                            Produtos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-repsol-orange transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* BOTÃO HAMBURGER (Mobile) */}
                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-repsol-orange hover:bg-orange-50 focus:outline-none transition duration-300 ease-in-out"
                        >
                            <svg className="h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={`${open ? 'hidden' : 'inline-flex'}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={`${!open ? 'hidden' : 'inline-flex'}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`${open ? 'block' : 'hidden'} sm:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full left-0 shadow-lg`}>
                <div className="pt-2 pb-4 space-y-1">
                    <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="block w-full ps-6 pe-4 py-3 border-l-4 border-transparent text-start text-base font-semibold text-gray-600 hover:text-repsol-orange hover:bg-orange-50 hover:border-repsol-orange transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        onClick={() => setOpen(false)}
                        className="block w-full ps-6 pe-4 py-3 border-l-4 border-transparent text-start text-base font-semibold text-gray-600 hover:text-repsol-orange hover:bg-orange-50 hover:border-repsol-orange transition duration-300"
                    >
                        Produtos
                    </Link>
                </div>
            </div>
        </nav>
    );
}
