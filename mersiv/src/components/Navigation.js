import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToPortfolio = () => {
        if (location.pathname === '/') {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If not on home page, navigate to home and then scroll
            navigate('/', { state: { scrollToPortfolio: true } });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img src="/images/Logo.png" alt="Mersiv Media Logo" className="h-16 w-auto" />
                    </Link>
                    <div>
                        <button onClick={scrollToPortfolio} className="text-gray-800 hover:text-gray-600 px-3 py-2">Portfolio</button>
                        <Link to="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
