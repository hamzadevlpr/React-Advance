import React from 'react';

function Pagination({ items, itemsPerPage, currentPage, onPageChange }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(items.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex justify-center m-10 sticky bottom-10">
        <div className="join">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item list-none m-2">
              <button
                onClick={() => onPageChange(number)}
                className={`${currentPage === number ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                  } px-2 py-1  rounded focus:outline-none`}
              >
                {number}
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pagination;
