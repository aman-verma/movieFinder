import { Link } from 'react-router-dom';

export const Card = ({ movie }) => {
  const { imdbID, Poster, Title, Type, Year } = movie;
  return (
    <>
      <div className='max-w-sm bg-white w-32 md:w-72 lg:w-96 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3'>
        <Link
          to={`/movie/${imdbID}`}
          className='flex items-center justify-center'
        >
          <img className='object-contain' src={Poster} alt={Title} />
        </Link>
        <div className='p-5'>
          <Link to={`/movie/${imdbID}`}>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
              {Title}
            </h5>
          </Link>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-center'>
            <span className='text-xl'>Type</span> - {Type} &
            <span className='text-xl'> Year</span> - {Year}
          </p>
        </div>
      </div>
    </>
  );
};
