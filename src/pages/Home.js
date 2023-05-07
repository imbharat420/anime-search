import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import useDebounce from "../hooks/useDebounce";
import NotFound from "../components/NotFound";
import Pagination from "../components/Pagination";
import Skeleton from "../components/Skeleton";
export const getAnimes = (pageNumber, pageLimit, searchString) => ({
  type: "GET_ANIMES",
  payload: { pageNumber, pageLimit, searchString },
});

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { animes, isLoading, error } = useSelector((state) => state.animes);
  const pagination = useSelector((state) => state.animes.pagination);

  const [debouncedSearch, setSearch] = useDebounce("", 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    dispatch(getAnimes(currentPage, 15, debouncedSearch));
  }, [debouncedSearch, currentPage, dispatch]);

  const handleNextPage = () => {
    if (pagination.has_next_page) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const exist =
    animes.length > 0 &&
    pagination &&
    pagination?.items?.count < pagination?.items?.total;

  return (
    <div className="m-2">
      <div className="bg-gradient-to-r h-64 from-purple-500 to-pink-500  flex justify-between items-center py-5 px-10 rounded-b-lg">
        <div className="flex items-center sm:p-10 flex-col w-full bg-gray-100 bg-opacity-20 rounded p-2">
          <h1 className="lg:text-5xl text-3xl text-white font-bold text-center">
            Search Anime characters
          </h1>
          <div className="md:flex w-full">
            <div className="w-full p-3">
              <div className="relative">
                <AiOutlineSearch
                  fontSize="1.6rem"
                  className="absolute text-gray-400 top-4 left-3 "
                />
                <input
                  type="text"
                  className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none"
                  name=""
                  onInput={handleChange}
                />
                <span className="absolute top-4 right-5 border-l pl-4">
                  <BsMicFill
                    fontSize="1.2rem"
                    className="text-gray-500 hover:text-green-500 cursor-not-allowed"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="from-red-300 w-full to-yellow-200  py-20">
        <div className="">
          {isLoading ? (
            <>
              <Skeleton nicknames={8} />
              <Skeleton nicknames={3} />
              <Skeleton nicknames={3} />
              <Skeleton />
            </>
          ) : error ? (
            <div className="text-3xl font-bold text-center">{error}</div>
          ) : animes && animes.length > 0 ? (
            animes.map((anime, index) => <List character={anime} key={index} />)
          ) : (
            <NotFound />
          )}
        </div>
      </div>

      {exist && (
        <>
          <Pagination
            pagination={pagination}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
