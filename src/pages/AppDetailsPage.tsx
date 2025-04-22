import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppModel } from '../types/App';
import { fetchApps } from '../services/api';

const AppDetailsPage = () => {
  const { id } = useParams();
  const [app, setApp] = useState<AppModel | null>(null);

  useEffect(() => {
    fetchApps().then((apps) => {
      const found = apps.find((a) => a.id.toString() === id);
      setApp(found || null);
    });
  }, [id]);

  if (!app) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{app.name}</h2>
      <p><strong>Vendor:</strong> {app.vendor}</p>
      <p><strong>Type:</strong> {app.type}</p>
      <p><strong>Discipline:</strong> {app.discipline}</p>
      <p><strong>Version:</strong> {app.version}</p>
      <p>{app.description}</p>
    </div>
  );
};

export default AppDetailsPage;
