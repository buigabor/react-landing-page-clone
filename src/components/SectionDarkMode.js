/** @jsxImportSource @emotion/react */
import React from 'react';
import { sectionDarkmode } from './sectionDarkModeStyle';

export default function SectionDarkMode() {
  return (

			<section css={sectionDarkmode}>
				<div className='darkmode-text-wrapper'>
					<h2>And of course, dark mode.</h2>
					<p>
						Perfect for those midnight trips to the fridge for a healthy snack.
					</p>
				</div>
				<div className='darkmode-img-wrapper'>
					<img src='img/en-dark-ns-cut.png' alt='' />
				</div>
			</section>

	);
}
