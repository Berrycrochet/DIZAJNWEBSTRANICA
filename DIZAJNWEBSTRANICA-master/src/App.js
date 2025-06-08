import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Gigs from './pages/Shows';
import Contact from './pages/Contact';
import LoginForma from './components/Login';
import RegisterForma from './components/RegisterForma';

import './pages/App.css';
import './components/loginstil.css';
import Shows from './pages/Shows';

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('ulogovaniKorisnik');
        if (savedUser) {
            setCurrentUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogin = (user) => {
        localStorage.setItem('ulogovaniKorisnik', JSON.stringify(user));
        setCurrentUser(user);
    };

    const handleRegister = (user) => {
        localStorage.setItem('ulogovaniKorisnik', JSON.stringify(user));
        setCurrentUser(user);
    };

    const handleLogout = () => {
        localStorage.removeItem('ulogovaniKorisnik');
        setCurrentUser(null);
    };

    return (
        <Router>
            <div className="app-layout">
                <Header currentUser={currentUser} onLogout={handleLogout} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/shows" element={<Gigs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/login"
                            element={<LoginForma onLogin={handleLogin} />}
                        />
                        <Route
                            path="/register"
                            element={<RegisterForma onRegister={handleRegister} />}
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
