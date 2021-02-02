import { css } from '@emotion/react';
import { Wrapper } from '../util/Wrapper';


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
		${Wrapper}
	}
`;

export const notificationsWrapperStyle = css`
	position: absolute;
	width: 100%;
	bottom: 0px;

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
