import React from 'react';
import { AppModel } from '../../types/App';

interface Props {
  app: AppModel;
}

const AppHeader: React.FC<Props> = ({ app }) => {
  return (
    <div className="d-flex align-items-center mb-4">
      <img src={app.icon} alt={app.name} style={{ width: 80, height: 80, marginRight: 20 }} />
      <div>
        <h2>{app.name}</h2>
        <p className="text-muted">{app.description}</p>
      </div>
    </div>
  );
};

export default AppHeader;
