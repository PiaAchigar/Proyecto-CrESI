import React from "react";

import "./Iframe.scss";

const YoutubeIframe = ({ src }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeIframe;
