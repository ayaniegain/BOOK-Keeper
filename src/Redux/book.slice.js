import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../API/book.api.js";

export const fetchBookData = createAsyncThunk(
  "book/fetchbooks",
  async (query, thunkAPI) => {
    try {
      let response = await fetchBooks(query);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  }
);

const initialState = {
  booksList: [],
  favbooks: [],
  searchQuery: null,
  loading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    createFavbooksList: (state, action) => {
      if (state.favbooks.find((item) => item.id == action.payload.id)) {
        return;
      }

      state.favbooks = [...state.favbooks, action.payload];
    },
    removeFavbooksList: (state, action) => {

      state.favbooks = state.favbooks.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookData.fulfilled, (state, action) => {
        state.booksList = action.payload;
        state.loading = false;
      })
      .addCase(fetchBookData.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload.errorMessage;
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const { createFavbooksList, removeFavbooksList } = bookSlice.actions;

export default bookSlice.reducer;
