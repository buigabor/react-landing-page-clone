import styled from '@emotion/styled';
import { vegStyles } from './vegStyles';

export const CircleContainer = styled.div`
	${vegStyles};
	width: 220px;
	height: 220px;
	border-radius: 50%;
	box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
	color: rgb(0, 0, 0);
	padding: 14px;

	div .milk-top-text {
		transform: rotate(-72deg);
		font-size: 16px;
		opacity: 0.5;
		font-weight: 500;
		span {
			height: 200px;
			position: absolute;
			width: 20px;
			left: 10px;
			top: -75px;
			transform-origin: center;
			font-weight: 600;
		}
	}

	div .milk-bottom-text {
		transform: rotate(-13deg);
		font-size: 15px;
		opacity: 0.8;
		font-weight: 600;

		span {
			height: 200px;
			position: absolute;
			width: 15px;
			left: 70px;
			top: 155px;
			transform-origin: 10px -100px;
		}
	}

	div .avocado-top-text {
		transform: rotate(-92deg);
		font-size: 16px;
		opacity: 0.5;
		font-weight: 500;

		span {
			height: 200px;
			position: absolute;
			width: 20px;
			left: 10px;
			top: -100px;

			transform-origin: center;
		}
	}

	div .avocado-bottom-text {
		transform: rotate(-20deg);
		font-size: 15px;
		opacity: 0.8;
		font-weight: 600;

		span {
			height: 200px;
			position: absolute;
			width: 20px;
			left: 70px;
			top: 158px;
			transform-origin: 10px -100px;
		}
	}
	div .bread-bottom-text {
		transform: rotate(-45deg);
		font-size: 15px;
		opacity: 0.8;
		font-weight: 600;
		span {
			height: 200px;
			position: absolute;
			width: 20px;
			left: 43px;
			top: 145px;
			transform-origin: 10px -100px;
		}
	}

	.circle-icon {
		font-size: 75px;
		position: absolute;
		top: 60px;
		left: 70px;
	}
`;
