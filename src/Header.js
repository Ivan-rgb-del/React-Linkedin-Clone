import classes from './Header.module.css';

import HeaderOption from './HeaderOption';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHome,
  faUserGroup,
  faBriefcase,
  faMessage,
  faBell,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import linkedinImg from './images/linkedin.png';

import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';

import { app } from './firebase';
import { getAuth } from 'firebase/auth';
import { signOut } from 'firebase/auth';

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const auth = getAuth(app);
const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className={classes.header}>

      <div className={classes.header__left}>
        <img src={linkedinImg} alt='linkedin' />

        <div className={classes.header__search}>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className={classes.header__right}>
        <HeaderOption icon={faHome} title="Home" />
        <HeaderOption icon={faUserGroup} title="My Network" />
        <HeaderOption icon={faBriefcase} title="Jobs" />
        <HeaderOption icon={faMessage} title="Messaging" />
        <HeaderOption icon={faBell} title="Notification" />
        <HeaderOption
          icon={faUser}
          title='me'
          className={classes.icon}
          onClick={logoutOfApp}
        />
      </div>

    </div>
  )
};

export default Header;