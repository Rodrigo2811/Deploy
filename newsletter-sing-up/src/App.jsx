import {Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Sucesso from './pages/sucesso';

import {ValorProvider} from './context/Contexto';

import './App.css';

function App() {
	return (
		<>
			<ValorProvider>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/Sucesso"
						element={<Sucesso />}
					/>
				</Routes>
			</ValorProvider>
		</>
	);
}

export default App;
