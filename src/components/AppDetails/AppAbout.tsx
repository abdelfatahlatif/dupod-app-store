import React from 'react';
import { AppModel } from '../../types/App';

interface Props {
  app: AppModel;
}

const AppAbout: React.FC<Props> = ({ app }) => {
  return (
    <div className="mb-4" title={app.id.toString()}>
      <h4>About This App</h4>
      <ul>
        <li>Enhance the tool’s functionality by allowing the structural team to configure and manage framing systems more efficiently.</li>
        <li>Ensure compatibility across multiple versions of Revit (2024 and up).</li>
        <li>Increase collaboration and usability by creating a centralized repository for configurations, accessible via cloud storage.</li>
        <li>Provide flexibility for structural designers to define custom configurations and share them easily with team members.</li>
        <li>Support incremental development through clear user stories, acceptance criteria, and iterative releases.</li>
      </ul>
    </div>
  );
};

export default AppAbout;
