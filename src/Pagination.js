import "./style.css";

const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <nav>
      <div className="pagination">
        <div className="page-item">
          <button onClick={goToPreviousPage} className="page-link">
            Previous
          </button>
        </div>
        {/* Optional: Display Current Page (You can also show total pages if needed) */}
        <div className="page-item">
          <div className="page-link">{currentPage}</div>
        </div>
        <div className="page-item">
          <button onClick={goToNextPage} className="page-link">
            Next
          </button>
        </div>
      </div>
    </nav>
  );
};

const DataTable = ({ currentItems }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { DataTable, Pagination };
