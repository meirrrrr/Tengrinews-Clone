import React from "react";
import "./heading.css";

const Heading = ({ title }) => {
  return (
    <>
      <div className="heading">
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default Heading;
