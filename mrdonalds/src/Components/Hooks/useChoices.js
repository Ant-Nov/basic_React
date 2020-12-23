import { useState } from 'react';

export const useChoices = () => {
	const [choices, setChoices] = useState();

	const choicesCheck = e => {
		setChoices(e.target.value);
	};

	return { choices, choicesCheck };
};
