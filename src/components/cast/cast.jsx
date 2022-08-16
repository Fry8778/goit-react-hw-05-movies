import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import placeholder from '../../image/placeholder.png';

const Cast = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.cast(movieId);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, []); 

  return (
    <ul>
      {data.map((el,idx) => (
        <li key={el.id + idx}>
          <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el['profile_path']}`
                    : placeholder
                }
                alt={el.name}
                width="200px"
                height="300px"
              />              
          <div>
            <p>
              <b>Name: </b> {el.name}
            </p>
            <p>
              <b>Character: </b> {el.character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;