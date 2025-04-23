import { Route, Routes, Navigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import AppsListPage from './AppListPage';
import EditAppPage from './EditAppPage';
import WorkflowConfigPage from './WorkflowConfig';

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<AdminLayout />}>
      <Route index element={<Navigate to="apps" />} />
      <Route path="apps" element={<AppsListPage />} />
      <Route path="apps/:id/edit" element={<EditAppPage />} />
      <Route path="workflow" element={<WorkflowConfigPage />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
