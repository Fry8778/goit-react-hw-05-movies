import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShareLayout from './SharedLayout/SharedLayout';


const Home = lazy(() => import('../pages/homePage/homePage'));
const Movies = lazy(() => import('../pages/moviesPage/moviesPage'));
const MovieDetails = lazy(() => import('../pages/moviesDetailsPage/moviesDetailsPage'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShareLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

