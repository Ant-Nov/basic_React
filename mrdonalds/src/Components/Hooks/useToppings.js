import { useState } from 'react';

const getTopping = toppings => {
	if (!toppings) {
		return;
	}
	return toppings.map(item => ({
		name: item,
		checked: false,
	}));
};

export const useToppings = openItem => {
	const [toppings, setToppings] = useState(getTopping(openItem.toppings));

	const toppingsCheck = index => {
		setToppings(
			toppings.map((item, i) => {
				if (i === index) {
					item.checked = !item.checked;
				}
				return item;
			})
		);
	};
	return { toppings, toppingsCheck };
};
