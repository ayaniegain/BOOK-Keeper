import { useEffect, useState } from "react";
import BooksContainer from "../components/BooksContainer";
import SearchField from "../components/SearchField";
import { fetchBookData } from "../Redux/book.slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Home() {
  let dispatch = useDispatch();

  function onRetry() {
    dispatch(fetchBookData());
  }

  useEffect(() => {
    onRetry();
  }, [dispatch]);

  const { booksList, loading } = useSelector((state) => state.book);

  let customTitle = "Popular Book Lists";

  let showFav = false;

  return (
    <div>
      <SearchField />
      <BooksContainer
        booksList={booksList}
        loading={loading}
        showFav={showFav}
        customTitle={customTitle}
        onRetry={onRetry}
      />
    </div>
  );
}

export default Home;
