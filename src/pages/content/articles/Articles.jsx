import React, { useEffect, useState } from "react";
import Heading from "../heading/Heading";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/api/article/?format=json";

  useEffect(() => {
    const response = axios.get(baseUrl).then((response) => {
      if (Array.isArray(response.data)) {
        setArticles(response.data.slice(0, 20));
        console.log(response.data);
      } else {
        console.error("Ожидался массив, получено:", response.data);
      }
    });
  }, [setArticles]);

  const category = "Новости";
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    dots: true,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="articles">
        <Heading title={"Новости"} />
        <Slider {...settings}>
          {articles.map((item, index) => {
            return (
              <div className="article" key={index}>
                <div className="box shadow">
                  <div className="images row">
                    <div className="img">
                      <img
                        src={`https://tengrinews.kz${item.image_src}`}
                        alt="img"
                      />
                    </div>
                    <div className="category category1">
                      <span>{category}</span>
                    </div>
                    <div className="text row">
                      <h1 className="title">{item.description}</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Articles;
