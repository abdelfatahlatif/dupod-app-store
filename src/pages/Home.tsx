import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { fetchApps } from '../services/api';
import { AppModel } from '../types/App';
import SiteHeader from '../components/SiteHeader';
import VendorMenu from '../components/VendorMenu';
import ApplicationsCards from '../components/ApplicationsCards';

const Home = () => {
  const [apps, setApps] = useState<AppModel[]>([]);
  const [filteredApps, setFilteredApps] = useState<AppModel[]>([]);
  const [selectedVendor, setSelectedVendor] = useState('');

  //const navigate = useNavigate();

  useEffect(() => {
    fetchApps().then((data) => setApps(data));
  }, []);

  useEffect(() => {
    filterApps();
  }, [apps, selectedVendor, filteredApps
  ]);

  const filterApps = () => {
    let result = apps;

    // if (category !== 'All') {
    //   result = result.filter((a) => a.category === category);
    // }

    if (selectedVendor) {
      result = result.filter((a) => a.vendor === selectedVendor);
    }
    setFilteredApps(result);
  };

  const vendors = Array.from(new Set(apps.map((a) => a.vendor)));
  //const categories = ['All', ...Array.from(new Set(apps.map((a) => a.category)))];

  // const handleAppClick = (app: AppModel) => {
  //   navigate(`/apps/${app}`);
  // };

  return (
    <div className="container-fluid px-0">

      <SiteHeader />
      <div className="row g-0" style={{ minHeight: '100vh' }}>
        {/* Left Vendor Menu */}
        <div className="col-md-3 bg-light border-end p-2">
          {/* <Link to="/admin/apps">Go to Admin Apps</Link> */}
          <h5>Vendors</h5>
          <VendorMenu
            vendors={vendors}
            selectedVendor={selectedVendor}
            onSelect={(v) => setSelectedVendor(v)}
          />
        </div>

        {/* Main App Panel */}
        <div className="col-12 col-md-9 p-4">

          <div className="app-list-container">
            <ApplicationsCards apps={filteredApps}></ApplicationsCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
