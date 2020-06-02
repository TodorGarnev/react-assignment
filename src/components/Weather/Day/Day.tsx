import React, { FunctionComponent } from "react";
import styles from './Day.module.css';

interface Props {
	name: string
 }

const Day: FunctionComponent<Props> = (props) => {
	return (
		<div className={styles.dayContainer}>
			<div className={styles.dayName}>{props.name}</div>
			<div className={styles.weatherIcon}>Icon</div>
			<div className={styles.dayTemperature}>
				<span>Min: -5 &#8451;</span>
				<span>Max: 5 &#8457;</span>
			</div>
		</div>
	);
};

export default Day;