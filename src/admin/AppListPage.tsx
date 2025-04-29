import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';

const dummyApps = [
  { id: 1, name: 'App One', version: '1.0', vendor: 'Vendor A' },
  { id: 2, name: 'App Two', version: '2.1', vendor: 'Vendor B' },
  { id: 3, name: 'App Three', version: '1.5', vendor: 'Vendor A' },
];

const AppsListPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h5>Manage Apps</h5>
      <Card>
        <table className="table custom-table-bg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
              <th>Vendor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyApps.map((app) => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.version}</td>
                <td>{app.vendor}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/admin/apps/${app.id}/edit`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AppsListPage;
