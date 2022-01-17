import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import GifGalleryItem from "./GifGalleryItem";

const GifGallery = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInUp">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {gifs.map((img) => (
          <GifGalleryItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGallery;
