import { Outlet, NavLink } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

const AdminLayout = () => {
  return (
    <div className="container-fluid px-0">

      <SiteHeader />

      <div className="row g-0" style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <div className="col-md-3 p-4">
          {/* <Link to="/">Back to Apps</Link> */}
          <h4 className="mb-4">Admin Panel</h4>
          <div className="list-group">
            <NavLink
              to="apps"
              className={({ isActive }) =>
                `list-group-item list-group-item-action ${isActive ? 'active' : ''}`
              }
            >
              Manage Apps
            </NavLink>

            <NavLink
              to="workflow"
              className={({ isActive }) =>
                `list-group-item list-group-item-action ${isActive ? 'active' : ''}`
              }
            >
              Configure Workflow
            </NavLink>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
