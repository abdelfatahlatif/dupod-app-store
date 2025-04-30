import React, { useEffect, useState } from 'react';
import { fetchApps } from '../services/api';
import { AppModel } from '../types/App';

interface UserOption {
    label: string;
    value: string;
}

interface WorkflowRule {
    vendor: string;
    applications: string;
    type: string;
    discipline: string;
    reviewer1: string;
    reviewer2: string;
    approver: string;
}

const users: UserOption[] = [
    { label: 'Alice', value: 'alice' },
    { label: 'Bob', value: 'bob' },
    { label: 'Charlie', value: 'charlie' },
    { label: 'David', value: 'david' },
    { label: 'Eve', value: 'eve' },
    { label: 'Frank', value: 'frank' },
    { label: 'Grace', value: 'grace' },
    { label: 'Heidi', value: 'heidi' },
    { label: 'Ivan', value: 'ivan' },
    { label: 'Judy', value: 'judy' },
    { label: 'Mallory', value: 'mallory' },
    { label: 'Henry', value: 'henry' }
];

let workflowRules: WorkflowRule[] = [
    {
        vendor: 'Autodesk',
        applications: 'Revit',
        type: 'Addins',
        discipline: 'Structure',
        reviewer1: 'alice',
        reviewer2: 'bob',
        approver: 'charlie',
    },
    {
        vendor: 'Autodesk',
        applications: 'AutoCAD',
        type: 'Addins',
        discipline: 'Architecture',
        reviewer1: 'david',
        reviewer2: 'eve',
        approver: 'frank',
    },
    {
        vendor: 'Autodesk',
        applications: 'Inventor',
        type: 'Addins',
        discipline: 'Structure',
        reviewer1: 'grace',
        reviewer2: 'bob',
        approver: 'alice',
    },
    {
        vendor: 'Autodesk',
        applications: 'Navisworks',
        type: 'Dynamo',
        discipline: 'MEP',
        reviewer1: 'henry',
        reviewer2: 'david',
        approver: 'eve',
    },
    {
        vendor: 'Trimble',
        applications: 'Tekla Structures',
        type: 'Extensions',
        discipline: 'Structure',
        reviewer1: 'bob',
        reviewer2: 'frank',
        approver: 'charlie',
    },
    {
        vendor: 'Trimble',
        applications: 'Tekla Structures Designer',
        type: 'Extensions',
        discipline: 'Structure',
        reviewer1: 'alice',
        reviewer2: 'grace',
        approver: 'henry',
    },
    {
        vendor: 'Trimble',
        applications: 'SketchUp',
        type: 'Addins',
        discipline: 'Architecture',
        reviewer1: 'david',
        reviewer2: 'charlie',
        approver: 'bob',
    },
    {
        vendor: 'Bentley Systems',
        applications: 'MicroStation',
        type: 'Extensions',
        discipline: 'Architecture',
        reviewer1: 'alice',
        reviewer2: 'frank',
        approver: 'grace',
    },
    {
        vendor: 'Bentley Systems',
        applications: 'OpenBuildings',
        type: 'Macros',
        discipline: 'MEP',
        reviewer1: 'henry',
        reviewer2: 'eve',
        approver: 'alice',
    },
    {
        vendor: 'Bentley Systems',
        applications: 'OpenRoads',
        type: 'Macros',
        discipline: 'MEP',
        reviewer1: 'charlie',
        reviewer2: 'grace',
        approver: 'frank',
    },
    {
        vendor: 'ESRI',
        applications: 'ArcGIS',
        type: 'Macros',
        discipline: 'Structure',
        reviewer1: 'bob',
        reviewer2: 'david',
        approver: 'eve',
    },
    {
        vendor: 'McNeel & Associates',
        applications: 'Rhino',
        type: 'Dynamo',
        discipline: 'MEP',
        reviewer1: 'grace',
        reviewer2: 'henry',
        approver: 'alice',
    },
];

const WorkflowConfig: React.FC = () => {
    const [apps, setApps] = useState<AppModel[]>([]);
    const [filters, setFilters] = useState({
        vendor: '',
        applications: '',
        type: '',
        discipline: ''
    });
    const [reviewer1, setReviewer1] = useState('');
    const [reviewer2, setReviewer2] = useState('');
    const [approver, setApprover] = useState('');

    useEffect(() => {
        fetchApps().then(setApps);
    }, []);

    const getUnique = (key: keyof AppModel) => {
        return [...new Set(apps.map(app => String(app[key]))).values()];
    };

    const handleFilterChange = (key: keyof typeof filters, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleSearch = () => {
        const matchedRule = workflowRules.find(rule =>
            rule.vendor === filters.vendor &&
            rule.applications === filters.applications &&
            rule.type === filters.type &&
            rule.discipline === filters.discipline
        );

        if (matchedRule) {
            setReviewer1(matchedRule.reviewer1);
            setReviewer2(matchedRule.reviewer2);
            setApprover(matchedRule.approver);
        } else {
            setReviewer1('');
            setReviewer2('');
            setApprover('');
            alert('No workflow configuration found for the selected combination.');
        }
    };

    const handleSave = () => {
        const existingIndex = workflowRules.findIndex(rule =>
            rule.vendor === filters.vendor &&
            rule.applications === filters.applications &&
            rule.type === filters.type &&
            rule.discipline === filters.discipline
        );

        const newRule: WorkflowRule = {
            vendor: filters.vendor,
            applications: filters.applications,
            type: filters.type,
            discipline: filters.discipline,
            reviewer1,
            reviewer2,
            approver
        };

        if (existingIndex !== -1) {
            workflowRules[existingIndex] = newRule;
            alert('Workflow rule updated successfully.');
        } else {
            workflowRules.push(newRule);
            alert('Workflow rule added successfully.');
        }

        // Clear selections
        //setFilters({ vendor: '', applications: '', type: '', discipline: '' });
        setReviewer1('');
        setReviewer2('');
        setApprover('');
    };

    return (
        <div>
            <h5>Workflow Configuration</h5>

            <div className="row mb-3">
                {['vendor', 'applications', 'type', 'discipline'].map(key => (
                    <div key={key} className="col-md-3 mb-3">
                        <label className="form-label text-capitalize">{key}</label>
                        <select
                            className="form-select"
                            value={filters[key as keyof typeof filters]}
                            onChange={e => handleFilterChange(key as keyof typeof filters, e.target.value)}
                        >
                            <option value="">Select {key}</option>
                            {getUnique(key as keyof AppModel).map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            <div className="mb-3 text-end">
                <button className="btn btn-primary me-2" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="mb-3">
                <label className="form-label">Reviewer 1</label>
                <select className="form-select" value={reviewer1} onChange={e => setReviewer1(e.target.value)}>
                    <option value="">Select Reviewer 1</option>
                    {users.map(user => (
                        <option key={user.value} value={user.value}>{user.label}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Reviewer 2</label>
                <select className="form-select" value={reviewer2} onChange={e => setReviewer2(e.target.value)}>
                    <option value="">Select Reviewer 2</option>
                    {users.map(user => (
                        <option key={user.value} value={user.value}>{user.label}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Final Approver</label>
                <select className="form-select" value={approver} onChange={e => setApprover(e.target.value)}>
                    <option value="">Select Final Approver</option>
                    {users.map(user => (
                        <option key={user.value} value={user.value}>{user.label}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3 text-center">
                <button className="btn btn-primary" onClick={handleSave}>
                    Save
                </button>
            </div>

        </div>
    );
};

export default WorkflowConfig;
