import NavBar from './components/navBar';
import Footer from './components/footer';
import SectionImage from './components/sectionImage';
import ContainerCards from './components/containerCard';
import ContainerComents from './components/containerComent';
import CardsComents from './components/cardsComents';

import './App.css';

function App() {
	return (
		<>
			<NavBar />
			<SectionImage />
			<ContainerCards />
			<ContainerComents />
			<CardsComents />
			<Footer />
		</>
	);
}

export default App;
