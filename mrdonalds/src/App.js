import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  background: #f0f0f0;
  margin: 0;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: black;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1, h2, h3 {
  font-family: Pacifico;
  padding: 0;
  margin: 0;
}

p {
  padding: 0;
  margin: 0;
}
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />
		</>
	);
}

export default App;
