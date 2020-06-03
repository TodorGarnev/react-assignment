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
					/>)
				}
			</section>
			<button className={styles.switchButton} type="button" onClick={() => setTempType(TempType.Fahrenheit)}>Switch to {tempType}</button>
			{toggleTemperature(120, false).toFixed(0)}
		</React.Fragment>
	);
};

export default Weather;