import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTitle } from '../hooks/useTitle';

import noPoster from '../assets/images/movie.svg';

export const MovieDetail = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState({});

  useTitle(movieData.Title);

  useEffect(() => {
    async function fetchMovieDetail() {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${params.id}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      setMovieData(json);
    }
    fetchMovieDetail();
  }, [params.id]);

  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img
            className='rounded'
            src={movieData?.Poster === 'N/A' ? noPoster : movieData?.Poster}
            alt='movieData?.Title'
          />
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>
            {movieData.Title}
          </h1>
          <p className='my-4'>{movieData.Plot}</p>
          <p className='my-7 flex-wrap gap-2'>
            {movieData?.Genre?.split(',').map((genre) => {
              return (
                <span
                  key={genre}
                  className='mr-2 border border-gray-200 rounded dark:order-gray-600 p-2'
                >
                  {genre}
                </span>
              );
            })}
          </p>
          <div className='flex items-center'>
            <svg
              className='w-4 h-4 text-yellow-300 me-1'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 22 20'
            >
              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>

            <p className='ms-2 text-sm text-gray-900 dark:text-white'>
              {movieData.imdbRating} %
            </p>
            <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
            <span className='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white'>
              {movieData.imdbVotes} votes
            </span>
          </div>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Runtime:</span>
            <span>{movieData.Runtime}.</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Box Office:</span>
            <span>{movieData.BoxOffice}</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Rated:</span>
            <span>{movieData.Rated}</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Release Date:</span>
            <span>{movieData.Released}</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movieData?.imdbID}`}
              target='_blank'
              rel='noreferrer'
            >
              {movieData?.imdbID}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
