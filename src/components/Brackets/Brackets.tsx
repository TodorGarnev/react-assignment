import React, { FunctionComponent } from "react";
import styles from './Brackets.module.css';

const Brackets: FunctionComponent = () => {
	return (
		<section className={styles.bracketsContainer}>
			<div className={styles.inputContainer}>
				<input className={styles.input} type="text" placeholder="Enter code with brackets" />
				<div className={styles.message}>Message</div>
			</div>
			<button className={styles.validationButton} type="button">Validate</button>
		</section>
	);
};

export default Brackets;