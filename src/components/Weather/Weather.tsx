import React, { FunctionComponent } from "react";
import styles from './Weather.module.css';

import Day from './Day/Day';
import { weekDays } from '../../constants/constant';

interface Props { }

const Weather: FunctionComponent<Props> = (props) => {
    return (
        <section className={styles.weatherContainer}>
            {weekDays.map(weekDay => <Day name={weekDay} />)}
        </section>
    );
};

export default Weather;