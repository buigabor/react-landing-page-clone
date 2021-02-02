
/** @jsxImportSource @emotion/react */
import React from 'react';
import { CardContainer } from '../util/CardContainer';
import { sectionOpeningTime } from './sectionOpeningTimesStyle';

export default function SectionOpeningTimes() {
  return (
		<section css={sectionOpeningTime}>
			<div className='wrapper'>
				<h2>How long has it been open?</h2>
				<p>
					Open or stored for too long? Kiff will track the time since you
					opened, bought, or cooked your food.
				</p>
			</div>
			<div className='card-grid'>
				<CardContainer bgColor='eggs' className='card-container'>
					<div className='card__header-wrapper'>
						<span className='card__header-icon' role='img' aria-label='Egg'>
							🥚
						</span>
						<span className='card__header-number'>28</span>
					</div>
					<div className='card__text-wrapper'>
						<span className='card__text-h'>Eggs</span>
						<span className='card__text-p'>Fresh for 7 more days</span>
					</div>
				</CardContainer>
				<CardContainer bgColor='cheese'>
					<div className='card__header-wrapper'>
						<span className='card__header-icon' role='img' aria-label='Cheese'>
							🧀
						</span>
						<span className='card__header-number'>12</span>
					</div>
					<div className='card__text-wrapper'>
						<span className='card__text-h'>Cheese</span>
						<span className='card__text-p'>Fresh for 8 more days</span>
					</div>
				</CardContainer>
				<CardContainer bgColor='matcha'>
					<div className='card__header-wrapper'>
						<span className='card__header-icon' role='img' aria-label='Mathca'>
							🍵
						</span>
						<span className='card__header-number'>9</span>
					</div>
					<div className='card__text-wrapper'>
						<span className='card__text-h'>Matcha</span>
						<span className='card__text-p'>Fresh for 51 more days</span>
					</div>
				</CardContainer>
				<CardContainer bgColor='tomatosauce'>
					<div className='card__header-wrapper'>
						<span
							className='card__header-icon'
							role='img'
							aria-label='Tomato Sauce'
						>
							🥫
						</span>
						<span className='card__header-number'>2</span>
					</div>
					<div className='card__text-wrapper'>
						<span className='card__text-h'>Tomato sauce</span>
						<span className='card__text-p'>Fresh untiltomorrow</span>
					</div>
				</CardContainer>
			</div>
		</section>
	);
}
