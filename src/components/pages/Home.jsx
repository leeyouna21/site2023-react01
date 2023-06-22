import React from "react";
import Contents from "../layout/Contents";

import Slider from "../section/Slider";
import Intro from "../section/Intro";
import Portfolio from "../section/Portfolio";
import Youtube from "../section/Youtube";
import Unsplash from "../section/Unsplash";
import Movie from "../section/Movie";
const home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap section bg-beige" />
        <Intro attr="intro__wrap section bg-white02" />
        <Portfolio attr="port__wrap section center bg-ivory" />
        <Youtube attr="youtube__wrap SBAggro3  section  bg-white02" />
        <Unsplash attr="unsplash__wrap SBAggro3 section bg-white" />
        <Movie attr="movies__wrap SBAggro3 section bg-white" />
      </Contents>
    </>
  );
};

export default home;
