import React from 'react';
import styled from 'styled-components';
import trash from '../images/trash.svg';
import { totalPrice } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';

const OrderItemStyled = styled.li`
	display: flex;
	align-items: center;
	& span:first-child {
		flex-grow: 1;
	}
	& span:nth-child(2) {
		margin-right: 30px;
	}
	& span:nth-child(3) {
		margin-right: 10px;
	}
`;

const AddTopping = styled.p`
	color: #9a9a9a;
	font-size: 17px;
	margin-top: -10px;
`;

const TrashImg = styled.button`
	border: none;
	outline: none;
	background: url(${trash}) center no-repeat;
	background-size: cover;
	width: 30px;
	height: 30px;
	margin: 5px 0;
`;

export const OrderListItem = ({ order }) => {
	let showTop = [];
	if (order.topping) {
		order.topping.forEach(item => {
			if (item.checked === true) {
				showTop.push(item.name);
			}
		});
	}
	console.log(showTop);

	return (
		<>
			<OrderItemStyled>
				<span>{order.name}</span>
				<span>{order.count}</span>
				<span>{formatCurrency(totalPrice(order))}</span>
				<TrashImg />
			</OrderItemStyled>
			{order.topping && <AddTopping>{showTop.join(', ')}</AddTopping>}
		</>
	);
};
