import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ContactSection from '../components/ContactSection';
import AppLayout from '../layouts/AppLayout';
import { getFeaturedProducts } from '../data/products';
import SEO from '../components/SEO';

export default function Home() {
    const featured = getFeaturedProducts(4);

    return (
        <AppLayout>
            <SEO
                title="Home"
                description="José Nunes Lda - Distribuidor oficial de gás Repsol em Gondomar. Entregas ao domicílio de garrafas de gás e assistência técnica."
            />
            <HeroSection />
            <FeaturedProducts products={featured} />
            <ContactSection />
        </AppLayout>
    );
}
