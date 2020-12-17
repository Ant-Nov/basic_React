import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import banner from '../images/banner.png';
import { ListItem } from './ListItem';

const StyledMenu = styled.main`
	background: #e3e3e3;
	margin-top: 80px;
	margin-left: 330px;
`;

const StyledSection = styled.section`
	padding: 30px;
`;
const Banner = styled.div`
	height: 210px;
	width: 100%;
	background: url(${banner}) no-repeat bottom center;
	background-size: cover;
`;

export const Menu = ({ setOpenItem }) => (
	<StyledMenu>
		<Banner />
		<StyledSection>
			<h2>Бугреры</h2>
			<ListItem itemsList={dbMenu.burger} setOpenItem={setOpenItem} />
		</StyledSection>
		<StyledSection>
			<h2>Закуски / Напитки</h2>
			<ListItem itemsList={dbMenu.other} setOpenItem={setOpenItem} />
		</StyledSection>
	</StyledMenu>
);
