import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditAppPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appData, setAppData] = useState({ name: '', version: '', vendor: '' });

  useEffect(() => {
    // Normally fetch from API
    setAppData({ name: 'App ' + id, version: '1.0', vendor: 'Vendor A' });
  }, [id]);

  const handleSave = () => {
    console.log('Saved data:', appData);
    navigate('/admin/apps');
  };

  return (
    <div>
      <h5>Edit App #{id}</h5>
      <form>
        <div className="mb-3">
          <label className="form-label">App Name</label>
          <input className="form-control" value={appData.name} onChange={e => setAppData({ ...appData, name: e.target.value })} />
        </div>
        <div className="mb-3">
          <label className="form-label">Version</label>
          <input className="form-control" value={appData.version} onChange={e => setAppData({ ...appData, version: e.target.value })} />
        </div>
        <div className="mb-3">
          <label className="form-label">Vendor</label>
          <input className="form-control" value={appData.vendor} onChange={e => setAppData({ ...appData, vendor: e.target.value })} />
        </div>
        <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default EditAppPage;
