import React from 'react';
import { CircleContainer } from '../util/CircleContainer';
import { writeBottomTextInCircle, writeTopTextInCircle } from '../util/writeTextInCircle';
import { notificationsWrapperStyle, sectionAlerts } from './sectionAlertsStyle';

export default function SectionAlerts() {
  return (
		<>
			<section css={sectionAlerts}>
				<div>
					<CircleContainer bgColor='avocado-circle'>
						<div>
							<h1 className='avocado-top-text'>
								{writeTopTextInCircle('FRESH UNTIL TOMORROW', 10)}
							</h1>
						</div>
						<div className='circle-icon'>🥑</div>
						<div>
							<h1 className='avocado-bottom-text'>
								{writeBottomTextInCircle('ODACOVA', 8)}
							</h1>
						</div>
					</CircleContainer>
					<CircleContainer bgColor='milk-circle'>
						<div>
							<h1 className='milk-top-text'>
								{writeTopTextInCircle('EXPIRES TOMORROW', 10)}
							</h1>
						</div>
						<div className='circle-icon'>🥛</div>
						<div>
							<h1 className='milk-bottom-text'>
								{writeBottomTextInCircle('KLIM', 8)}
							</h1>
						</div>
					</CircleContainer>
					<CircleContainer bgColor='bread-circle'>
						<div>
							<h1 className='avocado-top-text'>
								{writeTopTextInCircle('FRESH UNTIL TOMORROW', 10)}
							</h1>
						</div>
						<div className='circle-icon'>🍞</div>
						<div>
							<h1 className='bread-bottom-text'>
								{writeBottomTextInCircle('DAERB DECILS', 8)}
							</h1>
						</div>
					</CircleContainer>
				</div>
				<div className='wrapper'>
					<h2>Alerts, always in time.</h2>
					<p>
						Enable notifications and Kiff will alert you when your food stops
						being fresh or is about to expire.
					</p>
				</div>

				<div css={notificationsWrapperStyle}>
					<div>
						<h3>
							<span>🥑</span>
							Fresh until tomorrow
						</h3>
						<p>
							Your food 'Avocado' is still fresh. Enjoy it before it's too late.
						</p>
					</div>
					<div>
						<h3>
							<span>🥛</span>
							Expires tomorrow
						</h3>
						<p>
							Your food 'Milk' is going to expire. Don't let it go to waste.
						</p>
					</div>
					<div>
						<h3>
							<span>🍞</span>
							Fresh until tomorrow
						</h3>
						<p>
							Your food 'Sliced bread' is still fresh. Enjoy it before it's too
							late.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
