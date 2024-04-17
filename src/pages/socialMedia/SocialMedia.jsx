import React from "react";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import youtube from "./icons/youtube.svg";
import "../sideMenu/side.css";

const SocialMedia = () => {
  return (
    <>
      <section className="social">
        <div className="social-box">
          <img src={facebook} alt="facebook-logo" width="20px" />
          <span>12,740 Likes</span>
        </div>
        <div className="social-box">
          <img src={instagram} alt="facebook-logo" width="20px" />
          <span>500,123 Likes</span>
        </div>
        <div className="social-box">
          <img src={youtube} alt="facebook-logo" width="20px" />
          <span>230,000 following</span>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
