import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// Brings viewport back to top of page on unload (refresh) to help animation effects
window.onunload = () => {
    window.scrollTo(0, 0);
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <App />
);