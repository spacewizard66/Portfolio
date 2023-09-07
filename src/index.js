import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/Home';
import Footer from './component/Footer';
import './style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Home />
        <Footer />
    </>
);