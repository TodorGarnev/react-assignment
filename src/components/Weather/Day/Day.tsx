import React, { FunctionComponent } from "react";
import styles from './Day.module.css';

import { weatherIconsName } from '../../../shared/constants/icons';

import sun from '../../../assets/images/sun.png';
import sunClouds from '../../../assets/images/sun_clouds.png';
import clouds from '../../../assets/images/clouds.png';
import cloudsRain from '../../../assets/images/clouds_rain.png';
import storm from '../../../assets/images/storm.png';

interface Props {
	name: string;
	minTemp: number;
	maxTemp: number;
	icon: string;
}

const Day: FunctionComponent<Props> = (props) => {
	const iconsUrl: { [key: string]: string } = { sun, clouds, cloudsRain, storm, sunClouds };
	const iconName: string = weatherIconsName[props.icon];

	return (
		<div className={styles.dayContainer}>
			<div className={styles.dayName}>{props.name}</div>
			<div className={styles.weatherIcon}>
				<img src={iconsUrl[iconName]} alt={props.icon} />
			</div>
			<div className={styles.dayTemperature}>
				<span className={styles.minTemperature}>{props.minTemp} &#8451;</span>
				|
				<span className={styles.maxTemperature}>{props.maxTemp} &#8457;</span>
			</div>
		</div>
	);
};

export default Day;