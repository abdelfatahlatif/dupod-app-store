import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AppDetailsPage from './pages/AppDetailsPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import AdminRoutes from './admin/AdminRoutes';
import AddIns from './pages/Addins';
import PageLoader from './components/PageLoader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/dupod-app-store">
      <PageLoader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apps/:appName" element={<AddIns />} />
        <Route path="/addins/:id" element={<AppDetailsPage />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
