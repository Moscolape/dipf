import { next, prev } from "../constants/assets";
import { useState } from "react";
interface PaginationProps {
  totalItems: number | null;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = totalItems && Math.ceil(totalItems / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextClick = () => {
    if (totalPages && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center font-Inter bg-gray-50 p-3 rounded-lg my-5">
      <span className="text-gray-4 text-h12">
        Showing{" "}
        {totalItems &&
          Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}{" "}
        to {totalItems && Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
        {totalItems} applicants
      </span>
      <div className="flex items-center">
        <img
          src={prev}
          alt="prev"
          className="p-3 bg-gray rounded-full mr-2 cursor-pointer"
          title="Previous"
          onClick={handlePrevClick}
        />
        {currentPage > 1 && (
          <span
            className="w-10 h-10 rounded-full mr-2 justify-center flex items-center"
            onClick={() => onPageChange(currentPage - 1)}
          >
            {currentPage - 1}
          </span>
        )}
        <span className="w-10 h-10 rounded-full bg-[#b58825] text-white mr-2 justify-center flex items-center">
          {currentPage}
        </span>
        {totalPages && currentPage < totalPages && (
          <span
            className="w-10 h-10 rounded-full mr-2 justify-center flex items-center"
            onClick={() => onPageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </span>
        )}
        <img
          src={next}
          alt="next"
          className="p-3 bg-gray rounded-full ml-2 cursor-pointer"
          title="Next"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Pagination;