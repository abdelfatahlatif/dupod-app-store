import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AppHeader from '../components/AppDetails/AppHeader';
import AppAbout from '../components/AppDetails/AppAbout';
import AppMediaSlider from '../components/AppDetails/AppMediaSlider';
import AppComments from '../components/AppDetails/AppComments';
//import mockApps from '../data/mockApps';
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
  //if (!app) return <div>App not found</div>;

 return (
    <div className="container mt-4">
      <AppHeader app={app} />
      <AppAbout />
      <AppMediaSlider />
      <AppComments appId={app.id.toString()} />
    </div>
  );
};

export default AppDetailsPage;