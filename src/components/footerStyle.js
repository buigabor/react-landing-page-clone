import { css } from '@emotion/react';

export const footerStyles = css`
	display: flex;
	flex-direction: column;
	background-color: #000000;
	margin-top: 120px;
	padding: 25px;
	.footer {
		&-top-wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 40px 0;
		}

		&__copyright {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding-left: 50px;
			a {
				display: flex;
				align-items: center;
				justify-content: center;
				text-decoration: none;
				span {
					color: #fff;
					font-size: 40px;
					font-weight: 700;
				}
			}

			p {
				margin-bottom: 24px;
				opacity: 0.45;
				color: #fff;
				opacity: 0.45;
				max-width: 220px;
			}

			ul {
				display: flex;
				margin: 0;
				padding: 0;

				li {
					list-style: none;
					margin-right: 15px;
					a {
						text-decoration: none;
						color: #fff;
						border-bottom: 1px solid rgb(255, 255, 255, 0.45);
						padding: 3px 0;
						transition: all 0.4s ease;
						&:hover {
							border-bottom: 1px solid rgb(255, 255, 255);
						}
					}
				}
			}
		}

		&__nav {
			display: flex;
			justify-content: center;
			align-items: center;

			ul {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			li {
				list-style: none;
				margin: 0 10px;
				a {
					text-decoration: none;
					color: #fff;
					font-size: 30px;
					padding: 10px 20px;
					border-radius: 8px;
					&:hover {
						background-color: rgba(255, 255, 255, 0.1);
					}
				}
			}
		}

		&-bottom-wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			div {
				margin-left: 50px;
				button {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 8px;
					border-radius: 8px;
					border: none;
					background-color: rgba(255, 255, 255, 0.1);
					cursor: pointer;
					font-size: 0.8125rem;
					font-weight: 500;
					color: rgb(131, 131, 131);
					transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
				}
			}
		}
	}

	.social-media-wrapper {
		ul {
			display: flex;
			li {
				list-style: none;
				a {
					text-decoration: none;
					color: #fff;
					opacity: 0.45;
					font-size: 22px;
					margin-right: 30px;
					transition: opacity 0.4s ease 0s;
					&:hover {
						opacity: 1;
					}
				}
			}
		}
	}
`;