import React from "react";
import logo from "./logo.svg";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="head__logo flexcn paddingtb">
          <img src={logo} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default Head;
