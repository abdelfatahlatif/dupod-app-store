import { FC } from 'react';

interface FilterPanelProps {
  type: string;
  discipline: string;
  version: string;
  onTypeChange: (value: string) => void;
  onDisciplineChange: (value: string) => void;
  onVersionChange: (value: string) => void;
}

const FilterPanel: FC<FilterPanelProps> = ({
  type,
  discipline,
  version,
  onTypeChange,
  onDisciplineChange,
  onVersionChange,
}) => {
  const types = ['Tool', 'Utility', 'Type 3']; // Add actual options
  const disciplines = ['Discipline 1', 'Discipline 2'];
  const versions = ['2019', '2023'];

  return (
    <div className="mb-3">
      <select
        className="form-select mb-2"
        value={type}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <select
        className="form-select mb-2"
        value={discipline}
        onChange={(e) => onDisciplineChange(e.target.value)}
      >
        <option value="">All Disciplines</option>
        {disciplines.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <select
        className="form-select mb-2"
        value={version}
        onChange={(e) => onVersionChange(e.target.value)}
      >
        <option value="">All Versions</option>
        {versions.map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterPanel;
