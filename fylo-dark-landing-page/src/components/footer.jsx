import Logo from '../assets/images/logo.svg';
import iconeLocation from '../assets/images/icon-location.svg';
import iconePhone from '../assets/images/icon-phone.svg';
import iconeEmail from '../assets/images/icon-email.svg';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa6';

import '../index.css';

export default function Footer() {
	return (
		<div className="container-footer">
			<div className="container-location">
				<img
					style={{width: '120px', height: 'auto'}}
					src={Logo}
					alt="Logo"
				/>

				<p>
					<img
						src={iconeLocation}
						alt="icone-localização"
					/>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua
				</p>
			</div>

			<div className="container-contact">
				<p>
					<img
						src={iconePhone}
						alt="icone-phone"
					/>
					+1-543-123-4567
				</p>
				<p>
					<img
						src={iconeEmail}
						alt="icon-email"
					/>
					example@fylo.com
				</p>
			</div>

			<div className="container-pages">
				<span>
					<a href=""> About Uss</a>
				</span>
				<span>
					<a href="">Jobs</a>
				</span>
				<span>
					<a href="">Press</a>
				</span>
				<span>
					<a href="#">Blog</a>
				</span>
				<span>
					<a href="#">Contact Us</a>
				</span>
				<span>
					<a href="#">Terms</a>
				</span>
				<span>
					<a href="#">Privacy</a>
				</span>
			</div>

			<div className="redes-sociais">
				<FaFacebook className="icon-redes" />
				<FaTwitter className="icon-redes" />
				<FaInstagram className="icon-redes" />
			</div>
		</div>
	);
}
