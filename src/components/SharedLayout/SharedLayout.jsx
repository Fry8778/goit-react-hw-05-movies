import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './sharedLayout.module.css';
import Loader from '../loader/loader';

const SharedLayout = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={s.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
      <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;