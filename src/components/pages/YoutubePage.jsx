import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import YoutubeSlider from "../youtube/YoutubeSlider";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyB6LEqldGdm11AvV2H1fw3J1gEcfeNZJIk`
    )
      .then((response) => response.json())
      .then((result) =>
        setYoutubes(
          result.items.filter((item) => item.id.kind === "youtube#video")
        )
      )
      .catch((error) => console.log(error, "error"));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EB%89%B4%EC%A7%84%EC%8A%A4&type=video&key=AIzaSyB6LEqldGdm11AvV2H1fw3J1gEcfeNZJIk"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Contents>
      <ContTitle title="📺 Youtube 📺" />
      <YoutubeSlider youtubes={youtubes} />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search} />
      <YoutubeCont youtubes={youtubes} />
    </Contents>
  );
};

export default YoutubePage;
