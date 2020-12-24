import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrder';

function App() {
	const openItems = useOpenItem();
	const orders = useOrder();

	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Order {...orders} {...openItems} />
			<Menu {...openItems} />
			{openItems.openItem && <ModalItem {...openItems} {...orders} />}
		</>
	);
}

export default App;
