import React, { lazy, Suspense } from 'react';
import Loading from './component/Loading.js'
import Footer from './component/Footer.js';

export default function App() {
    const LazyHome = lazy(() => import("./component/Home.js"))

    return (
        <>
            <Suspense fallback={<Loading />}>
                <LazyHome />
            </Suspense>
            <Footer />
        </>
    );
};