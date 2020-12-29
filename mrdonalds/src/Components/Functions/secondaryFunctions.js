export const formatCurrency = num => {
	return num.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
};

export const totalPrice = order => {
	const countTopping = order.topping && order.topping.filter(item => item.checked === true).length;
	let toppingPrice = order.price * 0.1 * countTopping;
	if (!toppingPrice) {
		toppingPrice = 0;
	}

	return (order.price + toppingPrice) * order.count;
};

export const projection = rules => {
	const keys = Object.keys(rules);
	return obj =>
		keys.reduce((newObj, key) => {
			newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null);
			return newObj;
		}, {});
};
