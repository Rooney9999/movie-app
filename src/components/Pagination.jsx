const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      {/* Previous Button */}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300 focus:outline-none disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={page === 1}
      >
        Previous
      </button>

      {/* Page Number */}
      <span className="text-2xl font-semibold text-white">{page}</span>

      {/* Next Button */}
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-red-600 rounded-full shadow-md hover:from-pink-600 hover:to-red-700 transition duration-300 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
