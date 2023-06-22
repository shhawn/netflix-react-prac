import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기
    const request = await axios.get(requests.fetchNowPlaying);

    // 여러 영화 중 하나의 영화 ID 가져오기
    const movieId = request.data.results[
      Math.floor(Math.random() * request.data.results.length)
    ].id;

    // 특정 영화의 더 상세한 정보 가져오기
    // data들이 movieDetail 안으로 다 들어감
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: 'videos'}
    })
    console.log(movieDetail);
    setMovie(movieDetail);
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        background: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}") top center / cover`
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button info">More Infomation</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview, 100)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>

    </header>
  )
}

export default Banner;