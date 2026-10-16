import React from "react";

const Hero = ({
  height = "h-[50vh] 3xs:min-h-screen lg:min-h-[400px]",
  bgImage = "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
  title = "demo title",
  paragraph =`lorem ipsmu lshhgtf jkap oj ahkan herr
  hannn jhfdy re totn nshk s ha ll`,
  button = true,

}) => {
  return (
    <div
      className={`hero ${height} rounded-2xl overflow-hidden shadow-2xl`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">
          {paragraph}
          </p>
          {button && <button className="btn btn-primary">Get Started</button>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
