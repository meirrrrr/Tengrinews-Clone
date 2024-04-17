import React from "react";
import "./App.css";
import Header from "./pages/header/Header";
import Hero from "./pages/main/Hero";
import { Routes, Route } from "react-router-dom";
import Articles from "./pages/content/articles/Articles";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/main"
          element={
            <div>
              <Hero />
              <Articles />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
