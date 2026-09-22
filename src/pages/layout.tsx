import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function RootLayout() {
    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}