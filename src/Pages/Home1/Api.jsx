import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
  let limit = 30;
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
        );
        setPageData({
          limit: data.limit,
          total: data.total,
          skip: data.skip,
          totalPages: Math.round(data.total / data.limit),
        });
        setData(data.posts);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    }
    getData();
  }, [skip]);

  function changePage(pageNum) {
    setCurrentPage(pageNum);
    setSkip((pageNum - 1) * limit);
  }

  function goToPreviousPage() {
    if (currentPage > 1 ) {
      changePage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage < pageData.totalPages) {
      changePage(currentPage + 1);
    }
  }

  return (
    <div className="min-h-screen text-white bg-slate-950">
      <div className="fixed h-20 w-full z-10 backdrop-blur-2xl text-white shadow-lg flex items-center justify-between px-4">
        <h1 className="text-xl font-bold">Posts</h1>
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex text-white cursor-pointer">
            {new Array(pageData.totalPages).fill(0).map((_, idx) => (
              <div
                key={idx}
                className={`p-2 mx-1 w-10 text-center rounded-md ${
                  currentPage === idx + 1
                    ? 'bg-blue-600 font-bold'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
                onClick={() => changePage(idx + 1)}
              >
                {idx + 1}
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === pageData.totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === pageData.totalPages
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {loading ? (
        <div className="h-screen bg-black text-white text-4xl flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 py-20 px-4 justify-center">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="card p-8 flex flex-col w-full lg:w-[350px] h-fit rounded-2xl gap-5 shadow-sm backdrop-blur-md bg-slate-800/50"
            >
              <h1 className="text-2xl">{item.title}</h1>
              <p className="text-sm">{item.body}</p>
              <div className="flex gap-4">
                {item.tags.map((tag, id) => (
                  <span
                    key={id}
                    className="px-4 py-2 bg-slate-950 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Api;


 