import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header id="header" className={props.attr} role="heading" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo">
          <Link to="/">
            web <em>site</em>
          </Link>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
            <li>
              <Link to="/intro">WELCOME !</Link>
            </li>

            <li>
              <Link to="/port">좋아하는 책</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브 추천</Link>
            </li>
            <li>
              <Link to="/unsplash">풍경 사진</Link>
            </li>
            <li>
              <Link to="/movie">책 영화 추천</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
