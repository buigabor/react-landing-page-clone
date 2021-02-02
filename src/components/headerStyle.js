
import { css } from '@emotion/react';

export const headerStyles = css`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px 40px;

	img {
		margin-right: auto;
		height: 88px;
		width: 88px;
	}

	a {
		color: rgb(29, 29, 29);
		display: inline-block;
		line-height: 40px;
		text-decoration: none;
		padding: 0px 14px;
		border-radius: 8px;
		font-weight: 500;
		font-size: 18px;
		margin-left: 24px;
		&:hover {
			background-color: rgb(238, 238, 238);
		}
		&:last-child {
			display: inline-block;
			padding: 8px 24px;
			border-radius: 20px;
			background-color: rgb(31, 31, 31);
			color: rgb(255, 255, 255);
			font-weight: 500;
			line-height: 24px;
			transition: background-color 0.3s ease 0s;
			&:hover {
				background-color: rgb(54, 181, 53);
			}
		}
	}
`;