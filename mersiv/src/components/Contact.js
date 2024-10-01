import React from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

function Contact() {
    return (
        <>
            <ThreeBackground />
            <main className="container mx-auto px-6 pt-4 pb-20 relative">
                <div className="absolute top-4 right-6">
                    <Link to="/" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">Back to Home</Link>
                </div>
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
                
                <section id="services" className="mb-20">
                    <div className="w-3/5 mx-auto bg-gray-700 bg-opacity-80 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Services</h2>
                        <ul className="space-y-4">
                            {[
                                "AI-generated imagery for marketing",
                                "Custom AI-powered video content",
                                "AI-assisted audio production",
                                "Personalized content recommendations"
                            ].map((service, index) => (
                                <li key={index} className="bg-white p-4 rounded-lg shadow-sm text-center text-lg text-black">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <div className="text-center mt-16">
                    <a 
                        href="https://calendar.app.google/vxVG7M96BRfRpTAj9" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 inline-block text-lg"
                    >
                        Schedule a Call
                    </a>
                </div>
            </main>
        </>
    );
}

export default Contact;
