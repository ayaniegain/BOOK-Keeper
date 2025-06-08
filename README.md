# 📚 Book Explorer

A React app to search, view, and favorite books using the Google Books API.

---

## 🚀 Features

- Search books by **title**, **author**, or **genre**
- View book details (cover, description, authors)
- Add/remove favorites
- Routing: Search, Book Details, Favorites
- Google Books API integration
- Unit tests with Jest & React Testing Library

---

## 📦 Tech Stack

- React (Hooks, functional components)
- React Router DOM
- Context API or Redux for global state
- Google Books API
- Jest & React Testing Library
- TailwindCSS or CSS Modules (optional)

---

## 🛠️ Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/book-explorer.git
    cd book-explorer
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Get a Google Books API key**
    - Visit [Google Cloud Console](https://console.cloud.google.com/)
    - Go to APIs & Services > Credentials
    - Click "Create Credentials" > "API Key"
    - Copy your key

4. **Add API key to `.env`**
    ```
    REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key_here
    ```

5. **Run the app**
    ```bash
    npm start
    ```

6. **Run tests**
    ```bash
    npm test
    ```

---

## 🌐 API Usage

- Base URL:  
  `https://www.googleapis.com/books/v1/volumes?q={searchQuery}&key=YOUR_API_KEY`
- Example queries:  
  - By title: `?q=intitle:react`
  - By author: `?q=inauthor:john`
  - Combined: `?q=intitle:react+inauthor:john`

---

## 📁 Folder Structure

```
src/
├── components/    # UI Components
├── pages/         # Route pages
├── context/       # Global state logic
├── api/           # Google Books API logic
├── App.js         # Main routing file
├── index.js       # Entry point
```

---

## 📌 Notes

- React Router for navigation
- Context API or Redux for favorites
- Lazy-loaded Book Details page
- Basic validation for search
- No authentication

---

## 🔒 Environment Variables

| Key                              | Description                    |
| -------------------------------- | ------------------------------ |
| REACT_APP_GOOGLE_BOOKS_API_KEY   | Your Google Books API key      |

---

## 📸 Screenshots

_Add screenshots for search, book detail, and favorites pages here (optional)._

