/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionAlerts from './components/SectionAlerts';
import SectionAlwaysFresh from './components/SectionAlwaysFresh';
import SectionDarkMode from './components/SectionDarkMode';
import SectionEatFresh from './components/SectionEatFresh';
import SectionExpiration from './components/SectionExpiration';
import SectionFoodWaste from './components/SectionFoodWaste';
import SectionOpeningTimes from './components/SectionOpeningTimes';
import SectionQRCode from './components/SectionQRCode';

const globalStyles = css`
	body {
	}
	html {
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
`;

function App() {
	return (
		<div>
			<Global styles={globalStyles} />
			<Header />
			<SectionEatFresh />
			<SectionFoodWaste />
			<SectionExpiration />
			<SectionAlwaysFresh />
			<SectionOpeningTimes />
			<SectionAlerts/>
			<SectionDarkMode />
			<SectionQRCode />
		<Footer/>

		</div>
	);
}

export default App;
