import React, { FunctionComponent } from "react";
import styles from './Weather.module.css';

import Day from './Day/Day';
import weatherData from '../../data/weather.json';

interface Props { }

const Weather: FunctionComponent<Props> = (props) => {
    return (
        <section className={styles.weatherContainer}>
            {weatherData.map((weekDay, index) =>
                <Day
                    key={index}
                    name={weekDay.weekDayName}
                    minTemp={weekDay.temperature.min}
                    maxTemp={weekDay.temperature.max}
                />)
            }
        </section>
    );
};

export default Weather;