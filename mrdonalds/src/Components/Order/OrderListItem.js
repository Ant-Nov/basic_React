import React from 'react';
import styled from 'styled-components';
import trash from '../images/trash.svg';

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
	return (
		<OrderItemStyled>
			<span>{order.name}</span>
			<span>4</span>
			<span>{order.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</span>
			<TrashImg />
		</OrderItemStyled>
	);
};
