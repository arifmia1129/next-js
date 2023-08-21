import Image from "next/image";
import React from "react";
import logo from "../assets/images/next-js-logo.png";

const Album = () => {
  return (
    <div>
      <h1>This image display with img tag</h1>
      <img
        src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png"
        alt=""
      />

      <h1>This image display with Image component</h1>
      <Image
        src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png"
        width={500}
        height={500}
        layout="responsive"
        alt="logo"
      />

      <h1>This local image display with Image component</h1>
      <Image
        src={logo}
        width={500}
        height={500}
        layout="responsive"
        alt="logo"
      />
    </div>
  );
};

export default Album;
