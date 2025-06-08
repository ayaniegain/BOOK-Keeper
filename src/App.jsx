import "./App.css";
import { Route, Routes } from "react-router";
import NoPageFound from "./pages/NoPageFound";

import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const BookDetails = lazy(() => import("./pages/BookDetails"));
const FavList = lazy(() => import("./pages/FavList"));

function App() {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<div className="text center text-gray-700 text-2xl" >Page Loading...........</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favourite" element={<FavList />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
