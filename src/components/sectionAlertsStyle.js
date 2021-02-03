import { css, keyframes } from '@emotion/react';
import { wrapper } from '../util/wrappers';

const slideUpAndDisappear = keyframes`
  0% {
    transform: translateY(200px);
  }

  70% {
    transform: translateY(0px);
  }

	85% {
    transform: translateY(10px);
		opacity: 0.5
  }

	100%{transform: translateY(15px);
		opacity: 0}
`;


export const sectionAlerts = css`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	position: relative;
	padding: 120px 40px 0 40px;
	.card-grid {
		display: grid;
		align-items: center;
		justify-items: center;
		justify-content: center;
		grid-template-columns: min-content min-content;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'eggs cheese'
			'matcha tomatosauce';
		gap: 22px;
	}

	.wrapper {
		${wrapper}
	}

	[data-aos='grow-size'] {
		transform: scale(0);
		transition-property: transform;

		&.aos-animate {
			transform: scale(1);
		}
	}

	[data-aos='slide-up-custom'] {
		&.aos-animate {
			animation: ${slideUpAndDisappear} 1.8s ease;
		}
	}
`;

export const notificationsWrapperStyle = css`
	position: absolute;
	width: 100%;
	bottom: -40px;
	left: 75px;

	div {
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(20px);
		max-width: 340px;
		border-radius: 12px;
		padding: 2px 16px;
		color: rgb(255, 255, 255);
		text-align: left;

		h3 {
			font-size: 15px;
			margin: 5px 0;
		}

		span {
			margin-right: 5px;
		}
	}

`;
