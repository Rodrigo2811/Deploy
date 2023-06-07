/** @format */

import './App.css';

import Acord from './assets/components/Acordion';

function App() {
	return (
		<div className="container-principal">
			<div className="container-left">
				<div className="img-desktop1"></div>
				<div className="img-desktop2"></div>
				<div className="img-desktop3"></div>
				<div className="container-mobile"></div>
			</div>
			<div className="conainer-right">
				<Acord />
			</div>
		</div>
	);
}

export default App;
