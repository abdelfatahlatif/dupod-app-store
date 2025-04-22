import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AppDetailsPage from './pages/AppDetailsPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/dupod-app-store">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apps/:id" element={<AppDetailsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
