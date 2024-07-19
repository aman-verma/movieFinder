import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from './../pages';

export const AllRoutes = () => {
  return (
    <main className='dark:bg-darkbg'>
      <Routes>
        <Route path='' element={<MovieList apiPath='home' title='Home' />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route
          path='/movies/popular'
          element={<MovieList apiPath='popular' title='Popular' />}
        />
        <Route
          path='/movies/top'
          element={<MovieList apiPath='top' title='Top Rated' />}
        />
        <Route
          path='/movies/upcoming'
          element={<MovieList apiPath='upcoming' title='Upcoming' />}
        />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<PageNotFound title='Page Not Found' />} />
      </Routes>
    </main>
  );
};
