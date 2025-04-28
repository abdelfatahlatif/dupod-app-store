import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchApps } from '../services/api';
import { AppModel } from '../types/App';
import AppGrid from '../components/AppGrid';
import AppList from '../components/AppList';
//import VendorMenu from '../components/VendorMenu';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';
import PaginationControl from '../components/PaginationControl';
import { FaTh, FaList } from 'react-icons/fa';
import SiteHeader from '../components/SiteHeader';
import { useParams } from 'react-router-dom';

const PER_PAGE = 6;

const AddIns = () => {
    const [apps, setApps] = useState<AppModel[]>([]);
    const [filteredApps, setFilteredApps] = useState<AppModel[]>([]);
    const [search, setSearch] = useState('');
    //const [selectedVendor, setSelectedVendor] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [disciplineFilter, setDisciplineFilter] = useState('');
    const [versionFilter, setVersionFilter] = useState('');
    //const [category, setCategory] = useState('All');
    const [isGrid, setIsGrid] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const appName = useParams()['appName'] ?? '';

    const navigate = useNavigate();

    useEffect(() => {
        fetchApps().then((data) => setApps(data));
    }, []);

    useEffect(() => {
        filterApps();
    }, [apps, search, typeFilter, disciplineFilter, versionFilter//, category
    ]);

    const filterApps = () => {
        let result = apps.filter((a) => a.applications == appName);

        // if (category !== 'All') {
        //   result = result.filter((a) => a.category === category);
        // }

        // if (selectedVendor) {
        //     result = result.filter((a) => a.vendor === selectedVendor);
        // }

        if (typeFilter) {
            result = result.filter((a) => a.type.toLowerCase().includes(typeFilter.toLowerCase()));
        }

        if (disciplineFilter) {
            result = result.filter((a) =>
                a.discipline.toLowerCase().includes(disciplineFilter.toLowerCase())
            );
        }

        if (versionFilter) {
            result = result.filter((a) => a.version.includes(versionFilter));
        }

        if (search) {
            result = result.filter((a) =>
                a.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredApps(result);
        setCurrentPage(1);
    };

    const paginatedApps = filteredApps.slice(
        (currentPage - 1) * PER_PAGE,
        currentPage * PER_PAGE
    );

    //const vendors = Array.from(new Set(apps.map((a) => a.vendor)));
    //const categories = ['All', ...Array.from(new Set(apps.map((a) => a.category)))];

    const handleAppClick = (app: AppModel) => {
        navigate(`/apps/${app.id}`);
    };

    return (
        <div className="container-fluid">
            {/* <h2 className="text-center mb-4">App Store</h2> */}

            {/* Category Tabs */}
            {/* <ul className="nav nav-tabs mb-3">
        {categories.map((c) => (
          <li className="nav-item" key={c}>
            <button
              className={`nav-link ${category === c ? 'active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          </li>
        ))}
      </ul> */}
            <SiteHeader />
            {/* <div className="row g-0" style={{ minHeight: '100vh' }}>      
        <div className="col-md-3 bg-light border-end p-2">          
          <h5>Vendors</h5>
          <VendorMenu
            vendors={vendors}
            selectedVendor={selectedVendor}
            onSelect={(v) => setSelectedVendor(v)}
          />
        </div> */}

            {/* Main App Panel */}
            <div className="col-12 p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <SearchBar value={search} onChange={setSearch} />
                </div>

                <FilterPanel
                    type={typeFilter}
                    discipline={disciplineFilter}
                    version={versionFilter}
                    onTypeChange={setTypeFilter}
                    onDisciplineChange={setDisciplineFilter}
                    onVersionChange={setVersionFilter}
                />
                <div>
                    <button
                        className={`btn btn-outline-primary me-1 ${isGrid ? 'active' : ''}`}
                        onClick={() => setIsGrid(true)}
                    >
                        <FaTh />
                    </button>
                    <button
                        className={`btn btn-outline-primary ${!isGrid ? 'active' : ''}`}
                        onClick={() => setIsGrid(false)}
                    >
                        <FaList />
                    </button>
                </div>

                <div className="app-list-container">
                    {isGrid ? (
                        <AppGrid apps={paginatedApps} onAppClick={handleAppClick} />
                    ) : (
                        <AppList apps={paginatedApps} onAppClick={handleAppClick} />
                    )}
                </div>


                <PaginationControl
                    total={filteredApps.length}
                    page={currentPage}
                    perPage={PER_PAGE}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
        // </div >
    );
};

export default AddIns;
