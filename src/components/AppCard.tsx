import React from 'react';
import { Card } from 'primereact/card';
import { AppModel } from '../types/App';

interface Props {
  app: AppModel;
  onClick: () => void;
}

const AppCard: React.FC<Props> = ({ app, onClick }) => {
  return (
    <Card
      title={app.name}
      subTitle={`${app.vendor} | v${app.version}`}
      className="m-2 shadow-sm app-card"
      onClick={onClick}
      header={
        <div className="app-card-header" style={{justifyContent: 'center', display: 'flex'}}>
          <img
            src={app.icon}
            alt={app.name}
            className="app-icon"
            style={{width: '50px', height: '50px'}}
          />
        </div>
      }
       //style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <div className="app-description">{app.description}</div>
    </Card>
  );
};

export default AppCard;
