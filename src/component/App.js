import React from 'react';
import Loading from './Loading.js'
import Home from './Home.js';
import Footer from './Footer.js';
import { useEffect, useState } from 'react';
import '../style.scss';

const style = React.lazy(() =>
    import('../style.scss')
);

export default function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    return (
        <>
            {loading ?
                <Loading />
            :
                <>
                    <Home />
                    <Footer />
                </>
            }
        </>
    );
};