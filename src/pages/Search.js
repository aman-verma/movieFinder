import { useSearchParams } from 'react-router-dom';

import { useFetch } from './../hooks/useFetch';
import { Card } from '../components';

import { useTitle } from '../hooks/useTitle';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');

  useTitle(`Search result for ${queryTerm}`);

  const { data: movies } = useFetch(queryTerm);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <p className='text-3xl text-gray-700 dark:text-white pb-3'>
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {movies ? (
            movies.map((movie) => {
              return <Card key={movie.imdbID} movie={movie} />;
            })
          ) : (
            <>No result found for `${queryTerm}`</>
          )}
          {}
        </div>
      </section>
    </main>
  );
};
