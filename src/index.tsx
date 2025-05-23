import React, { StrictMode } from 'react';
import App from './app/App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>,
);