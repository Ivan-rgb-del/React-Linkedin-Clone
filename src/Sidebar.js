import classes from './Sidebar.module.css';

import colorfulImg from './images/colorful.jpg';

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className={classes.recentItem}>
        <span>#</span>
        <p>{topic}</p>
    </div>
  )

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__top}>
        <img src={colorfulImg} alt='bacground' />
        {/* <FontAwesomeIcon icon={faUser} className={classes.avatar}></FontAwesomeIcon> */}
        <div className={classes.avatar}>{user.email[0]}</div>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className={classes.sidebar__stats}>
        <div className={classes.sidebar__stat}>
          <p>Who viewed you?</p>
          <span>2.543</span>
        </div>

        <div className={classes.sidebar__stat}>
          <p>Views on post</p>
          <span>2.468</span>
        </div>
      </div>

      <div className={classes.sidebar__bottom}>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
};

export default Sidebar;