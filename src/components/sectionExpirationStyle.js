import { css } from '@emotion/react';
import { Wrapper } from '../util/Wrapper';

export const sectionExpiration = css`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	padding: 120px 40px 0 40px;

	.wrapper {
		${Wrapper}
	}
`;