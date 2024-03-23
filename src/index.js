import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './component/Loading.js'
import './style.scss';

const LazyApp = lazy(() => import('./App.js'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<Loading />}>
        <LazyApp />
    </Suspense>
);