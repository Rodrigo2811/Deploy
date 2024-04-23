import profile from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';

export default function CardsComents() {
	return (
		<div className="container-cards-coments">
			<div className="cardComents">
				<p>
					Fylo has improved our team productivity by an order of magnitude.
					Since making the switch out team has become al well-oiled
					collaboration machine.
				</p>
				<div className="card-rodape">
					<img
						src={profile}
						alt="profile1"
					/>

					<div>
						<p>Satish Patel</p>
						<p>Founder & CEO, Huddle</p>
					</div>
				</div>
			</div>

			<div className="cardComents">
				<p>
					Fylo has improved our team productivity by an order of magnitude.
					Since making the switch out team has become al well-oiled
					collaboration machine.
				</p>
				<div className="card-rodape">
					<img
						src={profile2}
						alt="profile2"
					/>

					<div>
						<p>Bruce Mckenzie</p>
						<p>Founder & CEO, Huddle</p>
					</div>
				</div>
			</div>

			<div className="cardComents">
				<p>
					Fylo has improved our team productivity by an order of magnitude.
					Since making the switch out team has become al well-oiled
					collaboration machine.
				</p>
				<div className="card-rodape">
					<img
						src={profile3}
						alt="profile3"
					/>

					<div>
						<p>Iva Boyd</p>
						<p>Founder & CEO, Huddle</p>
					</div>
				</div>
			</div>

			<div className="container-form">
				<h2>Get early access today</h2>
				<p>
					It only takes a minute to sign up and our free starter tier is
					extremely generous. If you have ane questions, our support team would
					be happy to help you.
				</p>
				<form>
					<input
						type="email"
						name=""
						id=""
					/>
					<button className="btn-startedFree">Get Started For Free</button>
				</form>
			</div>
		</div>
	);
}
