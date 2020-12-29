import { useEffect } from 'react';

export const useTitle = openItem => {
	const documentTitle = "MrDonald's";

	return useEffect(() => {
		if (openItem) {
			document.title = openItem.name;
		} else {
			document.title = documentTitle;
		}
	});
};
