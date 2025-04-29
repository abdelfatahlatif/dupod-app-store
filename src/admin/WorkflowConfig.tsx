import React, { useState } from 'react';
import { Card } from 'primereact/card'; // Keeping Card unless you want to replace it too

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
        <div>
            <h5>Workflow Configuration</h5>
            <Card>
                <div className="p-fluid">
                    <div className="mb-3">
                        <label htmlFor="reviewer1" className="form-label">Reviewer 1</label>
                        <select
                            id="reviewer1"
                            className="form-select"
                            value={reviewer1}
                            onChange={(e) => setReviewer1(e.target.value)}
                        >
                            <option value="">Select Reviewer 1</option>
                            {users.map((user) => (
                                <option key={user.value} value={user.value}>
                                    {user.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="reviewer2" className="form-label">Reviewer 2</label>
                        <select
                            id="reviewer2"
                            className="form-select"
                            value={reviewer2}
                            onChange={(e) => setReviewer2(e.target.value)}
                        >
                            <option value="">Select Reviewer 2</option>
                            {users.map((user) => (
                                <option key={user.value} value={user.value}>
                                    {user.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="approver" className="form-label">Final Approver</label>
                        <select
                            id="approver"
                            className="form-select"
                            value={approver}
                            onChange={(e) => setApprover(e.target.value)}
                        >
                            <option value="">Select Final Approver</option>
                            {users.map((user) => (
                                <option key={user.value} value={user.value}>
                                    {user.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default WorkflowConfig;
