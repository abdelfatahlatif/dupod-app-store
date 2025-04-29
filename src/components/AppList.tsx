import { AppModel } from '../types/App';

interface Props {
  apps: AppModel[];
  onAppClick: (app: AppModel) => void;
}

const AppList = ({ apps, onAppClick }: Props) => {
  if (apps.length === 0) {
    return (
      <div className="alert alert-warning text-center mt-2" role="alert">
        <i className="pi pi-info-circle me-2"></i>No apps found.
      </div>
    );
  }

  return (
    <ul className="list-group mb-3">
      {apps.map((app) => (
        <li
          key={app.id}
          className="list-group-item d-flex align-items-center mt-2"
          onClick={() => onAppClick(app)}
          style={{
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid #dee2e6',
            padding: '10px',
          }}
        >
          <img
            src={app.icon}
            alt={app.name}
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'cover',
              borderRadius: '5px',
              marginRight: '10px',
            }}
          />
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div
              style={{
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {app.name}
            </div>
            <div
              style={{
                fontSize: '0.85rem',
                color: '#6c757d',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {app.description}
            </div>
          </div>
          <span className="badge bg-secondary m-1">{app.version}</span>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={async (e) => {
              e.stopPropagation();
              try {
                const baseUrl = import.meta.env.BASE_URL || '/';
                const url = `${baseUrl}yarn-1.22.22.msi`;
                const link = document.createElement('a');
                link.href = url;
                link.download = 'yarn-1.22.22.msi';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              } catch (error) {
                console.error('Download failed', error);
              }
            }}
          >
            <i className="pi pi-download"></i> Download
          </button>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              alert(`Installing ${app.name}...`);
            }}
          >
            <i className="pi pi-check-circle"></i> Install
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AppList;
