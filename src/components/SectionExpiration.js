/** @jsxImportSource @emotion/react */
import React from 'react';
import { CardContainer } from '../util/CardContainer';
import { renderSVG } from '../util/renderSVG';
import { sectionExpiration } from './sectionExpirationStyle';

export default function SectionExpiration() {
  return (
		<section css={sectionExpiration}>
			<div className='wrapper'>
				<h2>Expiration dates under control.</h2>
				<p>
					If your food has an expiration date, Kiff will keep it under control
					so you can eat it before it's too late.
				</p>
			</div>
			<div>
				<CardContainer bgColor='milk'>
					<div className='card__header-wrapper'>
						<span className='card__header-icon' role='img' aria-label='Milk'>
							🥛
						</span>
					</div>
					<div className='card__text-wrapper'>
						<span className='card__text-h'>Milk</span>
						<span className='card__text-p milk'>Expires in 15 days</span>
					</div>
				</CardContainer>
				<CardContainer bgColor='white-second'>
					<div className='card__header-wrapper expires'>
						<span className='card__header-icon-svg'>
							{renderSVG('sand-glass')}
						</span>
						<span className='card__header-expires-text'>Expires in</span>
					</div>
					<div className='card__text-wrapper'>
						<span className='card__text-h'>7 days</span>
						<span className='card__text-p'>Feb 1, 2021</span>
					</div>
				</CardContainer>
				<CardContainer bgColor='white-third'>
					<div className='card__header-wrapper expires'>
						<span className='card__header-icon-svg'>
							{renderSVG('sand-glass')}
						</span>
						<span className='card__header-expires-text'>Expires</span>
					</div>
					<div className='card__text-wrapper'>
						<span className='card__text-h'>Today</span>
						<span className='card__text-p'>Feb 1, 2021</span>
					</div>
				</CardContainer>
			</div>
		</section>
	);
}
