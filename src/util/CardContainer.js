import styled from '@emotion/styled';
import { VegStyles } from './vegStyles';


export const CardContainer = styled.div`
	${VegStyles};
	width: 220px;
	height: 220px;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
	color: rgb(0, 0, 0);
	padding: 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.expires {
		justify-content: flex-start !important;
	}

	.card__header {
		&-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&-icon {
			font-size: 48px;
			grid-area: icon;
			position: relative;
			left: 5px;
			top: 5px;
		}
		&-number {
			width: 55px;
			height: 55px;
			font-size: 40px;
			font-weight: 700;
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.7);
			grid-area: number;
			text-align: center;
			letter-spacing: 3px;
			padding-top: 2px;
		}

		&-expires-text {
			color: rgb(255, 73, 0);
			font-weight: 500;
			font-size: 24px;
			justify-self: flex-start;
			position: relative;
			right: 18px;
		}

		&-clock-text {
			color: rgb(54, 181, 53);
			font-weight: 500;
			font-size: 24px;
			justify-self: flex-start;
			position: relative;
			right: 18px;
		}

		&-eye-text {
			color: rgb(0, 207, 205);
			font-weight: 500;
			font-size: 24px;
			justify-self: flex-start;
			position: relative;
			right: 18px;
		}

		&-icon-svg {
			position: relative;
			right: 18px;
			bottom: 10px;
		}
	}
	.card__text {
		&-wrapper {
			display: flex;
			flex-direction: column;
			padding-bottom: 16px;
			gap: 10px;
		}
		&-h {
			grid-area: text;
			display: block;
			opacity: 0.8;
			font-weight: 500;
			font-size: 26px;
			color: #000000;
		}

		&-p {
			grid-area: text;
			display: block;
			opacity: 0.5;
			font-weight: 500;
			font-size: 20px;
		}
	}

	.milk {
		width: 120px;
	}
`;
