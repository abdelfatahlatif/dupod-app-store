import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { AppModel } from '../types/App';
import { fetchApps } from '../services/api';

const AppsListPage = () => {
  const [apps, setApps] = useState<AppModel[]>([]);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadApps = async () => {
      const data = await fetchApps();
      setApps(data);
    };

    loadApps();
  }, []);

  const iconTemplate = (rowData: AppModel) => (
    <img
      src={rowData.icon}
      alt={rowData.name}
      style={{ width: '40px', height: '40px', objectFit: 'contain' }}
    />
  );

  // const rowClickHandler = (e: { data: AppModel }) => {
  //   navigate(`/admin/apps/${e.data.id}/edit`);
  // };

  return (
    <div className='mb-3'>
      <h5>Manage Apps</h5>
      <div className="mb-3">
        <span className="p-input-icon-left w-100">
          {/* <i className="pi pi-search" /> */}
          <InputText
            type="search"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search apps..."
            className="form-control"
          />
        </span>
      </div>

      <DataTable
        value={apps}
        paginator
        rows={6}
        globalFilter={globalFilter}
        emptyMessage="No apps found."
        responsiveLayout="scroll"
        className="p-datatable-striped p-datatable-gridlines custom-table-bg"
        selectionMode="single"
        onRowClick={(e) => navigate(`/admin/apps/${(e.data as AppModel).id}/edit`)}
      >
        <Column header="" body={iconTemplate} style={{ width: '60px' }} />
        <Column field="name" header="Name" sortable />
        <Column field="vendor" header="Vendor" sortable />
        <Column field="applications" header="Applications" sortable />
        <Column field="type" header="Type" sortable />
        <Column field="discipline" header="Discipline" sortable />
        <Column field="version" header="Version" sortable />
      </DataTable>

    </div>
  );
};

export default AppsListPage;
