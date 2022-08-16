import { Link, useLocation } from 'react-router-dom';
import s from './filmDetails.module.css';

const FilmDetails = data => {
  const location = useLocation();
  const infoDataFilm = data.data;

  const { img, genres, overview, score, title, year } = infoDataFilm;

  if (!data) {
    return;
  }
  return (
    <>
      <Link to={location.state ?? '/'}>
        <li className={s.link}>Go to back</li>
      </Link>
      <div className={s.wrap}>
        <img src={img} alt={title} height="500" width="400" className={s.img} />
        <div className={s.info}>
          <h2 className={s.title}>
            {title}
            <span className={s.year}>({year})</span>
          </h2>
          <p className={s.score}>
            User Score: <b>{score}%</b>{' '}
          </p>
          <h3 className={s.subtitle}>Overview</h3>
          <p>{overview}</p>
          <h3 className={s.subtitle}>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
    </>
  );
};
export default FilmDetails;