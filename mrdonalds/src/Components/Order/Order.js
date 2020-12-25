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
	width: 350px;
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

export const Order = ({ orders, setOrders, setOpenItem, auth, login }) => {
	const removeItem = item => {
		orders.splice(orders.indexOf(item), 1);
		setOrders([...orders]);
	};
	const total = orders.reduce((acc, item) => {
		return (acc += totalPrice(item));
	}, 0);

	const totalItems = orders.reduce((acc, item) => {
		return (acc += item.count);
	}, 0);

	const orderApplied = user => {
		console.log(user.displayName + ' ваш заказ принят');
	};

	return (
		<OrderStyled>
			<OrderTitle>ваш заказ</OrderTitle>
			<OrderContent>
				{orders.length ? (
					<OrderList>
						{orders.map((item, i) => {
							return (
								<>
									<OrderListItem key={i} order={item} removeItem={() => removeItem(item)} setOpenItem={setOpenItem} index={i} />
								</>
							);
						})}
					</OrderList>
				) : (
					<EmptyList>Список заказов пуст</EmptyList>
				)}
			</OrderContent>
			<OrderTotal>
				<span>Итого</span>
				<span>{totalItems}</span>
				<span>{formatCurrency(total)}</span>
			</OrderTotal>
			<Btn onClick={auth ? () => orderApplied(auth) : login}>Оформить</Btn>
		</OrderStyled>
	);
};
