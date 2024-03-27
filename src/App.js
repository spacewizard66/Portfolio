import React, { lazy, Suspense } from 'react';
import Loading from './component/Loading.js'
/* import Home from './component/Home.js'; */
import Footer from './component/Footer.js';
import './style.scss';

export default function App() {
    const LazyHome = lazy(() => Promise.all([
            import("./component/Home"),
            new Promise((resolve) => setTimeout(resolve, 1500))
        ]).then(([module]) => module)
    );

    return (
        <>
            <Suspense fallback={<Loading />}>
                <LazyHome />
            </Suspense>
            <Footer />
        </>
    );
};