import Cards from './card';
import iconAccess from '../assets/images/icon-access-anywhere.svg';
import iconSecutiry from '../assets/images/icon-security.svg';
import incoRealTime from '../assets/images/icon-collaboration.svg';
import iconStoreFIle from '../assets/images/icon-any-file.svg';

import '../index.css';

export default function ContainerCards() {
	return (
		<div className="container-section">
			<h1>All your files in one secure location, Acessible anywhere</h1>

			<p>
				Fyle sores all your most importante files in one secure location. <br />
				Access them wherever you need, share and collaborate with <br /> friends
				family, and co-workers.
			</p>

			<button className="btn-getStarted">Get Started</button>

			<div className="sub-container-card">
				<Cards
					img={iconAccess}
					alt="Access your file"
					title="Access your file, anywhere"
					description="The ability to use a smartphone, tablet, or computer
					to access your account means your files follow you everywhere."
				/>

				<Cards
					img={iconSecutiry}
					alt="icon-security"
					title="Security you can trust"
					description="2-factor authentication and user-controlled encryption are just a couple of the secyrity features we allow do help secure your files."
				/>

				<Cards
					img={incoRealTime}
					alt="ico-RealTime"
					title="Real-time Collaboration"
					description="Securely share files and folders with friends, fammily and colleagues for live collaborarion. No email attachments required."
				/>

				<Cards
					img={iconStoreFIle}
					alt="icon Store file"
					title="Store any type of file"
					description="Whether you're sharing holidays photos or work documents, fylo has you covered allowing for all file types to be securely stored and shared."
				/>
			</div>
		</div>
	);
}
