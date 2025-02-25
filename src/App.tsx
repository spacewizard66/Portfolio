import React, { lazy, Suspense } from 'react';

import Loading from './components/Loading';
import About from './components/About';
import Stack from './components/Stack';
import Sprite from './components/Sprite';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

import './style.scss';

export default function App(): React.JSX.Element {
    // Lazy load 'Home.js', and set minimum delay time
    const Main = lazy(() => Promise.all([
            import("./components/Main"),
            new Promise((resolve) => setTimeout(resolve, 500))
        ]).then(([module]) => module)
    );

    return (
        <>
            <Suspense fallback={<Loading />}>
                <About>
                    <Stack />
                    <Sprite />
                </About>
                <Main>
                    <Projects />
                    <Certificates />
                </Main>
                <Footer />
            </Suspense>
        </>
    );
};
