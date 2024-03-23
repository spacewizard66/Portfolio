import React from 'react';
import Loading from './Loading.js'
/* import Home from './Home.js'; */
/* import Footer from './Footer.js'; */
import { useEffect, useState } from 'react';
import '../style.scss';

const style = React.lazy(() =>
    import('../style.scss')
);

export default function App() {
    /* const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, []) */

    const LazyHome = React.lazy(() => import("./Home.js"))
    const LazyFooter = React.lazy(() => import("./Footer.js"))

    return (
        <>
            {/* {loading ?
                <Loading />
            :
                <>
                    <Home />
                    <Footer />
                </>
            } */}
            <React.Suspense fallback={<Loading />}>
                <LazyHome />
                <LazyFooter />
            </React.Suspense>
            {/* <Home /> */}
            {/* <Footer /> */}
        </>
    );
};