import Logo from '../assets/images/logo.svg';

import '../index.css';

export default function NavBar() {
	return (
		<div className="container-nav">
			<nav>
				<img
					style={{width: '100px'}}
					src={Logo}
					alt="Logo"
				/>
				<ul>
					<li>Features</li>
					<li>Team</li>
					<li> Sign In</li>
				</ul>
			</nav>
		</div>
	);
}
