import { Card } from 'primereact/card';
import { AppModel } from '../types/App';

interface Props {
    apps: AppModel[];
    onAppSelect: (app: AppModel) => void;
}

const ApplicationsCards = ({ apps, onAppSelect }: Props) => {
    // Get distinct apps by `app.applications` name
    const distinctApps = Array.from(
        new Map(apps.map(app => [app.applications, app])).values()
    );

    return (
        <div className="row">
            {distinctApps.map((app) => (
                <div className="col-md-4 mb-3" key={app.applications}>
                    <Card
                        onClick={() => onAppSelect(app)}
                        style={{ cursor: 'pointer', height: '100%' }}
                        header={
                            <div className="app-card-header" style={{ justifyContent: 'center', display: 'flex' }}>
                                <img
                                    src={app.icon}
                                    alt={app.applications}
                                    className="app-icon mt-2"
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
