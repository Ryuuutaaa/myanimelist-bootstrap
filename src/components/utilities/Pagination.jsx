const PaginationBottom = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <div className="text-white d-flex justify-content-center align-items-center py-4 px-2 gap-4 fs-5">
      {page <= 1 ? null : (
        <button
          className="btn btn-primary"
          aria-label="Previous"
          onClick={handlePrevPage}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          className="btn btn-primary"
          aria-label="Next"
          onClick={handleNextPage}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      )}
    </div>
  );
};

export default PaginationBottom;
