import React from 'react';
import ReactDOM from 'react-dom/client';
/* import Loading from './component/Loading.js' */
import App from './App.js';
/* import './style.scss'; */

/* const LazyApp = React.lazy(() => import('./App.js')) */

/* const ConcurrentMode = React.unstable_ConcurrentMode; */

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    /* <ConcurrentMode> */
        /* <Suspense fallback={<Loading />}> */
            <App />
        /* </Suspense> */
    /* </ConcurrentMode> */
);