import React from "react";

const Pagination = ({ currentPage, numberOfPages, handlePerPage }) => {
  const pageIndex = Array.from({ length: numberOfPages }, (_, idx) => idx + 1);

  return (
    <div className="paginate">
      <button
        disabled={currentPage < 1}
        onClick={() => handlePerPage(currentPage - 1)}
      >
        <img src="/images/Left.svg" alt="left" />
      </button>
      <div className="page-button-container">
        {pageIndex
          .slice(
            Math.max(0, currentPage - 2),
            Math.min(numberOfPages, currentPage + 3)
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePerPage(page - 1)}
              className={page === currentPage + 1 ? "active" : ""}
            >
              {page}
            </button>
          ))}
      </div>
      <button
        disabled={currentPage >= numberOfPages - 1}
        onClick={() => handlePerPage(currentPage + 1)}
      >
        <img src="/images/Right.svg" alt="right" />
      </button>
    </div>
  );
};

export default Pagination;
