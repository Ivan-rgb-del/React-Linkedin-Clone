import classes from './widgets.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faCircle } from '@fortawesome/free-solid-svg-icons';

const widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className={classes.widgets__article}>
      <div className={classes.widgets__articleLeft}>
        <FontAwesomeIcon icon={faCircle} />
      </div>

      <div className={classes.widgets__articleRight}>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className={classes.widgets}>
      <div className={classes.widgets__header}>
        <h2>Linkedin News</h2>
        <FontAwesomeIcon icon={faInfo} className={classes.icon} />
      </div>

      {newArticle("Coronavirus: UK updates", "Top news - 8655 readers")}
      {newArticle("Tesla hits new highs", "Cars & auto - 450 readers")}
      {newArticle("Bitcoin breaks", "Crypto - 6500 readers")}
      {newArticle("New features in React", "Code - 475 readers")}
      {newArticle("World Cup", "Sport - 7548 readers")}
      {newArticle("Apple", "Media - 3687 readers")}
      {newArticle("Black Friday", "Sale - 984 readers")}
    </div>
  );
};

export default widgets;