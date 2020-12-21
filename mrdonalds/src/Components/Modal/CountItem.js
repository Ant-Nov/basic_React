import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CountInput = styled.input`
	width: 50px;
	font-size: 20px;
	text-align: center;
	border: none;
`;

const ButtonCount = styled.button`
	background-color: transparent;
	outline: none;
`;

export const CountItem = ({ countItem, setCountItem, onChange }) => {
	return (
		<CountWrapper>
			<span>Количество</span>
			<div>
				<ButtonCount disabled={countItem <= 1} onClick={() => setCountItem(countItem - 1)}>
					-
				</ButtonCount>
				<CountInput type='number' min='1' max='100' value={countItem < 1 ? '1' : countItem} onChange={onChange} />
				<ButtonCount onClick={() => setCountItem(countItem + 1)}>+</ButtonCount>
			</div>
		</CountWrapper>
	);
};
