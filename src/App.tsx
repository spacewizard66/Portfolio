import React from 'react';

import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './style.scss';

export default function App(): React.ReactNode {
    // Brings viewport back to top of page on unload (refresh)
	// to help animation effects
	window.onunload = function () {
		window.scrollTo(0, 0);
	};

    return (
        <>
            <Home>
                <Projects />
            </Home>
            <Footer />
        </>
    )
}