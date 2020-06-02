import * as React from 'react';
import styles from './Day.module.css';

interface Props { }

const Day: React.FunctionComponent<Props> = (props) => {
	return (
		<div className={styles.dayContainer}>
           <div className={styles.dayName}>Monday</div>
		</div>
	);
};

export default Day;