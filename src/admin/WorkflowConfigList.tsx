import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { workflowRules, WorkflowRule } from '../services/workflowData';
import { InputText } from 'primereact/inputtext';

const WorkflowConfigList: React.FC = () => {
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const navigate = useNavigate();

    return (
        <div className="mb-3">
            <h5>Workflow Config List</h5>
            <div className="mb-3">
                <span className="p-input-icon-left w-100">
                    {/* <i className="pi pi-search" /> */}
                    <InputText
                        type="search"
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder="Search rules..."
                        className="form-control"
                    />
                </span>
            </div>

            <DataTable
                value={workflowRules}
                paginator
                rows={6}
                globalFilter={globalFilter}
                emptyMessage="No rules found."
                responsiveLayout="scroll"
                className="p-datatable-striped p-datatable-gridlines custom-table-bg"
                selectionMode="single"
                onRowClick={(e) => navigate(`/admin/workflow/edit/${(e.data as WorkflowRule).id}`)}
            >
                <Column field="vendor" header="Vendor" sortable />
                <Column field="applications" header="Application" sortable />
                <Column field="type" header="Type" sortable />
                <Column field="discipline" header="Discipline" sortable />
                <Column field="reviewer1" header="Reviewer1" />
                <Column field="reviewer2" header="Reviewer2" />
                <Column field="approver" header="Approver" />
            </DataTable>
        </div>
    );
};

export default WorkflowConfigList;
