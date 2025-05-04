import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { workflowRules, WorkflowRule, UserOption, users } from '../services/workflowData';

const WorkflowConfigEdit: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [rule, setRule] = useState<WorkflowRule | null>(null);

    useEffect(() => {
        if (id) {
            const ruleData = workflowRules.find(r => r.id === parseInt(id));
            setRule(ruleData ?? null);
        }
    }, [id]);

    const handleChange = (field: keyof WorkflowRule, value: string) => {
        if (rule) {
            setRule({ ...rule, [field]: value });
        }
    };

    const handleSave = () => {
        console.log('Updated rule:', rule);
        navigate('/admin/workflow'); // Back to listing
    };

    return (
        <div>
            <h5>Edit Workflow Rule</h5>
            {rule ? (
                <form>
                    <div className="mb-3">
                        <label className="form-label">Vendor</label>
                        <input type="text" className="form-control" value={rule.vendor} disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Application</label>
                        <input type="text" className="form-control" value={rule.applications} disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Type</label>
                        <input type="text" className="form-control" value={rule.type} disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Discipline</label>
                        <input type="text" className="form-control" value={rule.discipline} disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Reviewer 1</label>
                        <select
                            className="form-select"
                            value={rule.reviewer1}
                            onChange={(e) => handleChange('reviewer1', e.target.value)}
                        >
                            <option value="">Select Reviewer 1</option>
                            {users.map((user: UserOption) => (
                                <option key={user.value} value={user.value}>
                                    {user.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Reviewer 2</label>
                        <select
                            className="form-select"
                            value={rule.reviewer2}
                            onChange={(e) => handleChange('reviewer2', e.target.value)}
                        >
                            <option value="">Select Reviewer 2</option>
                            {users.map((user: UserOption) => (
                                <option key={user.value} value={user.value}>
                                    {user.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Approver</label>
                        <select
                            className="form-select"
                            value={rule.approver}
                            onChange={(e) => handleChange('approver', e.target.value)}
                        >
                            <option value="">Select Approver</option>
                            {users.map((user: UserOption) => (
                                <option key={user.value} value={user.value}>
                                    {user.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3 text-center">
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </form>
            ) : (
                <p>Loading rule data...</p>
            )}
        </div>
    );
};

export default WorkflowConfigEdit;
