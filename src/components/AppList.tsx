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
        className="list-group-item d-flex justify-content-between align-items-center"
        onClick={() => onAppClick(app)}
        style={{ cursor: 'pointer' }}
      >
        <span>
          <i className={`${app.icon} me-2`} />
          {app.name}
        </span>
        <span className="badge bg-primary">{app.version}</span>
      </li>
    ))}
  </ul>
);

export default AppList;
