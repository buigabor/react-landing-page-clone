import { css } from '@emotion/react';


export const sectionDarkmode = css`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 150px;
	width: 100%;
	max-height: 540px;
	margin-top: 120px;
	padding: 0px 40px 0 40px;
	margin: 240px 0px;
	background: rgb(20, 20, 20);
	color: rgb(255, 255, 255);

	.darkmode-text-wrapper {
		h2 {
			font-size: 55px;
		}

		p {
			font-size: 22px;
		}
		max-width: 450px;
	}

	.darkmode-img-wrapper {
		img {
			max-width: 360px;
		}
	}

	[data-aos='slide-up-custom'] {
		transform: translateY(80px);
		transition-property: transform;

		&.aos-animate {
			transform: translateY(0px);
		}
	}
`;