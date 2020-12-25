import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrder';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
	apiKey: 'AIzaSyAg7OFbDaL3r0PB9YnVgmEEq4x4M-TQdlM',
	authDomain: 'mrdonalds-57295.firebaseapp.com',
	projectId: 'mrdonalds-57295',
	storageBucket: 'mrdonalds-57295.appspot.com',
	messagingSenderId: '290117863575',
	appId: '1:290117863575:web:edd1d7439669a59c4e81d2',
};

firebase.initializeApp(firebaseConfig);

function App() {
	const auth = useAuth(firebase.auth);

	const openItems = useOpenItem();
	const orders = useOrder();

	return (
		<>
			<GlobalStyle />
			<NavBar {...auth} />
			<Order {...orders} {...openItems} {...auth} />
			<Menu {...openItems} />
			{openItems.openItem && <ModalItem {...openItems} {...orders} />}
		</>
	);
}

export default App;
