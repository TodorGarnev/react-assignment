import * as React from 'react';
import styles from './Header.module.css';

interface Props {}

const Header: React.FunctionComponent<Props> = (props) => {
  return (
  <nav>
      <div>Brackets</div>
      <div>Weather</div>
  </nav>
  );
};

export default Header;