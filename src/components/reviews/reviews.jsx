import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import s from './reviews.module.css';

const Reviews = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.reviews(movieId);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, []);

  if (data.length === 0)
    return (
      <p className={s.notInfo}>We don't have any reviews for this movie</p>
    );
  if (data.length !== 0) {
    return (
      <ul className={s.list}>
        {data.map((el, id) => (
          <li className={s.item} key={id}>
            <p className={s.author}>
              <b>Author: </b> {el.author}
            </p>
            <p className={s.content}>{el.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;