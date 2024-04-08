import {createContext, useState} from 'react';

const ValorContext = createContext();

export const ValorProvider = ({children}) => {
	const [valor, setValor] = useState('');

	return (
		<ValorContext.Provider value={{valor, setValor}}>
			{children}
		</ValorContext.Provider>
	);
};

export default ValorContext;
