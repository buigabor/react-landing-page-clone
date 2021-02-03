/** @jsxImportSource @emotion/react */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { React, useEffect } from 'react';
import { CircleContainer } from '../util/circleContainer';
import { writeBottomTextInCircle, writeTopTextInCircle } from '../util/writeTextInCircle';
import { sectionAlerts } from './sectionAlertsStyle';


export default function SectionAlerts() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

  return (
		<section css={sectionAlerts}>
			<div>
				<CircleContainer bgColor='avocado-circle'>
					<div>
						<h1 className='avocado-top-text'>
							{writeTopTextInCircle('FRESH UNTIL TOMORROW', 10)}
						</h1>
					</div>
					<div className='circle-icon'>
						<span role='img' aria-label='Avocado'>
							🥑
						</span>
					</div>
					<div>
						<h1 className='avocado-bottom-text'>
							{writeBottomTextInCircle('ODACOVA', 8)}
						</h1>
					</div>
				</CircleContainer>
				<CircleContainer
					className='milk-anchor'
					data-aos-delay='200'
					data-aos='grow-size'
					bgColor='milk-circle'
				>
					<div>
						<h1 className='milk-top-text'>
							{writeTopTextInCircle('EXPIRES TOMORROW', 10)}
						</h1>
					</div>
					<div className='circle-icon'>
						{' '}
						<span role='img' aria-label='Milk'>
							🥛
						</span>
					</div>
					<div>
						<h1 className='milk-bottom-text'>
							{writeBottomTextInCircle('KLIM', 8)}
						</h1>
					</div>
				</CircleContainer>
				<CircleContainer
					data-aos-delay='400'
					data-aos='grow-size'
					bgColor='bread-circle'
					data-aos-anchor='.milk-anchor'
				>
					<div>
						<h1 className='avocado-top-text'>
							{writeTopTextInCircle('FRESH UNTIL TOMORROW', 10)}
						</h1>
					</div>
					<div className='circle-icon'>
						<span role='img' aria-label='Bread'>
							🍞
						</span>
					</div>
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

			{/* <div css={notificationsWrapperStyle}>
				<div
					data-aos='slide-up-custom'
					className='avocado-anchor'
				>
					<h3>
						<span role='img' aria-label='Avocado'>
							🥑
						</span>
						Fresh until tomorrow
					</h3>
					<p>
						Your food 'Avocado' is still fresh. Enjoy it before it's too late.
					</p>
				</div>
				<div
					data-aos-anchor='avocado-anchor'
					data-aos='slide-up-custom'
					data-delay='300'
					className='milk-anchor'
				>
					<h3>
						<span role='img' aria-label='Milk'>
							🥛
						</span>
						Expires tomorrow
					</h3>
					<p>Your food 'Milk' is going to expire. Don't let it go to waste.</p>
				</div>
				<div
					data-delay='600'
					data-aos-anchor='milk-anchor'
					data-aos='slide-up-custom'
				>
					<h3>
						<span role='img' aria-label='Bread'>
							🍞
						</span>
						Fresh until tomorrow
					</h3>
					<p>
						Your food 'Sliced bread' is still fresh. Enjoy it before it's too
						late.
					</p>
				</div>
			</div> */}
		</section>
	);
}
