import "./pagination.css";

const Pagination = ({
  articlesPerPage,
  totalArticles,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className="page-link"
              style={
                currentPage === number
                  ? {
                      backgroundColor: "green",
                      color: "white",
                      padding: "0 6px",
                      borderRadius: "10px",
                    }
                  : {}
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
