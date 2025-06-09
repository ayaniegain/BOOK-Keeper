import React, { useState } from "react";
import { fetchBookData } from "../Redux/book.slice";
import { useDispatch } from "react-redux";

function InputForm() {

  let dispatch=useDispatch()
  let initial = {
    title: "",
    author: "",
    subject: "",
  };

  let [myinput, setMyInput] = useState(initial);
  let [error, setErrror] = useState("");

  function submitQuery(e) {
    e.preventDefault();

    if (myinput.title || myinput.author || myinput.subject) {
      let queryParts = [];

      if (myinput.title) queryParts.push(`intitle:${encodeURIComponent(myinput.title)}`);
      if (myinput.author) queryParts.push(`inauthor:${encodeURIComponent(myinput.author)}`);
      if (myinput.subject) queryParts.push(`insubject:${encodeURIComponent(myinput.subject)}`);
      let searchString = queryParts.length > 0 ? queryParts.join("+") : encodeURIComponent(myinput.title);

      

      dispatch(fetchBookData(searchString))

      setErrror("");
    } else {
      setErrror("At least one search input is required");
    }

    setMyInput(initial);
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setMyInput({ ...myinput, [name]: value });
  }

  return (
    <form
      onSubmit={submitQuery}
      className="w-full max-w-xl flex flex-col gap-4 items-center"
      aria-label="Book search form"
    >
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <input
          name="title"
          value={myinput.title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          aria-label="Book title"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black placeholder-gray-400"
        />
        <input
          name="author"
          type="text"
          value={myinput.author}
          onChange={handleChange}
          placeholder="Author"
          aria-label="Book author"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black placeholder-gray-400"
        />
        <input
          type="text"
          name="subject"
          value={myinput.subject}
          onChange={handleChange}
          placeholder="Subject"
          aria-label="Book subject"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black placeholder-gray-400"
        />
      </div>
      {error && error ? (
        <div className="bg-white" role="alert" aria-live="assertive">
          <p className="text-red-700 font-bold">⚠️{error}</p>
        </div>
      ) : (
        ""
      )}

      <button
        type="submit"
        className="bg-fuchsia-600 cursor-pointer text-white rounded px-30  py-2 text-sm font-semibold hover:bg-fuchsia-800 transition self-center"
        aria-label="Search for books"
      >
        SEARCH
      </button>
    </form>
  );
}

export default InputForm;
