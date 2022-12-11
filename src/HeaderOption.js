import classess from './HeaderOption.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderOption = (props) => {
  return (
    <div className={classess.headerOption} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} />
      <h3>{props.title}</h3>
    </div>
  );
};

export default HeaderOption;