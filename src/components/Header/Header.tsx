import React, { FunctionComponent } from "react";
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

interface Props { }

const Header: FunctionComponent<Props> = (props) => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.headerItem}>
          <NavLink to="/brackets" activeClassName={styles.active}>Brackets</NavLink>
        </li>
        <li className={styles.headerItem}>
          <NavLink to="/weather" activeClassName={styles.active}>Weather</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;