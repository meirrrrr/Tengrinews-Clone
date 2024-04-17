import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="head__logo flexcn paddingtb">
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default Head;
