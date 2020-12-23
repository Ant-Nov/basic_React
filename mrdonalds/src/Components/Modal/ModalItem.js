import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Style/Btn';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency } from '../Functions/secondaryFunctions';
import { totalPrice } from '../Functions/secondaryFunctions';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';

const Overlay = styled.div`
	position: fixed;
	z-index: 20;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.5);
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

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

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
	const counter = useCount();

	const toppings = useToppings(openItem);

	const closeModal = e => {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	};

	const order = {
		...openItem,
		count: counter.countItem,
		topping: toppings.toppings,
	};

	const addToOrder = () => {
		setOrders([...orders, order]);
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
					<TotalPrice>
						<span>Цена:</span>
						<span>{formatCurrency(totalPrice(order))}</span>
					</TotalPrice>
					<Btn onClick={addToOrder}>Добавить</Btn>
				</ModalContent>
			</Modal>
		</Overlay>
	);
};
