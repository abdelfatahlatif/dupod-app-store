import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { AppModel } from '../types/App';

interface Props {
    apps: AppModel[];
}

const ApplicationsCards = ({ apps }: Props) => {
    const navigate = useNavigate();

    return (
        <div className="row">
            {apps.map((app) => (
                <div className="col-md-4 mb-3" key={app.id}>
                    <Card
                        className="shadow-sm"
                        onClick={() => navigate(`/addins/${app.applications}`)}
                        style={{ cursor: 'pointer', height: '100%' }}
                        header={
                            <div className="app-card-header" style={{ justifyContent: 'center', display: 'flex' }}>
                                <img
                                    src={app.icon}
                                    alt={app.applications}
                                    className="app-icon"
                                    style={{ width: '80px', height: '80px' }}
                                />
                            </div>
                        }
                    >
                        <div className="text-center font-bold">{app.applications}</div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ApplicationsCards;
