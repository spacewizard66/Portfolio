import React, { lazy, Suspense } from 'react';

import Footer from './component/Footer';
import Loading from './component/Loading'
import Projects from './component/Projects';

import './style.scss';

export default function App() {
    // Lazy load 'Home.js', and set minimum delay time
    const Home = lazy(() => Promise.all([
            import("./component/Home"),
            new Promise((resolve) => setTimeout(resolve, 600))
        ]).then(([module]) => module)
    );

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Home>
                    <Projects />
                </Home>
                <Footer />
            </Suspense>
        </>
    );
};