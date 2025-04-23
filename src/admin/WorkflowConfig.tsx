import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';

interface UserOption {
    label: string;
    value: string;
}

const users: UserOption[] = [
    { label: 'Alice', value: 'alice' },
    { label: 'Bob', value: 'bob' },
    { label: 'Charlie', value: 'charlie' }
];

const WorkflowConfig: React.FC = () => {
    const [reviewer1, setReviewer1] = useState<string>('');
    const [reviewer2, setReviewer2] = useState<string>('');
    const [approver, setApprover] = useState<string>('');

    return (
        <div className="container mt-4">
            <h3>Workflow Configuration</h3>           
            <Card>
                <div className="p-fluid">
                    <div className="field mb-3">
                        <label>Reviewer 1</label>
                        <Dropdown value={reviewer1} options={users} onChange={(e) => setReviewer1(e.value)} placeholder="Select Reviewer 1" />
                    </div>
                    <div className="field mb-3">
                        <label>Reviewer 2</label>
                        <Dropdown value={reviewer2} options={users} onChange={(e) => setReviewer2(e.value)} placeholder="Select Reviewer 2" />
                    </div>
                    <div className="field">
                        <label>Final Approver</label>
                        <Dropdown value={approver} options={users} onChange={(e) => setApprover(e.value)} placeholder="Select Final Approver" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default WorkflowConfig;
