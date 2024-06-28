import React from 'react';

import Home from './components/Home';
import Projects from './components/Projects';

import './style.scss';

export default function App(): React.ReactNode {
    return (
        <>
            <Home>
                <Projects />
            </Home>
        </>
    )
}