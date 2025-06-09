import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { createFavbooksList, fetchBookData } from "../Redux/book.slice";
import BackButton from "../components/BackButton";

function BookDetails() {
  const [bookDetails, setBookDetails] = useState(null);
  const { booksList } = useSelector((state) => state.book);
  const [showForm, setShowForm] = useState(false);
  const [textArea, setTextArea] = useState("");

  const { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (!booksList.length) {
      dispatch(fetchBookData());
    }
  }, [booksList.length, dispatch]);

  useMemo(() => {
    setBookDetails(booksList.find((item) => item.id == id));
  }, [booksList, id]);

  if (!bookDetails) {
    return (
      <h2 className="text-center text-lg font-semibold mt-8">
        Books data Loading...
      </h2>
    );
  }

  const handleMouseEnter = () => {
    setShowForm(true);
  };

  const handleMouseLeave = () => {
    setShowForm(false);
  };

  const {
    accessInfo: { country },
    volumeInfo: {
      description = "",
      subtitle,
      pageCount,
      publishedDate,
      publisher,
      authors = [],
      categories = [],
      imageLinks,
      title,
    },
  } = bookDetails;

  const shortDescription =
    description.split(" ").slice(0, 300).join(" ") +
    (description.split(" ").length > 300 ? "..." : "");

  function handleChange(e) {
    setTextArea(e.target.value);
  }

  function handleAddFav() {
    let updatedBookDetailswithNote = { ...bookDetails, note: textArea };

    dispatch(createFavbooksList(updatedBookDetailswithNote));

    navigate("/favourite");
  }

  return (
    <div className="w-full min-h-screen px-0 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>
        <h2 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 drop-shadow-lg">
          Book Details
        </h2>
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border-4 border-gray-700">
          {/* Image Section */}
          <div className="w-full md:w-1/3 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex items-center justify-center p-10">
            <img
              src={
                imageLinks?.thumbnail ||
                imageLinks?.smallThumbnail ||
                "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
              }
              alt={title}
              className="w-56 h-80 object-cover rounded-2xl shadow-2xl border-4 border-purple-900 transition-transform duration-300 hover:scale-105 bg-gray-700"
            />
          </div>

          <div className="w-full md:w-2/3 p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Title and ID on the left */}
                <div>
                  <h1 className="text-3xl font-bold text-purple-300 mb-1 drop-shadow">
                    {title}
                  </h1>
                  <span className="text-sm text-gray-400">ID: {id}</span>
                  {subtitle && (
                    <h2 className="text-lg text-pink-400 mt-2 italic">
                      {subtitle}
                    </h2>
                  )}
                </div>
                {/* Add to Favourite Button on the right */}
                <div className="relative">
                  <button
                    onMouseEnter={handleMouseEnter}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md shadow-md font-semibold text-base transition-transform duration-200 hover:scale-105"
                    aria-label="Add this book to favourites"
                  >
                    Add to Favourite
                  </button>
                  {showForm && (
                    <div className="absolute right-0 mt-2 w-72 bg-gray-900 border border-purple-700 rounded-xl shadow-xl p-5 z-20">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAddFav();
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        <label className="block text-gray-200 mb-2 text-sm font-medium">
                          Message
                          <textarea
                            value={textArea}
                            onChange={handleChange}
                            placeholder="Add a note..."
                            rows={3}
                            className="w-full mt-1 mb-3 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                            aria-label="Add a note about this book"
                          />
                        </label>
                        <button
                          type="submit"
                          className="w-full bg-purple-600 hover:bg-pink-500 text-white font-semibold py-2 rounded-md transition-colors"
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="bg-gradient-to-r from-purple-800 via-pink-800 to-yellow-700 text-yellow-200 px-3 py-1 rounded-full text-xs font-bold shadow"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="mb-4">
                <p className="text-base text-gray-300">
                  <span className="font-semibold">Authors:</span>{" "}
                  {authors.join(", ") || "Unknown"}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-base">
                <div>
                  <span className="font-semibold text-purple-300">
                    Publisher:
                  </span>{" "}
                  <span className="text-gray-200">
                    {publisher || "Unknown"}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-purple-300">
                    Published:
                  </span>{" "}
                  <span className="text-gray-200">
                    {publishedDate || "Unknown"}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-purple-300">Pages:</span>{" "}
                  <span className="text-gray-200">{pageCount || "N/A"}</span>
                </div>
                <div>
                  <span className="font-semibold text-purple-300">
                    Country:
                  </span>{" "}
                  <span className="text-gray-200">{country || "N/A"}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-purple-300 mb-2 text-lg">
                  Description:
                </h3>
                <p className="text-base text-gray-200 whitespace-pre-line leading-relaxed bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-4 rounded-xl shadow-inner">
                  {shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
