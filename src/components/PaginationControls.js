import React from 'react';

const PaginationControls = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="mt-8 flex justify-center items-center space-x-4">
      <button
        onClick={onPrevious}
        className={`py-2 px-4 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="font-bold">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={onNext}
        className={`py-2 px-4 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
