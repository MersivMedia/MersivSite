import React from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

function Portfolio() {
    const categories = [
        {
            name: 'AI Audio Production',
            gif: '/images/headphones.gif',
            description: 'Custom AI Generated Voice Overs, Music, and Sound Effects.',
            path: '/portfolio/audio'
        },
        {
            name: 'AI Video Production',
            gif: '/images/unicorn.gif',
            description: 'High quality AI generated video content for your brand.',
            path: '/portfolio/video'
        },
        {
            name: 'AI Image Generation',
            gif: '/images/photographer.gif',
            description: 'Image generation for marketing and promotional materials.',
            path: '/portfolio/image'
        }
    ];

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

                <section id="portfolio" className="mb-20">
                    <div className="w-4/5 mx-auto bg-gray-700 bg-opacity-80 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Portfolio</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categories.map((category, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.name}</h3>
                                    <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                                        <img 
                                            src={category.gif} 
                                            alt={`${category.name} example`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-gray-600 mb-4 flex-grow">
                                        {category.description}
                                    </p>
                                    <div className="text-center">
                                        <Link 
                                            to={category.path}
                                            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 inline-block"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Portfolio;
