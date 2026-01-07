import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-900 antialiased">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
