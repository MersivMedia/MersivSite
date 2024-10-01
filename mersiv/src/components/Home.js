import React from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

function Home() {
    return (
        <>
            <ThreeBackground />
            <main className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center">
                    <div 
                        className="overflow-hidden"
                        style={{ width: '800px', height: '375px' }}
                    >
                        <img 
                            src="/images/Logo.png" 
                            alt="Mersiv Media Logo" 
                            className="w-[1000%] h-[1000%] object-cover object-center transform -translate-x-1/8 -translate-y-1/4"
                        />
                    </div>
                </div>
                <section id="about" className="mb-0">
                    <div className="w-4/5 lg:w-3/5 mx-auto text-center bg-gray-700 bg-opacity-80 p-8 rounded-lg shadow-md">
                        <p className="text-lg mb-8 text-white">Mersiv Media specializes in creating cutting-edge AI-generated assets for a variety of media projects. Our team combines creativity with advanced AI technologies to deliver unique and engaging content.</p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                            <Link 
                                to="/portfolio" 
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 inline-block text-lg"
                            >
                                View Portfolio
                            </Link>
                            <Link 
                                to="/contact" 
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 inline-block text-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
