import { VdDoubleCaretLeft, VdDoubleCaretRight } from "./Icons";
import "./Pagination.css";

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
const pageNumbers = arrayRange(1, 10, 1);
const currentPage = 3;

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page-nav">
        <div className="first-page">
          <VdDoubleCaretLeft /> First
        </div>
        <div className="number-page">
          {pageNumbers.map((pageNumber) => (
            <div
              className={`${
                currentPage === pageNumber && "active-page"
              } page-number place-items-center`}
            >
              {pageNumber}
            </div>
          ))}
        </div>
        <div className="last-page">
          Last <VdDoubleCaretRight />
        </div>
      </div>
      <div className="page-visual">
        PAGE {currentPage} of {pageNumbers.length}
      </div>
    </div>
  );
};

export default Pagination;
