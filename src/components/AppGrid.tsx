import { AppModel } from '../types/App';
import AppCard from './AppCard';

interface Props {
  apps: AppModel[];
  onAppClick: (app: AppModel) => void;
}

const AppGrid = ({ apps, onAppClick }: Props) => (
  <div className="row">
    {apps.map((app) => (
      <div className="col-md-4 mb-3" key={app.id}>
        <AppCard app={app} onClick={() => onAppClick(app)} />
      </div>
    ))}
  </div>
);

export default AppGrid;
