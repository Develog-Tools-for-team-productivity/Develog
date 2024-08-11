import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ReactGA from 'react-ga4';

ReactGA.initialize(
  `${import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID}`
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
