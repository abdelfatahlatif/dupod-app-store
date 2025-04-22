interface Props {
    value: string;
    onChange: (val: string) => void;
  }
  
  const SearchBar = ({ value, onChange }: Props) => (
    <input className="form-control mb-3" placeholder="Search..." value={value} onChange={(e) => onChange(e.target.value)} />
  );
  
  export default SearchBar;
  