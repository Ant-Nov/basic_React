import React, { useContext } from 'react';
import styled from 'styled-components';
import { Btn } from '../Style/Btn';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency } from '../Functions/secondaryFunctions';
import { totalPrice } from '../Functions/secondaryFunctions';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { Choices } from './Choices';
import { useChoices } from '../Hooks/useChoices';
import { Overlay } from '../Style/ModalElems';
import { Context } from '../Functions/context';

const Modal = styled.div`
	background: #fff;
	width: 600px;
	height: 600px;
`;

const Banner = styled.div`
	height: 200px;
	width: 100%;
	background: url(${({ img }) => img}) center;
	background-size: cover;
	margin-bottom: 20px;
`;
const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 0 30px 30px;
	height: 380px;
	button {
		align-self: center;
	}
`;
const ModalText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: Pacifico;
	font-size: 30px;
	width: 100%;
`;

const TotalPrice = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ModalItem = () => {
	const {
		openItems: { openItem, setOpenItem },
		orders: { orders, setOrders },
	} = useContext(Context);

	const counter = useCount(openItem);
	const toppings = useToppings(openItem);
	const choices = useChoices(openItem);
	const isEditOrder = openItem.index > -1;

	const closeModal = e => {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	};

	const order = {
		...openItem,
		count: counter.countItem,
		topping: toppings.toppings,
		choice: choices.choices,
	};

	const addToOrder = () => {
		setOrders([...orders, order]);
		order.canEdit = true;
		setOpenItem(null);
	};

	const editOrder = () => {
		const newOrder = [...orders];
		newOrder[openItem.index] = order;
		setOrders(newOrder);
		setOpenItem(null);
	};

	return (
		<Overlay id='overlay' onClick={closeModal}>
			<Modal>
				<Banner img={openItem.img} />
				<ModalContent>
					<ModalText>
						<p>{openItem.name}</p>
						<p>{formatCurrency(openItem.price)}</p>
					</ModalText>
					<CountItem {...counter} />
					{openItem.toppings && <Toppings {...toppings} />}
					{openItem.choices && <Choices {...choices} openItem={openItem} />}
					<TotalPrice>
						<span>Цена:</span>
						<span>{formatCurrency(totalPrice(order))}</span>
					</TotalPrice>
					<Btn onClick={isEditOrder ? editOrder : addToOrder} disabled={order.choices && !order.choice}>
						{order.canEdit ? 'Редактировать' : 'Добавить'}
					</Btn>
				</ModalContent>
			</Modal>
		</Overlay>
	);
};
