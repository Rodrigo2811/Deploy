import iconeSucesso from '../images/icon-success.svg';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import ValorContext from '../context/Contexto';

export default function Sucsses() {
	const {valor} = useContext(ValorContext);
	const navigate = useNavigate();

	return (
		<>
			<div className="container-sucesso">
				<img
					className="img-sucesso"
					src={iconeSucesso}
					alt="icone-sucesso"
					style={{width: '30px'}}
				/>

				<h1 className="title-mensage">
					Thanks for <br />
					subscribing!
				</h1>

				<p className="mensage-validate">
					A confirmation email has been sent to <b>{valor}</b>. Please open it
					and click the button inside to confirm your subscription.
				</p>

				<button
					className="btn-dismiss"
					onClick={() => navigate('/')}
				>
					Dismiss message
				</button>
			</div>
		</>
	);
}
