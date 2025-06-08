import React from "react";
import InputForm from "./InputForm";
import cover from "../../public/cover.jpg";

function SearchField() {
  return (
    <div className="relative w-full  flex items-center justify-center">
      <img
        src={cover}
        alt="cover"
        className="absolute inset-0 w-full h-full object-cover "
      />

      <div className="relative flex flex-col justify-center items-center w-11/12 sm:w-3/4 md:w-1/2 z-10  bg-opacity-80 rounded p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl text-center font-semibold mb-2 text-white">
          Find your next Book to read 📙
        </h2>
        <div>
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default SearchField;
