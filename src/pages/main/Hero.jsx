import React, { useState } from "react";
import "./hero.css";
import data from "../../data.js";
import Card from "./Card.jsx";
import Articles from "../content/articles/Articles.jsx";

const Hero = () => {
  const [items, seItems] = useState(data);
  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((article, index) => {
            return (
              <Card
                key={index}
                title={article.title}
                image_src={article.image_src}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
