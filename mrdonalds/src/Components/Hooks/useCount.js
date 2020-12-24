import { useState } from 'react';

export const useCount = openItem => {
	const isCountExsist = openItem.count ? openItem.count : 1;
	const [countItem, setCountItem] = useState(isCountExsist);
	const onChange = e => setCountItem(e.target.value);
	return { countItem, setCountItem, onChange };
};
