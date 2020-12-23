import styled from 'styled-components';

export const Btn = styled.button`
	background: #299b01;
	background-position: top;
	color: #fff;
	font-family: Roboto, sans-serif;
	font-size: 22px;
	padding: 0.9em 2em;
	outline: none;
	border-color: transparent;
	border-radius: 15px;
	transition: all 0.4s;
	&:hover {
		background: #fff;
		color: #299b01;
		border-color: #299b01;
	}
	&:disabled {
		color: #baa9bc;
		background: #ccc;
		border-color: #bbb;
	}
`;
