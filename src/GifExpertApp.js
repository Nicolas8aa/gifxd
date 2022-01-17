import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGallery from "./components/GifGallery";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["SNK"]);

  return (
    <>
      <h2>Gif app</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((c) => (
          <GifGallery key={c} category={c} />
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
