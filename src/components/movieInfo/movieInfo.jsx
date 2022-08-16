import { NavLink, useLocation } from 'react-router-dom';
import s from './movieInfo.module.css';

const MovieInfo = () => {
  const location = useLocation();

  return (
    <div  className={s.info}>
      <h3 className={s.title}>Additional information</h3>
      <ul>
        <li className={s.item}>
          <NavLink to={'cast'} state={location.state}>
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={'reviews'} state={location.state}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MovieInfo;