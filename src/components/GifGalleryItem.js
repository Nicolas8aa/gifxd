import React from "react";

const GifGalleryItem = ({ url, title }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGalleryItem;
