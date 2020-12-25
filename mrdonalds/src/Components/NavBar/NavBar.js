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
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	color: white;
	p {
		margin-left: auto;
		margin-right: 20px;
	}
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

const User = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
`;

export const NavBar = ({ auth, login, logOut }) => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt='logo' />
			<H1>MrDonald's</H1>
		</Logo>
		{auth ? (
			<>
				<p>Добро пожаловать, {auth.displayName}</p>
				<User onClick={logOut}>
					<img src={SignImg} alt='logout' />
					Выйти
				</User>
			</>
		) : (
			<Login onClick={login}>
				<img src={SignImg} alt='login' />
				Войти
			</Login>
		)}
	</NavBarStyled>
);
