import { AppModel } from '../types/App';

interface Props {
  apps: AppModel[];
  onAppClick: (app: AppModel) => void;
}

const AppList = ({ apps, onAppClick }: Props) => (
  <ul className="list-group mt-3 mb-3">
    {apps.map((app) => (
      <li
        key={app.id}
        className="list-group-item d-flex align-items-center mb-3"
        onClick={() => onAppClick(app)}
        style={{
          cursor: 'pointer',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          backgroundColor: '#fff',
          padding: '10px',
        }}
      >
        {/* App icon */}
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

        {/* App name and description */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {app.name}
          </div>
          <div style={{
            fontSize: '0.85rem',
            color: '#6c757d',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {app.description}
          </div>
        </div>

        {/* Version badge */}
        <span className="badge bg-secondary m-1">{app.version}</span>

        {/* Download Button */}
        <button
          className="btn btn-outline-primary btn-sm me-2"
          onClick={async (e) => {
            e.stopPropagation(); // Prevent triggering onAppClick
            try {
              const baseUrl = import.meta.env.BASE_URL || '/'
              const url = `${baseUrl}yarn-1.22.22.msi`;; // Public path
              const link = document.createElement('a');
              link.href = url;
              link.download = 'yarn-1.22.22.msi'; // Name when downloaded
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);

              // const response = await fetch(app.icon); // fetch the file
              // const blob = await response.blob(); // create a blob
              // const url = window.URL.createObjectURL(blob); // create temporary url
              // const link = document.createElement('a');
              // link.href = url;
              // link.download = `${app.name}.png`; // set download filename
              // document.body.appendChild(link);
              // link.click();
              // link.remove();
              // window.URL.revokeObjectURL(url); // clean up
            } catch (error) {
              console.error('Download failed', error);
            }
          }}
        >
          <i className="pi pi-download"></i> Download
        </button>

        {/* Install Button */}
        <button
          className="btn btn-outline-success btn-sm"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onAppClick
            alert(`Installing ${app.name}...`);
          }}
        >
          <i className="pi pi-check-circle"></i> Install
        </button>
      </li>
    ))}
  </ul>
);

export default AppList;
