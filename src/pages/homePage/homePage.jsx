import { useEffect, useState } from 'react';
import api from '../../api/api';
import MoviesList from '../../components/moviesList/moviesList';
import s from './homePage.module.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await api.trend(page);
        setData(response);
      } catch (error) {
        console.log(error);
        setPage(1);
      }
    };
    data();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1 className={s.trending}>Trending today</h1>
      <MoviesList data={data} />
    </>
  );
};

export default Home;