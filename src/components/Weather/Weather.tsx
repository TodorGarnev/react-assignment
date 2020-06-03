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
				min: tempType === TempType.Celsius ? toggleTemperature(day.temperature.min, false) : toggleTemperature(day.temperature.min, true),
				max: tempType === TempType.Celsius ? toggleTemperature(day.temperature.max, false) : toggleTemperature(day.temperature.max, true)
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
			<section className={styles.weatherContainer}>
				{data.map((weekDay, index) =>
					<Day
						key={index}
						name={weekDay.weekDayName}
						minTemp={weekDay.temperature.min}
						maxTemp={weekDay.temperature.max}
						icon={weekDay.iconName}
						sunrise={dateTransform(weekDay.sunrise)}
						rainStatus={weekDay.rainStatusPerc}
						wind={weekDay.wind}
						tempType={tempType}
						isActive={weekDay.weekDayName === selectedDay}
						activeDay={setActiveDay}
					/>)
				}
			</section>
			<button className={styles.switchButton} type="button" onClick={() => tempTransform()}>
				Switch to {tempType === TempType.Celsius ? TempType.Fahrenheit : TempType.Celsius}
			</button>
		</React.Fragment>
	);
};

export default Weather;