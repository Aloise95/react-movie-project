import React from "react";
import TitleFilter from "./TitleFilter";
import logo from "../image/31087.png"

const MovieHeader = ({ onKeyUpFn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="text-white navbar-brand sitetitle" href="/all-your-movies"><img
                className="img-logo"
                src={logo} alt="logo"/> Your Movies</a>
          <TitleFilter onKeyUpFn={onKeyUpFn} />
      </div>
    </nav>
  );
};

export default MovieHeader;
