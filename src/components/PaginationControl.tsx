import { FC } from 'react';

interface PaginationControlProps {
  total: number;
  page: number;
  perPage: number;
  onPageChange: (page: number) => void;
}

const PaginationControl: FC<PaginationControlProps> = ({
  total,
  page,
  perPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="pagination">
      <button
        className="btn btn-outline-primary"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button
        className="btn btn-outline-primary"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControl;
