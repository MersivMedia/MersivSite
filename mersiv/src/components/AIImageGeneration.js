import React from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

function AIImageGeneration() {
    const images = [
        '/images/abstractneon.jpg',
        '/images/artdecobarc.jpg',
        '/images/citystreet.jpg',
        '/images/floatingisland.jpg',
        '/images/forgottentemple.jpg',
        '/images/fruits.jpg',
        '/images/futurecity.jpg',
        '/images/futuremodels.jpg',
        '/images/intergalacticvacations.jpg',
        '/images/marslizard.jpg',
        '/images/mysteriousforest.jpg',
        '/images/nightgarden.jpg',
        '/images/perfume.jpg',
        '/images/portrait.jpg',
        '/images/richcar.jpg',
        '/images/robotninja.jpg',
        '/images/steampunkfuture.jpg',
        '/images/surrealdress.jpg',
        '/images/toonparade.jpg',
        '/images/underwaterdining.jpg'
    ];

    const imageServices = [
        'AI-powered image generation',
        'Custom image editing and enhancement',
        'Style transfer and artistic renditions',
        'Image upscaling and restoration',
        'Background removal and replacement',
        'Object insertion and removal',
    ];

    return (
        <>
            <ThreeBackground />
            <main className="w-full px-6 pt-4 pb-20 relative">
                <div className="absolute top-4 right-6">
                    <Link to="/portfolio" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">Back to Portfolio</Link>
                </div>
                <div className="flex flex-col items-center mb-12">
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

                <section id="ai-image-gallery" className="mb-20">
                    <div className="w-full md:w-4/5 lg:w-3/5 mx-auto bg-gray-700 bg-opacity-80 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">AI Image Generation Samples</h2>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                                    <img 
                                        src={image} 
                                        alt={`AI generated image: ${image.split('/').pop().split('.')[0]}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="ai-image-services" className="mb-20">
                    <div className="w-full md:w-4/5 lg:w-3/5 mx-auto bg-gray-700 bg-opacity-80 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">AI Image Services</h2>
                        
                        <ul className="space-y-4">
                            {imageServices.map((service, index) => (
                                <li key={index} className="bg-white p-4 rounded-lg shadow-sm text-center text-lg text-black">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <div className="text-center mt-16">
                    <Link 
                        to="/contact"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 inline-block text-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </main>
        </>
    );
}

export default AIImageGeneration;
