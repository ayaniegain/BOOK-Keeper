# 📚 Books Keeper

Books Keeper is a React application that allows you to search for your favorite books by title, author, or genre. View detailed information about each book, add them to your favorites, and manage your personal reading list with ease.

---

## 🌐 Deploy Link

[bookskeeper.netlify.app](https://bookskeeper.netlify.app/)

---

## 🚀 Features

- **Comprehensive Book Search:** Search for books by title, author, or genre with real-time results powered by the Google Books API.
- **Detailed Book Information:** View book covers, descriptions, authors, and more on the Book Details page, which is optimized with lazy loading for performance.
- **Favorites Management:** Add or remove books from your favorites list, managed via Redux or Context API for seamless state management.
- **Personal Reading List:** Organize and manage your reading list with reusable components for favorites and book lists.
- **Routing and Navigation:** Navigate easily between Search, Book Details, and Favorites pages using React Router (`/`, `/book/:id`, `/favorites`).
- **Form Handling and Validation:** Enjoy a smooth search experience with basic input validation and error handling.
- **Testing and Coverage:** Ensure reliability with unit tests for components and forms using Jest and React Testing Library, including test coverage for search form validation and submission.
- **Performance Optimizations:** Enhanced performance using React hooks like `useMemo` and `useEffect` (see `BookDetails` and `Home` pages).
- **Accessibility:** Designed with accessibility features for an inclusive user experience.
- **Modern Tech Stack:** Built with React (Hooks, functional components), Redux for global state, Redux Thunk for async API calls, TailwindCSS for styling, and Vite for fast bundling.

---

## 📦 Tech Stack

- **React** (Hooks, functional components)
- **React Router DOM** for navigation
- **Redux** for global state management
- **Redux Thunk** for asynchronous API calls
- **Google Books API** for book data
- **Jest** & **React Testing Library** for testing
- **TailwindCSS** for styling
- **Vite** for fast bundling

---

## 🛠️ Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/ayaniegain/booksKeeper.git
    cd booksKeeper
    ```

2. **Add environment variables**

    Create a `.env` file in the root directory and add your API key:
    ```
    VITE_API_KEY="AIzaSyBRQhC7GnrlAbwUVgvJliYGHQ3SpSthCWw"
    ```

3. **Install dependencies**
    ```bash
    npm install
    ```

4. **Run the project**
    ```bash
    npm run dev
    ```

5. **Run tests**
    ```bash
    npm test
    ```

6. **Check code coverage**
    ```bash
    npx vitest run --coverage
    ```

---

## 🌐 API Usage

- **Base URL:**  
  ```
  https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}
  ```
- **Example queries:**  
  - By title: `?q=intitle:react`
  - By author: `?q=inauthor:john`
  - Combined: `?q=intitle:react+inauthor:john`

---

## 📁 Folder Structure

```
src/
├── API/
├── assets/
├── components/
├── pages/
├── Redux/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── setupTests.js
.env
.gitignore
```
