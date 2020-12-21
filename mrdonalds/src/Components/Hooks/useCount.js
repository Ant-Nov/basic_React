import { useState } from 'react';

export const useCount = () => {
	const [countItem, setCountItem] = useState(1);
	const onChange = e => setCountItem(e.target.value);
	return { countItem, setCountItem, onChange };
};
