import Books from "./Books";
import SimmerEffect from "./SimmerEffect";
import { NavLink } from "react-router";

function BooksContainer({ booksList, loading, customTitle, showFav, onRetry }) {
  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-6 pt-10">
        <SimmerEffect />
      </div>
    );
  }

  return (
    <div className="px-4 py-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">
        {customTitle}
      </h1>

      {booksList.length < 1 ? (
        <div className="flex flex-col items-center justify-center gap-4 pt-16">
          <h2 className="text-2xl font-semibold text-orange-700">
            No books found
          </h2>

          {!showFav && (
            <button
              onClick={onRetry}
              className="mt-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
            >
              Retry
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center "
        role="list"
      aria-label="Books list"
        >
          {booksList.map((item) => (
            <Books
              item={item}
              key={item.id}
              showFav={showFav}
              onRetry={onRetry}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BooksContainer;
