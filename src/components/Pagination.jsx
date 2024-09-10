// import React from 'react'

const Pagination = ({ page, totalPages, setPage }) => {
  const selectPageHandler = (i) => {
    if (i >= 1 && i <= totalPages && i !== page) {
      setPage(i);
    }
  };
  return (
    <div className="pagination w-full py-5 flex justify-center items-center">
      <span
        className={page > 1 ? "cursor-pointer" : "opacity-0"}
        onClick={() => selectPageHandler(page - 1)}
      >
        ◀️
      </span>
      {[...Array(totalPages)].map((_, i) => {
        return (
          <span
            key={i}
            className={`cursor-pointer ${
              page === i + 1 ? "underline font-bold scale-125 bg-slate-200" : ""
            }`}
            onClick={() => selectPageHandler(i + 1)}
          >
            {i + 1}
          </span>
        );
      })}
      <span
        className={page < totalPages ? "cursor-pointer" : "opacity-0"}
        onClick={() => selectPageHandler(page + 1)}
      >
        ▶️
      </span>
    </div>
  );
};

export default Pagination;
