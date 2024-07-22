import React, { lazy, Suspense } from 'react';

import Loading from './components/Loading';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './style.scss';

export default function App(): React.ReactNode {
    // Lazy load 'Home.js', and set minimum delay time
    const Home = lazy(() => Promise.all([
            import("./components/Home"),
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
