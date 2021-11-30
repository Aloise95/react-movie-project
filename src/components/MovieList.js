import React, { useState } from "react";
import MovieCard from "./MovieCard.js";
import { connect } from "react-redux";

const MovieList = ({ movieList, titleSearched }) => {

  // Like and Dislike
  const [likedBands, updateLikedBands] = useState([]);

  // FILTER BY CATEGORY
  const [filter, setFilter] = useState(new Set()); 
  const filterCheck = (value) => {
    if (filter.has(value)) {
      setFilter(prevFilter => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.delete(value);
        return newSetFilter;
      });
    } else {
       setFilter(prevFilter => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.add(value);
        return newSetFilter;
      });
    }
  }

  return (
    <main className="main-content">

      {/* FILTER */}
      <form className="filter-form">
        <div className="checkbox-select">
          <label htmlFor="Comedy" className="category-label">
            <input type="checkbox" className="category-film" id="comedy" selected={filter.has("Comedy")} onClick={() => filterCheck("Comedy")} /> 
            <p className="text">Comedy</p>
          </label>

          <label htmlFor="Animation" className="category-label">
            <input type="checkbox" className="category-film" id="animation" selected={filter.has("Animation")} onClick={() => filterCheck("Animation")} /> 
           <p className="text"> Animation</p>
          </label>
          
          <label htmlFor="Thriller" className="category-label">
            <input type="checkbox" className="category-film" id="thriller" selected={filter.has("Thriller")} onClick={() => filterCheck("Thriller")} /> 
           <p className="text"> Thriller</p>
          </label>
          
          <label htmlFor="Drame" className="category-label">
            <input type="checkbox" className="category-film" id="drame" selected={filter.has("Drame")} onClick={() => filterCheck("Drame")} /> 
           <p className="text"> Drame</p>
          </label>                  
        </div>
      </form>

      {/* MOVIES */}
      <div className="movies">
        <div className="row">
        {movieList
          // Filter by movie title
          .filter(
            el =>
              el.title
                .toLocaleLowerCase()
                .includes(titleSearched.toLocaleLowerCase())
          ) 
          // Filter by category
          .filter(el => {
            if (filter.size > 0 && !filter.has(el.category))
              return false;
            return true;
          })
          .map((el) => {
            return <MovieCard key={el.id} movie={el} updateLikedBands={updateLikedBands} likedBands={likedBands} />;
          })}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    movieList: state.movies,
    titleSearched: state.titleFilter
  };
};


const MovieListContainer = connect(mapStateToProps)(
  MovieList
);

export default MovieListContainer;
