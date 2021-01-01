import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	z-index: 20;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.5);
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const OrderTitle = styled.h2`
	text-align: center;
	margin-bottom: 20px;
`;
