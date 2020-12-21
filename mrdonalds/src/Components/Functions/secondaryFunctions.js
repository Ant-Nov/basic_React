export const formatCurrency = num => {
	return num.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
};

export const totalPrice = order => order.price * order.count;
