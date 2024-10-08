import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WeatherApp from './WeatherApp';
import Home from './home';
import Header from './header';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/weather" element={<WeatherApp />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
