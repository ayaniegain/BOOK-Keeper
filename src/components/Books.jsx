import React from "react";
import { useNavigate } from "react-router";
import BackButton from "./BackButton";
import { useDispatch } from "react-redux";
import { removeFavbooksList } from "../Redux/book.slice";

function Books({ item, showFav }) {
  let dispatch = useDispatch();
  let {
    id,
    note,
    volumeInfo: { authors = [], categories = [], imageLinks, title },
  } = item;

  const navigate = useNavigate();

  function handleSHowDetailsPage(bookid) {
    navigate(`book/${bookid}`);
  }

  function handleRemoveFav(bookid) {
    dispatch(removeFavbooksList(bookid));
  }

  return (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center w-64 h-[420px] mx-auto"
      role="listitem"
      aria-label={`Book: ${title}`}
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap gap-1 mb-2">
          {categories?.length > 0 ? (
            categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-xs bg-green-200 text-teal-800 rounded-full px-2 py-0.5"
              >
                {cat}
              </span>
            ))
          ) : (
            <span className="text-xs bg-green-200 text-teal-800 rounded-full px-2 py-0.5">
              No Category
            </span>
          )}
        </div>
        <img
          src={
            imageLinks?.thumbnail ??
            "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
          }
          alt={title}
          className="w-32 h-44 object-cover rounded mb-3 shadow-md hover:shadow-xl transition-shadow duration-300"
        />
        <span className="font-semibold text-lg text-center mb-1">
          {title?.length > 20 ? `${title?.slice(0, 20)}...` : title}
        </span>
        <div className="flex flex-col items-center mb-2">
          {authors?.length > 0 ? (
            authors.map((author, idx) => (
              <span key={idx} className="text-sm text-gray-700">
                {author}
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-700">Unknown Author</span>
          )}
        </div>
      </div>
      {showFav && note ? (
        <div className="bg-green-600 text-white font-bold rounded px-2 py-1 my-2">
          Note: {note ?? "Note: No note"}
        </div>
      ) : null}

      {showFav ? (
        <button
          onClick={() => handleRemoveFav(id)}
          className="mt-auto px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-700 transition"
          aria-label={`Remove ${title} from favourites`}
        >
          Remove Favourite
        </button>
      ) : (
        <button
          onClick={() => handleSHowDetailsPage(id)}
          className="mt-auto px-4 py-2 bg-teal-800 text-white rounded hover:bg-blue-700 transition"
          aria-label={`Show details for ${title}`}
        >
          Show Details
        </button>
      )}
    </div>
  );
}

export default Books;
