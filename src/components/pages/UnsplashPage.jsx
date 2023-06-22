import React, { useState, useEffect } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import UnsplashSearch from "../Unsplash/UnsplashSearch";
import UnsplashTag from "../Unsplash/UnsplashTag";
import UnsplashCont from "../Unsplash/UnsplashCont";

const UnsplashPage = () => {
  const [images, setImages] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=Lmybp4NiGaqViDlNbZHR7eLV3Fl2FGnbvwSJ6NGpJFo&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.unsplash.com/photos?client_id=Lmybp4NiGaqViDlNbZHR7eLV3Fl2FGnbvwSJ6NGpJFo&per_page=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Contents>
      <ContTitle title="📸 images 📸" />
      <UnsplashSearch onSearch={search} />
      <UnsplashTag onSearch={search} />
      <UnsplashCont images={images} />
    </Contents>
  );
};
export default UnsplashPage;
