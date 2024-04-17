import React from "react";
import Heading from "../content/heading/Heading";
import SocialMedia from "../socialMedia/SocialMedia";

const Side = () => {
  return (
    <section className="social-media">
      <div className="social-meida__title">
        <h3>Социальные сети</h3>
      </div>
      <SocialMedia />
    </section>
  );
};

export default Side;
