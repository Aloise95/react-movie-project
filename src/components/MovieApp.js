import React from "react";
import Header from "./MovieHeader.js";
import MovieList from "./MovieList.js";
import Pagination from "./Pagination.js";

const MovieApp = () => {
    return (
      <div className="container-fluid">
        <br/>
        <Header />
        <MovieList />
        <Pagination />  
      </div>
    );
}

export default MovieApp;
