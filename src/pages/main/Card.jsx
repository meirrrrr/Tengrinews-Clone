import React from "react";

const Card = ({ title, image_src, description }) => {
  const category = "Kazakhstan news";
  return (
    <>
      <div className="box">
        <div className="box__img">
          <img src={`https://tengrinews.kz${image_src}`} alt="img" />
        </div>
        <div className="box__text">
          <span className="box__text-category">{category}</span>
          <h1 className="titleBg">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
