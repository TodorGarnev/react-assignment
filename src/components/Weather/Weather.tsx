import React, { FunctionComponent, useState } from "react";
import styles from './Weather.module.css';

import Day from './Day/Day';
import weatherData from '../../shared/data/weather.json';
import dateTransform from '../../shared/utility/dateTransform';
import toggleTemperature from '../../shared/utility/celsiusToFahrenheit';

const TempType = {
	Celsius: 'C', //'&#8451;',
	Fahrenheit: 'F' //'&#8457;'
};

const Weather: FunctionComponent = () => {
	const [tempType, setTempType] = useState(TempType.Celsius);
	const [selectedDay, setSelectedDay] = useState('');

	const setActiveDay = (dayName: string): void => {
		if (dayName === selectedDay) {
			setSelectedDay('');
		} else {
			setSelectedDay(dayName);
		}
	}

	return (
		<React.Fragment>
			<section className={styles.weatherContainer}>
				{weatherData.map((weekDay, index) =>
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
			<button className={styles.switchButton} type="button" onClick={() => setTempType(TempType.Fahrenheit)}>Switch to {tempType}</button>
		</React.Fragment>
	);
};

export default Weather;