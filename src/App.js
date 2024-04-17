import React from "react";
import "./App.css";
import Header from "./pages/header/Header";
import Hero from "./pages/main/Hero";
import { Routes, Route } from "react-router-dom";
import Articles from "./pages/content/articles/Articles";
import Side from "./pages/sideMenu/Side";
import Footer from "./pages/footer/Footer";
import AdditionArticles from "./pages/additionPages/AdditionArticles";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <Hero />
              <div className="menu">
                <Articles />
                <Side />
              </div>
            </div>
          }
        />
        <Route path="/article" element={<AdditionArticles />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
