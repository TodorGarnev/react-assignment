import React, { FunctionComponent } from "react";
import styles from './Day.module.css';

import { weatherIcons } from '../../../shared/enums/icons';

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
	const iconsUrl: any = { sun, clouds, cloudsRain, storm, sunClouds };
	// const test: weatherIcons = props.icon;

	// console.log('iconsUrl >>', iconsUrl[props.icon]);
	// console.log('weatherIcons >>', weatherIcons[test]);
	console.log('icon >>', props.icon);

	return (
		<div className={styles.dayContainer}>
			<div className={styles.dayName}>{props.name}</div>
			<div className={styles.weatherIcon}>
				{/* <img src={iconsUrl.weatherIcons[props.icon]} alt={props.icon} /> */}
				<img src={cloudsRain} alt="test"/>
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