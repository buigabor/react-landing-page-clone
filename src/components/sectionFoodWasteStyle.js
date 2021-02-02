import { css } from '@emotion/react';
import { Wrapper } from '../util/Wrapper';

export const sectionFoodWaste = css`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	padding: 120px 40px 0 40px;
	.card-grid {
		display: grid;
		align-items: center;
		justify-items: center;
		justify-content: center;
		grid-template-columns: min-content min-content;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'lettuce pineapple'
			'tomato carrot';
		gap: 22px;
	}

	.wrapper {
		${Wrapper}
	}
`;