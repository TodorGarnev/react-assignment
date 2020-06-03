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
	sunrise: string;
	rainStatus: number;
	wind: number;
	tempType: string;
	isActive: boolean;
	activeDay: Function;
}

const Day: FunctionComponent<Props> = (props) => {
	const iconsUrl: { [key: string]: string } = { sun, clouds, cloudsRain, storm, sunClouds };
	const iconName: string = weatherIconsName[props.icon];

	return (
		<div className={styles.dayContainer}>
			<div className={styles.dayName}>{props.name}</div>
			<div className={styles.weatherIcon} onClick={() => props.activeDay(props.name)}>
				<img src={iconsUrl[iconName]} alt={props.icon} />
			</div>
			<div className={styles.dayTemperature}>
				<span className={styles.minTemperature}>
					{(props.minTemp).toFixed(0)} {props.tempType}
				</span>
				|
				<span className={styles.maxTemperature}>
					{(props.maxTemp).toFixed(0)} {props.tempType}
				</span>
			</div>
			{
				props.isActive &&
				<div className={styles.additionalInfo}>
					<div className={styles.sunrise}>{props.sunrise}</div>
					<div className={styles.rainStatus}>{props.rainStatus}%</div>
					<div className={styles.wind}>{props.wind} m/s</div>
				</div>
			}
		</div>
	);
};

export default Day;