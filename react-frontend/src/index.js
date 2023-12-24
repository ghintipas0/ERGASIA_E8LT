import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import './page-account-settings.css';
import './page-auth.css';
import './page-icons.css';
import './page-misc.css';
import './theme-default.css';
import './core.css';

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

reportWebVitals();
