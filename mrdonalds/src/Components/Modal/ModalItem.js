import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Style/Btn';

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
	align-items: center;
	padding: 0 30px 30px;
	height: 380px;
`;
const ModalText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: Pacifico;
	font-size: 30px;
	width: 100%;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
	const closeModal = e => {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	};

	const order = {
		...openItem,
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
						<p>{openItem.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
					</ModalText>
					<Btn onClick={addToOrder}>Добавить</Btn>
				</ModalContent>
			</Modal>
		</Overlay>
	);
};
