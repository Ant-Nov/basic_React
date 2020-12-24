import { useState } from 'react';

const getTopping = toppings => {
	return toppings.map(item => ({
		name: item,
		checked: false,
	}));
};

export const useToppings = openItem => {
	const isExsistTopping = openItem.topping ? openItem.topping : openItem.toppings ? getTopping(openItem.toppings) : [];

	const [toppings, setToppings] = useState(isExsistTopping);

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
