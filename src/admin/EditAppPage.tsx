import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchApps } from '../services/api';
import { AppModel } from '../types/App';

const EditAppPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appData, setAppData] = useState<AppModel | null>(null);
  const [apps, setApps] = useState<AppModel[]>([]);


  useEffect(() => {
    fetchApps().then((data) => setApps(data));
  }, []);

  useEffect(() => {
    if (apps.length === 0) return; // Wait until apps are loaded

    const app = apps.find(a => a.id === Number(id));
    if (app) {
      setAppData(app);
    } else {
      alert('App not found');
      navigate('/admin/apps');
    }
  }, [apps, id, navigate]);


  const getUniqueOptions = (key: keyof AppModel): string[] => {
    return [...new Set(apps.map((app) => String(app[key])).filter(Boolean))];
  };

  const vendors = getUniqueOptions('vendor');
  const types = getUniqueOptions('type');
  const disciplines = getUniqueOptions('discipline');
  const applicationOptions = getUniqueOptions('applications');
  const versions = getUniqueOptions('version');


  const handleChange = (key: keyof AppModel, value: string) => {
    if (appData) {
      setAppData(prev => ({ ...prev!, [key]: value }));
    }
  };

  const handleSave = () => {
    console.log('Saved data:', appData);
    navigate('/admin/apps');
  };

  if (!appData) return null;

  return (
    <div>
      <h5>Edit App #{id}</h5>
      <form>
        <div className="mb-3">
          <label className="form-label">App Name</label>
          <input
            className="form-control"
            value={appData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            value={appData.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Vendor</label>
          <select
            className="form-select"
            value={appData.vendor}
            onChange={(e) => handleChange('vendor', e.target.value)}
          >
            {vendors.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Applications</label>
          <select
            className="form-select"
            value={appData.applications}
            onChange={(e) => handleChange('applications', e.target.value)}
          >
            {applicationOptions.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            value={appData.type}
            onChange={(e) => handleChange('type', e.target.value)}
          >
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Discipline</label>
          <select
            className="form-select"
            value={appData.discipline}
            onChange={(e) => handleChange('discipline', e.target.value)}
          >
            {disciplines.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Version</label>
          <select
            className="form-select"
            value={appData.version}
            onChange={(e) => handleChange('version', e.target.value)}
          >
            {versions.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            value={appData.icon}
            onChange={(e) => handleChange('icon', e.target.value)}
          />
          {appData.icon && (
            <img
              src={appData.icon}
              alt="App icon"
              className="mt-2"
              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
            />
          )}
        </div>
        <div className="mb-3 text-center">
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAppPage;
