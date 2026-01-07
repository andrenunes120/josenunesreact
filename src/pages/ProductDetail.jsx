import { useParams, Link } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import { products, getRelatedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <AppLayout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900">Produto não encontrado</h1>
                        <Link to="/products" className="mt-4 inline-block text-orange-500 hover:text-orange-600">
                            Voltar aos Produtos
                        </Link>
                    </div>
                </div>
            </AppLayout>
        );
    }

    const relatedProducts = getRelatedProducts(product, 4);

    return (
        <AppLayout>
            <SEO
                title={product.name}
                description={`${product.name} - ${product.description}. Disponível para entrega em Gondomar.`}
            />
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Breadcrumb */}
                    <nav className="flex mb-8 text-sm text-gray-500">
                        <Link to="/" className="hover:text-orange-600 transition">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/products" className="hover:text-orange-600 transition">Produtos</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </nav>

                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">

                            {/* Imagem */}
                            <div className="p-8 bg-gray-50 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
                                {product.image ? (
                                    <img
                                        src={`/img/${product.image}`}
                                        alt={product.name}
                                        className="max-h-[400px] w-auto object-contain drop-shadow-xl transition-transform hover:scale-105 duration-500"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-gray-400">
                                        <svg className="h-24 w-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-lg">Sem imagem disponível</span>
                                    </div>
                                )}
                            </div>

                            {/* Detalhes */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                {product.type && (
                                    <div className="mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                                            {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                                        </span>
                                    </div>
                                )}

                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                    {product.name}
                                </h1>

                                {/* Price block removed */}

                                <div className="prose prose-lg text-gray-600 mb-8">
                                    <p>{product.description}</p>
                                </div>

                                {product.features && product.features.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-repsol-darkBlue mb-4">Tipos de utilização</h3>
                                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                                            {product.features.map((feature, index) => (
                                                <div key={index} className="flex items-center text-gray-700">
                                                    <svg className="w-5 h-5 mr-2 text-repsol-darkBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span className="text-base font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {product.capacity > 0 && (
                                    <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="p-2 bg-white rounded-full shadow-sm text-gray-400">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Capacidade</p>
                                            <p className="text-lg font-bold text-gray-900">{product.capacity} kg</p>
                                        </div>
                                    </div>
                                )}

                                {/* Stock info removed */}

                                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                    <a
                                        href="#contact-section"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="flex-1 inline-flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gray-800 hover:bg-gray-900 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Contactar
                                    </a>

                                    <Link to="/products" className="inline-flex justify-center items-center px-6 py-4 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                                        Voltar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Produtos Relacionados */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Produtos Relacionados</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {relatedProducts.map((related) => (
                                    <ProductCard key={related.id} product={related} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Secção de Contacto (inclui ID interno para scroll) */}
                    <div className="mt-16 border-t border-gray-200">
                        <ContactSection />
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}
