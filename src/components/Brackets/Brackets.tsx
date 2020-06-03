import React, { FunctionComponent, useState } from "react";
import styles from './Brackets.module.css';

const Brackets: FunctionComponent = () => {
	const [input, setInput] = useState('');
	const [message, setMessage] = useState('');

	const checkBrackets = (inputStr: any): void => {
		const openedBracketsList: string[] = [];

		for (let index in inputStr) {
			const char = inputStr[index];

			if (['(', '[', '{'].includes(char)) {
				openedBracketsList.push(char);
			} else {
				if (![')', ']', '}'].includes(char)) {
					continue;
				}

				if (openedBracketsList.length === 0) {
					setMessage('Incorrect number or order of brackets');
					return;
				}

				const lastOpenedBracket = openedBracketsList.pop();

				if ((lastOpenedBracket === '[' && char !== ']') ||
					(lastOpenedBracket === '(' && char !== ')') ||
					(lastOpenedBracket === '{' && char !== '}')) {
					setMessage('Incorrect number or order of brackets');
					return;
				}
			}
		}

		if (openedBracketsList.length !== 0) {
			setMessage('Incorrect number or order of brackets');
			return;
		} else {
			setMessage('Correct order and number of brackets');

		}
	};

	return (
		<section className={styles.bracketsContainer}>
			<div className={styles.inputContainer}>
				<input className={styles.input} type="text" placeholder="Enter code with brackets" onChange={(e) => setInput(e.target.value)} />
				{message && <div className={styles.message}>{message}</div>}
			</div>
			<button className={styles.validationButton} type="button" onClick={() => checkBrackets(input)}>Validate</button>
		</section>
	);
};

export default Brackets;