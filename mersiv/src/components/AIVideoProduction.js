import React from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

function AIVideoProduction() {
    const youtubeVideos = [
        { id: '1', embedId: 'QOujJItlh7s' },
        { id: '2', embedId: '0XguijaNNA0' },
        { id: '3', embedId: 'l60KcU2F7O4', isShort: true },
    ];

    const videoServices = [
        'AI-powered video editing',
        'Custom video animations',
        'Automated content creation',
        'Video effects and enhancements',
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

                <section id="ai-video-production" className="mb-20">
                    <div className="w-full md:w-4/5 lg:w-3/5 mx-auto bg-gray-700 bg-opacity-80 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">AI Video Production Samples</h2>
                        
                        <div className="space-y-8">
                            {youtubeVideos.map((video) => (
                                <div key={video.id} className={`video-container ${video.isShort ? 'aspect-[9/16]' : 'aspect-[16/9]'}`}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.embedId}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={`Video ${video.id}`}
                                        className="w-full h-full rounded-lg"
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 text-center">
                            <a 
                                href="https://www.youtube.com/@MersivMedia" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white hover:text-blue-300 transition duration-300"
                            >
                                Check out more videos on our YouTube channel
                            </a>
                        </div>
                    </div>
                </section>

                <section id="ai-video-services" className="mb-20">
                    <div className="w-full md:w-4/5 lg:w-3/5 mx-auto bg-gray-700 bg-opacity-80 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">AI Video Services</h2>
                        
                        <ul className="space-y-4">
                            {videoServices.map((service, index) => (
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
            <style jsx>{`
                .video-container {
                    position: relative;
                    width: 100%;
                    padding-top: 56.25%; /* 16:9 Aspect Ratio */
                }
                .video-container.aspect-[9/16] {
                    padding-top: 177.78%; /* 9:16 Aspect Ratio */
                }
                .video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </>
    );
}

export default AIVideoProduction;
