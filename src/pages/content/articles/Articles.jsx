import React from "react";
import Heading from "../heading/Heading";
import Slider from "react-slick";
import data from "./articlesdata.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./articles.css";

const Articles = () => {
  const category = "Статья";
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
        <Heading title={"Статьи"} />
        <Slider {...settings}>
          {data.map((val, index) => {
            return (
              <div className="article" key={index}>
                <div className="box shadow">
                  <div className="images row">
                    <div className="img">
                      <img
                        src={`https://tengrinews.kz${val.image_src}`}
                        alt="img"
                      />
                    </div>
                    <div className="category category1">
                      <span>{category}</span>
                    </div>
                    <div className="text row">
                      <h1 className="title">{val.description}</h1>
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
