import { Dialog } from 'primereact/dialog';
import { AppModel } from '../types/App';

interface Props {
  app?: AppModel;
  visible: boolean;
  onHide: () => void;
}

const AppDetailsModal = ({ app, visible, onHide }: Props) => {
  if (!app) return null;

  return (
    <Dialog header={app.name} visible={visible} style={{ width: '450px' }} onHide={onHide} modal>
      <div>
        <p><strong>Description:</strong> {app.description}</p>
        <p><strong>Vendor:</strong> {app.vendor}</p>
        <p><strong>Type:</strong> {app.type}</p>
        <p><strong>Discipline:</strong> {app.discipline}</p>
        <p><strong>Version:</strong> {app.version}</p>
        <p><strong>Category:</strong> {app.category}</p>
      </div>
    </Dialog>
  );
};

export default AppDetailsModal;
