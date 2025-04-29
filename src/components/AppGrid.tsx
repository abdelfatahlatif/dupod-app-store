import { AppModel } from '../types/App';
import AppCard from './AppCard';

interface Props {
  apps: AppModel[];
  onAppClick: (app: AppModel) => void;
}

const AppGrid = ({ apps, onAppClick }: Props) => {
  if (apps.length === 0) {
    return (
      <div className="alert alert-warning text-center mt-2" role="alert">
        <i className="pi pi-info-circle me-2"></i>No apps found.
      </div>
    );
  }

  return (
    <div className="row">
      {apps.map((app) => (
        <div className="col-md-4 mb-3" key={app.id}>
          <AppCard app={app} onClick={() => onAppClick(app)} />
        </div>
      ))}
    </div>
  );
};

export default AppGrid;
