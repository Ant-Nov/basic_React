import React from 'react';
import styled from 'styled-components';

const ChoicesWrapper = styled.div`
	column-count: 2;
	max-width: 500px;
	column-gap: 15px;
	margin: 0 auto;
`;

const Label = styled.label`
	cursor: pointer;
	display: block;
`;

const Radio = styled.input`
	cursor: pointer;
	margin-right: 5px;
`;

export const Choices = ({ choices, choicesCheck, openItem }) => {
	return (
		<>
			<h3>Дополнительное</h3>
			<ChoicesWrapper>
				{openItem.choices.map((item, i) => {
					return (
						<Label key={i}>
							<Radio type='radio' name='choices' checked={choices === item} value={item} onChange={choicesCheck} />
							{item}
						</Label>
					);
				})}
			</ChoicesWrapper>
		</>
	);
};
