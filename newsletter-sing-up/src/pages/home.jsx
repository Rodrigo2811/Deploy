import imgIlustration from '../images/illustration-sign-up-desktop.svg';
import iconSucesso from '../images/icon-success.svg';
import imgIlustrationMobile from '../images/illustration-sign-up-mobile.svg';

import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';

import ValorContext from '../context/Contexto';

export default function Home() {
	const {valor, setValor} = useContext(ValorContext);

	const navigate = useNavigate();

	function hadleSubmit(e) {
		e.preventDefault();

		if (valor === '') {
			const msg = document.querySelector('span');
			const input = document.querySelector('input');
			msg.classList.add('error-mensage');
			input.style.border = '1px solid hsl(4, 100%, 67%)';
			input.style.backgroundColor = 'hsl(4, 100%, 85%)';
		} else {
			document.querySelector('span').style.display = 'none';
			navigate('/Sucesso');
		}
	}

	return (
		<div className="container-form">
			<img
				className="imgMobile"
				src={imgIlustrationMobile}
				alt="logoMobal"
			/>
			<div className="container-left">
				<h1>Stay updated!</h1>

				<p>Join 600,000+ product managers receiving monthly updades on:</p>

				<p className="item-list">
					<img
						style={{width: '12px', marginRight: '5px'}}
						src={iconSucesso}
						alt="icone-sucesso"
					/>
					Product discovery and building what matters
				</p>
				<p className="item-list">
					<img
						style={{width: '12px', marginRight: '5px'}}
						src={iconSucesso}
						alt="icone-sucesso"
					/>
					Measuring to ensure updates are a success
				</p>
				<p className="item-list">
					<img
						style={{width: '12px', marginRight: '5px'}}
						src={iconSucesso}
						alt="icone-sucesso"
					/>
					And much more!
				</p>
				<form>
					<label htmlFor="email">Email anddress</label>
					<span>Valid email required</span>

					<input
						value={valor}
						type="email"
						placeholder="email@company.com"
						name="email"
						onChange={(e) => setValor(e.target.value)}
					/>

					<button
						type="submit"
						onClick={hadleSubmit}
					>
						Subscribe to monthly newsletter
					</button>
				</form>
			</div>

			<div className="container-right">
				<img
					className="imgDesktop"
					style={{width: '225px'}}
					src={imgIlustration}
					alt="img-principal"
				/>
			</div>
		</div>
	);
}
