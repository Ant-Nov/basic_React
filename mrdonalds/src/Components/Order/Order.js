import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Style/Btn';
import { OrderListItem } from './OrderListItem';
import { totalPrice } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';

const OrderStyled = styled.section`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 80px;
	left: 0;
	padding: 20px;
	background: #fff;
	min-width: 350px;
	height: calc(100% - 80px);
	box-shadow: 10px -1px 32px -12px rgba(0, 0, 0, 0.75);
	button {
		align-self: center;
	}
`;

const OrderTitle = styled.h2`
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 20px;
`;

const OrderContent = styled.div`
	flex-grow: 1;
`;

const OrderList = styled.ul``;

const OrderTotal = styled.div`
	display: flex;
	& span:first-child {
		flex-grow: 1;
	}
	& span:nth-child(2) {
		margin-right: 35px;
	}
	margin-bottom: 30px;
`;

const EmptyList = styled.p`
	text-align: center;
	color: #a6a6a6d1;
`;

export const Order = ({ orders }) => {
	const total = orders.reduce((acc, item) => {
		return (acc += totalPrice(item));
	}, 0);

	return (
		<OrderStyled>
			<OrderTitle>ваш заказ</OrderTitle>
			<OrderContent>
				{orders.length ? (
					<OrderList>
						{orders.map(item => (
							<OrderListItem order={item} />
						))}
					</OrderList>
				) : (
					<EmptyList>Список заказов пуст</EmptyList>
				)}
			</OrderContent>
			<OrderTotal>
				<span>Итого</span>
				<span>5</span>
				<span>{formatCurrency(total)}</span>
			</OrderTotal>
			<Btn>Оформить</Btn>
		</OrderStyled>
	);
};
