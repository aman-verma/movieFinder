import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <footer className='bg-white  dark:bg-gray-800'>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{' '}
            <NavLink to='/' className='hover:underline'>
              Movie Finder™
            </NavLink>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </footer>
  );
};
