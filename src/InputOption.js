import classes from './InputOption.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputOption = ({ icon, title, color }) => {
  return (
    <div className={classes.inputOption}>
      <FontAwesomeIcon icon={icon} style={{ color: color }} size='2x' />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;