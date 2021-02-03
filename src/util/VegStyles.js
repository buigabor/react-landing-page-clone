import { css } from '@emotion/react';


export const vegStyles = (props) => {
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
