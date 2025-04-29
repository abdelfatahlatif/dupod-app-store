import { Card } from 'primereact/card';
import { AppModel } from '../types/App';

interface Props {
    apps: AppModel[];
    onAppSelect: (app: AppModel) => void;
}

const ApplicationsCards = ({ apps, onAppSelect }: Props) => {
    return (
        <div className="row">
            {apps.map((app) => (
                <div className="col-md-4 mb-3" key={app.id}>
                    <Card
                        className="shadow-sm"
                        onClick={() => onAppSelect(app)}
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
