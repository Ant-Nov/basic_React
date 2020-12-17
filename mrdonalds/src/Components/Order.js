import React from 'react';
import styled from 'styled-components';
import { Btn } from './Btn';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 80px;
	left: 0;
	padding: 20px;
	background: #fff;
	min-width: 330px;
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

export const Order = () => {
	return (
		<OrderStyled>
			<OrderTitle>ваш заказ</OrderTitle>
			<OrderContent>
				<OrderList>
					<OrderListItem />
					<OrderListItem />
					<OrderListItem />
				</OrderList>
			</OrderContent>
			<OrderTotal>
				<span>Итого</span>
				<span>5</span>
				<span>2345 Р</span>
			</OrderTotal>
			<Btn>Оформить</Btn>
		</OrderStyled>
	);
};
