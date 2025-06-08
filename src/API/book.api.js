import axios from "axios";

let API_KEY = import.meta.env.VITE_API_KEY;
export async function fetchBooks(query = "javascript") {
  try {
    let result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    );

    if (result.data.items && result.data.items.length > 0) {
      return await result.data.items;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
}
