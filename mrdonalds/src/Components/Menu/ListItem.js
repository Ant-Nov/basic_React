import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Item = styled.li`
	position: relative;
	border-radius: 20px;
	width: 400px;
	height: 155px;
	background-image: ${({ img }) => `url(${img})`};
	background-position: center;
	background-size: cover;
	margin-top: 30px;
	margin-right: 30px;
	padding: 15px;
	color: white;
	z-index: 1;
	transition: all 0.4s;
	&::after {
		content: '';
		border-radius: 20px;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		display: inline-block;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0);
		opacity: 0.4;
		transition: all 0.4s;
	}
	&:hover {
		cursor: pointer;
		box-shadow: inset 0 0 40px 25px rgba(0, 0, 0, 1);
		&::after {
			opacity: 0;
		}
	}
`;

export const ListItem = ({ itemsList, setOpenItem }) => (
	<List>
		{itemsList.map(item => (
			<Item
				key={item.id}
				img={item.img}
				onClick={() => {
					setOpenItem(item);
				}}
			>
				<p>{item.name}</p>
				<p>{item.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
			</Item>
		))}
	</List>
);
