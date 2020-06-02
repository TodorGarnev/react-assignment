import * as React from 'react';
import styles from './Header.module.css';

interface Props { }

const Header: React.FunctionComponent<Props> = (props) => {
	return (
		<nav>
			<ul className={styles.navigation}>
				<li className={styles.headerItem}>Brackets</li>
				<li className={styles.headerItem}>Weather</li>
			</ul>
		</nav>
	);
};

export default Header;