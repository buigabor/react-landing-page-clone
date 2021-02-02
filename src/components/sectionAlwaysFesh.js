import { css } from '@emotion/react';
import { Wrapper } from '../util/Wrapper';


export const sectionAlwaysFresh = css`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	padding: 0px 40px 0 40px;

	.wrapper {
		${Wrapper}
	}
`;
