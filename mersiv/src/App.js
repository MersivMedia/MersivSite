import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import AIAudioProduction from './components/AIAudioProduction';
import AIVideoProduction from './components/AIVideoProduction';
import AIImageGeneration from './components/AIImageGeneration';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/audio" element={<AIAudioProduction />} />
                <Route path="/portfolio/video" element={<AIVideoProduction />} />
                <Route path="/portfolio/image" element={<AIImageGeneration />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
