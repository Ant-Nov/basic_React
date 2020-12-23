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
