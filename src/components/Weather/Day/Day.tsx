import React, { FunctionComponent } from "react";
import styles from './Day.module.css';

interface Props {
	name: string;
	minTemp: number;
	maxTemp: number;
 }

const Day: FunctionComponent<Props> = (props) => {
	return (
		<div className={styles.dayContainer}>
			<div className={styles.dayName}>{props.name}</div>
			<div className={styles.weatherIcon}>Icon</div>
			<div className={styles.dayTemperature}>
				<span className={styles.minTemperature}>{props.minTemp} &#8451;</span>
				|
				<span className={styles.maxTemperature}>{props.maxTemp} &#8457;</span>
			</div>
		</div>
	);
};

export default Day;