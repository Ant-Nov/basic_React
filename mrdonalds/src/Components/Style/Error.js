import React from 'react';
import styled from 'styled-components';
import error from '../images/error.png';

const ErrorTxt = styled.p`
	font-size: 30px;
	text-align: center;
`;

const ErrorImg = styled.div`
	background: url(${error}) no-repeat;
	background-size: contain;
	height: 300px;
	width: 300px;
	margin: 0 auto 20px;
`;

export const Error = () => (
	<>
		<ErrorImg />
		<ErrorTxt>Oops, an error occured</ErrorTxt>
	</>
);
