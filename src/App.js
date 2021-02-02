/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionAlwaysFresh from './components/SectionAlwaysFresh';
import SectionDarkMode from './components/SectionDarkMode';
import SectionEatFresh from './components/SectionEatFresh';
import SectionExpiration from './components/SectionExpiration';
import SectionFoodWaste from './components/SectionFoodWaste';
import SectionOpeningTimes from './components/SectionOpeningTimes';
import SectionQRCode from './components/SectionQRCode';

const globalStyles = css`
	body {
	}
	html {
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
`;

const Wrapper = css`
	display: flex;
	flex-direction: column;
	padding: 55px;
	h2 {
		font-size: 60px;
		margin-bottom: 24px;
		font-weight: 700;
		color: #000000;
		padding: 0 10px;
	}
	p {
		font-size: 1.25rem;
		line-height: 2rem;
		font-weight: 500;
		color: rgb(54, 181, 53);
	}
`;

const VegStyles = (props) => {
	if (props.bgColor === 'lettuce') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(202, 236, 172) 0%,
				rgb(138, 195, 187) 100%
			);
			grid-area: lettuce;
			.card__header-number {
				color: rgb(160, 220, 187);
			}
		`;
	}

	if (props.bgColor === 'pineapple') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(255, 239, 184) 0%,
				rgb(251, 220, 113) 100%
			);
			grid-area: pineapple;
			.card__header-number {
				color: rgb(252, 224, 130);
			}
		`;
	}

	if (props.bgColor === 'tomato') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(255, 200, 143) 0%,
				rgb(255, 143, 143) 100%
			);
			grid-area: tomato;
			.card__header-number {
				color: rgb(255, 166, 143);
			}
		`;
	}

	if (props.bgColor === 'carrot') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(255, 232, 188) 0%,
				rgb(255, 156, 84) 100%
			);
			grid-area: carrot;
			.card__header-number {
				color: rgb(255, 187, 129);
			}
		`;
	}

	if (props.bgColor === 'milk') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(218, 227, 244) 0%,
				rgb(146, 163, 195) 100%
			);
			position: relative;
			left: 40px;
		`;
	}

	if (props.bgColor === 'milk-circle') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(218, 227, 244) 0%,
				rgb(146, 163, 195) 100%
			);
			position: relative;
			left: 168px;
			bottom: 80px;
		`;
	}

	if (props.bgColor === 'avocado-circle') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(220, 241, 176) 0%,
				rgb(131, 208, 139) 100%
			);
			position: relative;
			left: 40px;
		`;
	}

	if (props.bgColor === 'bread-circle') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(255, 232, 188) 0%,
				rgb(255, 156, 84) 100%
			);
			position: relative;
			left: 290px;
			bottom: 160px;
		`;
	}

	if (props.bgColor === 'white-second') {
		return css`
			background: #fff;
			position: relative;
			left: 168px;
			bottom: 80px;
		`;
	}

	if (props.bgColor === 'white-third') {
		return css`
			background: #fff;
			position: relative;
			left: 290px;
			bottom: 160px;
		`;
	}

	if (props.bgColor === 'pasta') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(255, 228, 184) 0%,
				rgb(255, 200, 109) 100%
			);
			position: relative;
			left: 40px;
			.card__header-number {
				color: rgb(255, 207, 128);
			}
		`;
	}

	if (props.bgColor === 'eggs') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(246, 245, 242) 0%,
				rgb(211, 219, 235) 100%
			);
			grid-area: eggs;
			.card__header-number {
				color: rgb(217, 223, 237);
			}
		`;
	}

	if (props.bgColor === 'cheese') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(255, 239, 184) 0%,
				rgb(251, 220, 113) 100%
			);
			grid-area: cheese;
			.card__header-number {
				color: rgb(252, 224, 130);
			}
		`;
	}

	if (props.bgColor === 'matcha') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(202, 236, 172) 0%,
				rgb(131, 208, 197) 100%
			);
			grid-area: matcha;
			.card__header-number {
				color: rgb(160, 220, 187);
			}
		`;
	}

	if (props.bgColor === 'tomatosauce') {
		return css`
			background: linear-gradient(
				135deg,
				rgb(255, 200, 143) 0%,
				rgb(255, 143, 143) 100%
			);
			grid-area: tomatosauce;
			.card__header-number {
				color: rgb(255, 166, 143);
			}
		`;
	}
};

const CardContainer = styled.div`
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





const renderSVG = (name) => {
	if (name === 'sand-glass') {
		return (
			<svg
				css={css`
					width: 60px;
					height: 60px;
				`}
			>
				<path
					fill='#FF4900'
					d='M25.7 54c-.4-.4-.6-1-.6-1.7v-.5c0-.8.2-1.6.5-2.4s.7-1.5 1.2-2.1 1-1.3 1.6-1.9l1.6-1.6c.5-.5 1-.9 1.3-1.2.3-.3.5-.5.6-.8s.2-.6.2-.9c0-.4-.1-.7-.2-.9s-.3-.5-.6-.8c-.4-.3-.8-.7-1.3-1.2s-1.1-1-1.6-1.5-1.1-1.2-1.6-1.8-.9-1.4-1.2-2.1-.5-1.6-.5-2.4v-.5c0-.7.2-1.3.6-1.7s1-.6 1.8-.6h14.3c.8 0 1.4.2 1.8.6s.7 1 .7 1.8v.4c0 .8-.2 1.6-.5 2.4s-.7 1.5-1.2 2.1-1 1.3-1.6 1.8-1 1.1-1.6 1.5-1 .9-1.3 1.2c-.3.3-.5.5-.6.8s-.2.6-.2.9c0 .4.1.7.2.9s.4.5.6.8c.4.3.8.7 1.3 1.2s1.1 1 1.6 1.6 1.1 1.2 1.6 1.9.9 1.4 1.2 2.1.5 1.5.5 2.4v.4c0 .8-.2 1.4-.7 1.8s-1.1.6-1.8.6H27.5c-.8 0-1.4-.2-1.8-.6zm14.5-1.7c.3 0 .5-.1.6-.2s.2-.3.1-.6-.2-.4-.4-.6l-4.9-3.7-.2-.2c-.1-.1-.1-.1-.1-.2v-7.2c0-.4.1-.7.2-.9s.3-.5.6-.7c.3-.2.6-.5 1-.8s.8-.7 1.2-1 .7-.7 1-1c.1-.2.2-.4.2-.5s-.1-.2-.3-.2h-9c-.2 0-.3.1-.3.2s0 .3.2.5c.3.3.6.7 1 1s.8.7 1.2 1 .7.6 1 .8c.3.3.5.5.6.7s.2.6.2.9v7.2c0 .1 0 .2-.1.2s-.1.1-.2.2l-5 3.7c-.2.2-.4.4-.4.6s0 .4.1.6.3.2.6.2h11.1z'
				></path>
			</svg>
		);
	}

	if (name === 'clock') {
		return (
			<svg
				css={css`
					width: 60px;
					height: 60px;
				`}
			>
				<path
					fill='#36B535'
					d='M46.6 35.7c-.7-1.6-1.6-3-2.8-4.2-1.2-1.2-2.6-2.2-4.2-2.9-1.6-.7-3.3-1-5.1-1-.4 0-.8.1-1 .4-.2.2-.4.6-.4 1v4.5c0 .4.1.7.3.9.2.2.5.4.9.4s.7-.1.9-.4.3-.5.3-.9v-2.9c1 .1 1.9.3 2.8.7 1.3.5 2.4 1.3 3.4 2.2s1.7 2.1 2.3 3.3.8 2.6.8 4.1c0 1.4-.3 2.8-.8 4-.5 1.2-1.3 2.3-2.2 3.3s-2 1.7-3.3 2.2c-1.2.5-2.6.8-4 .8s-2.8-.3-4-.8c-1.2-.5-2.3-1.3-3.3-2.2-.9-.9-1.7-2-2.2-3.3-.5-1.2-.8-2.6-.8-4 0-1.2.2-2.3.6-3.4.4-1.1.9-2.1 1.6-2.9.3-.4.4-.8.5-1.2s-.1-.7-.4-1c-.3-.3-.7-.4-1.1-.4s-.8.3-1.2.7c-.9 1.1-1.6 2.4-2.1 3.8s-.8 2.9-.8 4.4c0 1.8.3 3.5 1 5.1.7 1.6 1.6 3 2.9 4.2 1.2 1.2 2.6 2.2 4.2 2.9 1.6.7 3.3 1 5.1 1s3.5-.3 5.1-1c1.6-.7 3-1.6 4.2-2.9C45 49 46 47.6 46.6 46s1-3.3 1-5.1-.3-3.6-1-5.2z'
				></path>
			</svg>
		);
	}

	if (name === 'eye') {
		return (
			<svg
				css={css`
					width: 60px;
					height: 60px;
				`}
			>
				<path
					fill='#00cfcd'
					d='M34.1 51.5c-1.4-.4-2.7-.9-3.9-1.5S28 48.7 27 48s-1.7-1.5-2.4-2.3-1.2-1.5-1.5-2.1-.5-1.2-.5-1.6.2-.9.5-1.6.9-1.3 1.5-2.1 1.5-1.5 2.4-2.3 2-1.4 3.2-2.1 2.5-1.1 3.9-1.5 2.9-.6 4.4-.6c1.6 0 3.1.2 4.5.6s2.7.9 3.9 1.5 2.2 1.3 3.2 2.1 1.7 1.5 2.4 2.3 1.2 1.5 1.5 2.1.5 1.2.5 1.6-.2.9-.5 1.6-.8 1.3-1.5 2.1S51 47.2 50 48s-2 1.4-3.2 2.1-2.5 1.1-3.9 1.5-2.9.6-4.5.6c-1.5-.1-2.9-.3-4.3-.7zM41 48c.8-.3 1.5-.8 2-1.4s1.1-1.3 1.4-2 .5-1.6.5-2.5c0-.9-.2-1.7-.5-2.5s-.8-1.5-1.4-2-1.3-1-2-1.4-1.6-.5-2.5-.5-1.7.2-2.5.5-1.5.8-2.1 1.4-1 1.3-1.4 2-.5 1.6-.5 2.5c0 .9.2 1.7.5 2.5s.8 1.4 1.4 2 1.3 1.1 2 1.4 1.6.5 2.5.5 1.8-.2 2.6-.5zm-4.2-4.2c-.5-.5-.7-1-.7-1.7s.2-1.2.7-1.7 1-.7 1.7-.7 1.2.2 1.7.7.7 1 .7 1.7c0 .6-.2 1.2-.7 1.7s-1 .7-1.7.7-1.2-.3-1.7-.7z'
				></path>
			</svg>
		);
	}

	if (name === 'topxel') {
		return (
			<svg
				css={css`
					font-size: 40px;
					width: 30px;
					height: 30px;
					color: white;
				`}
			>
				<path
					id='gradientPath'
					d='M14.124 13.467a3.12 3.12 0 00-1.917-1.899L2.09 8.011c-3.315-1.156-2.469-6.06 1.036-6.06h17.49a3.106 3.106 0 013.109 3.108v17.49c0 3.506-4.904 4.334-6.06 1.037l-3.54-10.118z'
					fill='#fff'
				></path>
			</svg>
		);
	}
};


function App() {
	return (
		<div>
			<Global styles={globalStyles} />
			<Header />
			<SectionEatFresh />
			<SectionFoodWaste />
			<SectionExpiration />
			<SectionAlwaysFresh />
			<SectionOpeningTimes />
			<SectionDarkMode />
			<SectionQRCode />
		<Footer/>

		</div>
	);
}

export default App;
