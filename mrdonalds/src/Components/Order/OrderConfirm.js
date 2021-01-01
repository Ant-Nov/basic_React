import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Style/ModalElems';
import { Btn } from '../Style/Btn';
import { totalPrice } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';
import { projection } from '../Functions/secondaryFunctions';
import { OrderTitle } from '../Style/ModalElems';
import { Context } from '../Functions/context';

const Modal = styled.div`
	background: white;
	width: 600px;
	padding: 30px;
	text-align: center;
`;

export const OrderTotal = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 30px;
`;

const Text = styled.h3`
	margin-bottom: 30px;
`;

const rules = {
	name: ['name'],
	price: ['price'],
	count: ['count'],
	toppings: ['topping', arr => arr.filter(item => item.checked).map(item => item.name), array => (array.length ? array : 'no toppings')],
	choices: ['choice', item => (item ? item : 'no choices')],
};

export const OrderConfirm = () => {
	const {
		orders: { orders, setOrders },
		orderConfirm: { setOrderConfirm },
		auth: { auth },
		firebaseDatabase,
	} = useContext(Context);

	const closeModal = e => {
		if (e.target.id === 'overlay') {
			setOrderConfirm(false);
		}
	};

	const database = firebaseDatabase();

	const orderApplied = () => {
		const newOrder = orders.map(projection(rules));
		database.ref('order').push().set({
			username: auth.displayName,
			email: auth.email,
			order: newOrder,
		});

		setOrders([]);
	};

	const total = orders.reduce((acc, item) => {
		return (acc += totalPrice(item));
	}, 0);

	return (
		<Overlay id='overlay' onClick={closeModal}>
			<Modal>
				<OrderTitle>{auth.displayName}</OrderTitle>
				<Text>Осталось только подтвердить ваш заказ</Text>
				<OrderTotal>
					<span>Итого</span>
					<span>{formatCurrency(total)}</span>
				</OrderTotal>
				<Btn
					onClick={() => {
						orderApplied();
						setOrderConfirm(false);
					}}
				>
					Подтвердить
				</Btn>
			</Modal>
		</Overlay>
	);
};
