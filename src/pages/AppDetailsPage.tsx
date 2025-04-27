import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AppHeader from '../components/AppDetails/AppHeader';
import AppAbout from '../components/AppDetails/AppAbout';
import AppMediaSlider from '../components/AppDetails/AppMediaSlider';
import AppComments from '../components/AppDetails/AppComments';
//import mockApps from '../data/mockApps';
import { AppModel } from '../types/App';
import { fetchApps } from '../services/api';
import SiteHeader from '../components/SiteHeader';

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
    <>
      <div className="container-fluid px-0">
        <SiteHeader />
      </div>
      <div className="container mt-4">

        {/* <div className='mb-3'><Link to="/">Back to Apps</Link></div> */}
        <AppHeader app={app} />
        <AppAbout app={app} />
        <AppMediaSlider appId={app.id.toString()} />
        <AppComments appId={app.id.toString()} />
        {/* <div className='mt-3 mb-3'><Link to="/">Back to Apps</Link></div> */}
      </div>
    </>
  );
};

export default AppDetailsPage;