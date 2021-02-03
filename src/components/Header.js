/** @jsxImportSource @emotion/react */
import React from 'react';
import { headerStyles } from './headerStyle';

export default function Header() {
  return (

			<header css={headerStyles}>
				<img src='img/kiff.app_.png' alt='Logo' />
				<a href='#1'>About</a>
				<a href='#1'>Support</a>
				<a href='#1'>Download for IOS</a>
			</header>

	);
}
