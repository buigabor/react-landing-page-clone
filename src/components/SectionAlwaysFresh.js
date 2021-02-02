/** @jsxImportSource @emotion/react */
import React from 'react';
import { CardContainer } from '../util/CardContainer';
import { renderSVG } from '../util/renderSVG';
import { sectionAlwaysFresh } from './sectionAlwaysFesh';

export default function SectionAlwaysFresh() {
  return (
		<>
			<section css={sectionAlwaysFresh}>
				<div>
					<CardContainer bgColor='pasta'>
						<div className='card__header-wrapper'>
							<span className='card__header-icon'>🍝</span>
							<span className='card__header-number'>2</span>
						</div>
						<div className='card__text-wrapper'>
							<span className='card__text-h'>Pasta</span>
							<span className='card__text-p milk'>Fresh until tomorrow</span>
						</div>
					</CardContainer>
					<CardContainer bgColor='white-second'>
						<div className='card__header-wrapper expires'>
							<span className='card__header-icon-svg'>
								{renderSVG('clock')}
							</span>
							<span className='card__header-clock-text'>Shelf life</span>
						</div>
						<div className='card__text-wrapper'>
							<span className='card__text-h'>7 days</span>
							<span className='card__text-p'>Feb 1, 2021</span>
						</div>
					</CardContainer>
					<CardContainer bgColor='white-third'>
						<div className='card__header-wrapper expires'>
							<span className='card__header-icon-svg'>{renderSVG('eye')}</span>
							<span className='card__header-eye-text'>Tracked for</span>
						</div>
						<div className='card__text-wrapper'>
							<span className='card__text-h'>Today</span>
							<span className='card__text-p'>Feb 1, 2021</span>
						</div>
					</CardContainer>
				</div>
				<div className='wrapper'>
					<h2>Enjoy your food always fresh.</h2>
					<p>
						Set the desired shelf life for each food and Kiff will remind you to
						eat it before the time runs out.
					</p>
				</div>
			</section>
		</>
	);
}
