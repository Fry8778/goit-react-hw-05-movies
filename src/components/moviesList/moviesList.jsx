import { Link, useLocation } from 'react-router-dom';
import s from './moviesList.module.css';
import PropTypes from 'prop-types';

const List = ({ data }) => {
const location = useLocation();

  return (
    <ul>
      {data.map(e => (
        <li className={s.list} key={e.id}>
          <Link className={s.link} to={`/movies/${e.id}`} state={location}>
            {e.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;
