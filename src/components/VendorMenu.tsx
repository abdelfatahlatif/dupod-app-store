interface Props {
  vendors: string[];
  selectedVendor: string;
  onSelect: (vendor: string) => void;
}

const VendorMenu = ({ vendors, selectedVendor, onSelect }: Props) => (
  <ul className="list-group">
    <li
      className={`list-group-item ${selectedVendor === '' ? 'active' : ''}`}
      onClick={() => onSelect('')}
      style={{ cursor: 'pointer' }}
    >
      All Vendors
    </li>
    {vendors.map((v) => (
      <li
        key={v}
        className={`list-group-item ${selectedVendor === v ? 'active' : ''}`}
        onClick={() => onSelect(v)}
        style={{ cursor: 'pointer' }}
      >
        {v}
      </li>
    ))}
  </ul>
);

export default VendorMenu;
