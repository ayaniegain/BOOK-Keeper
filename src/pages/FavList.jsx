import React from "react";
import { useSelector } from "react-redux";
import BooksContainer from "../components/BooksContainer";
import BackButton from "../components/BackButton";

function FavList() {
  const { favbooks, loading } = useSelector((state) => state.book);

  let customTitle = "Favourite books List";
  let showFav=true

  return (
    <div>
       <div className="absolute top-20 left-10">
       <BackButton/>
      </div>
      <BooksContainer
        booksList={favbooks}
        loading={loading}
        showFav={showFav}
        customTitle={customTitle}
      />
    </div>
  );
}

export default FavList;
