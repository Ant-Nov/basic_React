import React from 'react';
import styled from 'styled-components';
import logoImg from '../images/logo.svg';
import SignImg from '../images/sign.svg';

const NavBarStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	background: #299b01;
	height: 80px;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	color: white;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
`;

const H1 = styled.h1`
	font-size: 24px;
	margin-left: 15px;
`;

const ImgLogo = styled.img`
	width: 50px;
`;

const Login = styled.button`
	outline: none;
	border: none;
	margin-right: 20px;
	text-transform: uppercase;
	font-family: Roboto, sans-serif;
	background: transparent;
	color: #fff;
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 3px;
	}
`;

export const NavBar = () => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt='logo' />
			<H1>MrDonald's</H1>
		</Logo>
		<Login>
			<img src={SignImg} alt='login' />
			Войти
		</Login>
	</NavBarStyled>
);
