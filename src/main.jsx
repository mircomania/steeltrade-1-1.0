import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';

import App from './App.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </HelmetProvider>
);
