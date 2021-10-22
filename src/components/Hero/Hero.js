import React, { useState, useEffect } from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import "./Hero.scss";
import axios from "../../axios";
import requests from "../../requests";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Hero = () => {
  const [movie, setMovie] = useState([]);

  const getMovieData = async () => {
    try {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const randomNum = Math.floor(Math.random() * 10);

      setMovie(response.data.results[randomNum]);

      if (movie.name === false) {
        console.log(`somethings wrong : ${randomNum}`);
        getMovieData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();

    const interval = setInterval(() => {
      getMovieData();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header className="hero">
      <div classNaame="hero-bg">
        <img className="hero-image" src={`${baseURL}${movie?.backdrop_path}`} />
        <div className="hero-fadebottom"></div>
      </div>
      <div className="hero-contents">
        <h1 className="hero-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="hero-desc">{truncate(movie?.overview, 150)}</p>
        <div className="hero-buttons">
          <button className="hero-button">
            <FaPlay className="btn-icon" /> Play
          </button>
          <button className="hero-button">
            <FaPlus className="btn-icon" /> My List
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
