import Container from "../Shared/Container";

const Pagination = ({ pageNumbers, currentPage, paginate }) => {
  return (
    <>
      <div>
        <ul className="flex justify-center gap-1 mt-8 overflow-x-auto">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`px-2 py-1 cursor-pointer ${
                currentPage === number
                  ? "bg-gray-600 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
