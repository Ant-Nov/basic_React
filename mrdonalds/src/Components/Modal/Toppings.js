import React from 'react';
import styled from 'styled-components';

const ToppingsWrapper = styled.div`
	column-count: 2;
	max-width: 500px;
	column-gap: 15px;
	margin: 0 auto;
`;

const Label = styled.label`
	cursor: pointer;
	display: block;
`;

const Checkbox = styled.input`
	cursor: pointer;
	margin-right: 5px;
`;

export const Toppings = ({ toppings, toppingsCheck }) => {
	return (
		<>
			<h3>Дополнительное</h3>
			<ToppingsWrapper>
				{toppings.map((item, i) => {
					return (
						<Label key={i}>
							<Checkbox type='checkbox' checked={item.checked} onChange={() => toppingsCheck(i)} />
							{item.name}
						</Label>
					);
				})}
			</ToppingsWrapper>
		</>
	);
};
