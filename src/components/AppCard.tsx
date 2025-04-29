import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { AppModel } from '../types/App';

interface Props {
  app: AppModel;
  onClick: () => void;
}

const AppCard: React.FC<Props> = ({ app, onClick }) => {

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering card click

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
  };

  const handleInstall = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering card click
    alert(`Installing ${app.name}...`);
    // You can redirect to another page or call an install API here
  };

  return (
    <Card
      title={app.name}
      subTitle={`${app.vendor} | v${app.version}`}
      className="m-2 app-card light-background"
      onClick={onClick}
      header={
        <div className="app-card-header" style={{ justifyContent: 'center', display: 'flex' }}>
          <img
            src={app.icon}
            alt={app.name}
            className="app-icon mt-2"
            style={{ width: '50px', height: '50px' }}
          />
        </div>
      }
    >
      <div className="app-description mb-3">{app.description}</div>

      <div className="d-flex justify-content-center gap-3">
        <Button
          icon="pi pi-download"
          className="p-button-text p-button-plain"
          onClick={handleDownload}
          tooltip="Download"
        />
        <Button
          icon="pi pi-arrow-circle-down"
          className="p-button-text p-button-plain"
          onClick={handleInstall}
          tooltip="Install"
        />
      </div>
    </Card>
  );
};

export default AppCard;
