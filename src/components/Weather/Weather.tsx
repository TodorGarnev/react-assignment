import React, { FunctionComponent, useState } from "react";

import styles from './Weather.module.css';
import Day from './Day/Day';
import weatherData from '../../shared/data/weather.json';
import dateTransform from '../../shared/utility/dateTransform';
import toggleTemperature from '../../shared/utility/celsiusToFahrenheit';
import { TempType } from '../../shared/enums/temperature';

const Weather: FunctionComponent = () => {
	const [tempType, setTempType] = useState(TempType.Celsius);
	const [selectedDay, setSelectedDay] = useState('');
	const [data, setData] = useState(weatherData);

	const setActiveDay = (dayName: string): void => {
		if (dayName === selectedDay) {
			setSelectedDay('');
		} else {
			setSelectedDay(dayName);
		}
	}

	const tempTransform = () => {
		const modifiedData = data.map(day => ({
			...day,
			temperature: {
				min: toggleTemperature(day.temperature.min, tempType),
				max: toggleTemperature(day.temperature.max, tempType)
			}
		}));

		if (tempType === TempType.Celsius) {
			setTempType(TempType.Fahrenheit);
		} else {
			setTempType(TempType.Celsius);
		}

		setData(modifiedData);
	}

	return (
		<React.Fragment>
			<button className={styles.switchButton} type="button" onClick={() => tempTransform()}>
				Switch to {tempType === TempType.Celsius ? TempType.Fahrenheit : TempType.Celsius}
			</button>
			<section className={styles.weatherContainer}>
				{data.map((weekDay, index) => {
					const { weekDayName, temperature, iconName, sunrise, rainStatusPerc, wind } = weekDay
					return (<Day
						key={index}
						name={weekDayName}
						minTemp={temperature.min}
						maxTemp={temperature.max}
						icon={iconName}
						sunrise={dateTransform(sunrise)}
						rainStatus={rainStatusPerc}
						wind={wind}
						tempType={tempType}
						isActive={weekDayName === selectedDay}
						activeDay={setActiveDay}
					/>)
				})
				}
			</section>
		</React.Fragment>
	);
};

export default Weather;