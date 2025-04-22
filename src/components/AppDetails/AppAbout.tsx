import React from 'react';
import { AppModel } from '../../types/App';

interface Props {
  app: AppModel;
}

const AppAbout: React.FC<Props> = ({ app }) => {
  return (
    <div className="mb-4">
      <h4>About This App</h4>
      <ul>
        <li>Feature 1: Lorem ipsum dolor sit amet. {app.description}</li>
        <li>Feature 2: Consectetur adipiscing elit.</li>
        <li>Feature 3: Integer molestie lorem at massa.</li>
        <li>Feature 4: Facilisis in pretium nisl aliquet.</li>
      </ul>
    </div>
  );
};

export default AppAbout;
