import React, { useRef } from 'react';
import styled from 'styled-components';
import trash from '../images/trash.svg';
import { totalPrice } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';

const OrderItemStyled = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 5px;
	cursor: pointer;
	&:hover {
		span:first-child {
			color: #d35434;
		}
	}
	span:first-child {
		flex: 0 0 50%;
	}
	span:nth-child(2) {
		flex: 0 0 7%;
	}
	span:nth-child(3) {
		flex: 0 0 32%;
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

export const OrderListItem = ({ order, index, removeItem, setOpenItem }) => {
	let showTop = [];

	if (order.topping) {
		order.topping.forEach(item => {
			if (item.checked === true) {
				showTop.push(item.name);
			}
		});
	}

	const deleteBtn = useRef(null);

	return (
		<>
			<OrderItemStyled onClick={e => (e.target !== deleteBtn.current ? setOpenItem({ ...order, index }) : removeItem)}>
				<span>
					{order.name} {order.choice}
				</span>
				<span>{order.count}</span>
				<span>{formatCurrency(totalPrice(order))}</span>
				<TrashImg ref={deleteBtn} onClick={removeItem} />
			</OrderItemStyled>
			{order.topping && <AddTopping>{showTop.join(', ')}</AddTopping>}
		</>
	);
};
