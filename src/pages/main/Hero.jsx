import React, { useEffect, useState } from "react";
import "./hero.css";
import data from "../../data.js";
import Card from "./Card.jsx";
import Articles from "../content/articles/Articles.jsx";
import axios from "axios";

const Hero = () => {
  const [items, setItems] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/api/article/?format=json";

  useEffect(() => {
    const response = axios.get(baseUrl).then((response) => {
      if (Array.isArray(response.data)) {
        setItems(response.data.slice(10, 14));
        console.log(response.data);
      } else {
        console.error("Ожидался массив, получено:", response.data);
      }
    });
  }, [setItems]);

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
