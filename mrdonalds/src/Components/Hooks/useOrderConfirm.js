import { useState } from 'react';

export const useOrderConfirm = () => {
	const [orderConfirm, setOrderConfirm] = useState(false);
	return { orderConfirm, setOrderConfirm };
};
