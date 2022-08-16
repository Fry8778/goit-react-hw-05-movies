import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import api from '../../api/api';
import FilmDetails from '../../components/filmDetails/filmDetails';
import MovieInfo from '../../components/movieInfo/movieInfo';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const dataModification = object => {
      const genres = object.genres.map(genre => genre.name).join(', ');
      const year = object['release_date'].split('-')[0];
      const score = Math.ceil(object['vote_average'] * 10);
      const newData = {
        img: `https://image.tmdb.org/t/p/w500/${object['poster_path']}`,
        title: object.title,
        genres,
        year,
        score,
        overview: object.overview,
      };
      setData(newData);
    };

    const fetchData = async () => {
      try {
        const response = await api.fetchId(movieId);
        dataModification(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <FilmDetails data={data} />
      <MovieInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;