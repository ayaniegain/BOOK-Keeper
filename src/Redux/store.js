import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from "./book.slice.js";
export const store = configureStore({
  reducer: {
    book: bookSliceReducer,
  },
});
