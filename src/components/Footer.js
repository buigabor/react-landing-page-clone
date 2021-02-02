/** @jsxImportSource @emotion/react */

import React from 'react';
import { renderSVG } from '../util/renderSVG';
import { footerStyles } from './footerStyle';

export default function Footer() {
  return (
		<>
			<footer css={footerStyles}>
				<div className='footer-top-wrapper'>
					<div className='footer__copyright'>
						<a href='#1'>
							{renderSVG('topxel')} <span>topxel</span>
						</a>
						<p>
							Kiff, an app from Topxel.
							<br />© Copyright 2020-2021. All Rights Reserved.
						</p>
						<ul>
							<li>
								<a href='#1'>Terms</a>
							</li>
							<li>
								<a href='#1'>Privacy</a>
							</li>
						</ul>
					</div>
					<div className='footer__nav'>
						<ul>
							<li>
								<a href='#1'>Home</a>
							</li>
							<li>
								<a href='#1'>Press kit</a>
							</li>
							<li>
								<a href='#1'>About</a>
							</li>
							<li>
								<a href='#1'>Support</a>
							</li>
							<li>
								<a href='#1'>Download</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='footer-bottom-wrapper'>
					<div>
						<button>ES</button>
					</div>
					<div className='social-media-wrapper'>
						<ul>
							<li>
								<a
									href='https://twitter.com/usekiff'
									target='_blank'
									rel='nofollow noopener noreferrer'
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/usekiff/'
									target='_blank'
									rel='nofollow noopener noreferrer'
								>
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}
