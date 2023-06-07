/** @format */

import './acord.css';

function acord() {
	return (
		<div
			className="accordion"
			id="accordionExample"
		>
			<h2 className="titulo">FAQ</h2>

			<div className="accordion-item">
				<h2 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
						aria-expanded="false"
						aria-controls="collapseOne"
					>
						How many team members can I invite?
					</button>
				</h2>
				<div
					id="collapseOne"
					className="accordion-collapse collapse"
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						<p>
							You can invite up to 2 additional users on the Free plan. There is
							no limit on team members for the Premium plan.
						</p>
					</div>
				</div>
			</div>

			<div className="accordion-item">
				<h2 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						What is the maximum file upload size?
					</button>
				</h2>
				<div
					id="collapseTwo"
					className="accordion-collapse collapse"
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						<p>
							No more than 2GB. All files in your account must fit your allotted
							storage space.
						</p>
					</div>
				</div>
			</div>

			<div className="accordion-item">
				<h2 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
						aria-expanded="true"
						aria-controls="collapseThree"
					>
						How do I reset my password?
					</button>
				</h2>
				<div
					id="collapseThree"
					className="accordion-collapse collapse"
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						<p>
							Click “Forgot password” from the login page or “Change password”
							from your profile page. A reset link will be emailed to you.
						</p>
					</div>
				</div>
			</div>

			<div className="accordion-item">
				<h2 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseFour"
						aria-expanded="false"
						aria-controls="collapseFour"
					>
						Can I cancel my subscription?
					</button>
				</h2>
				<div
					id="collapseFour"
					className="accordion-collapse collapse "
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						<p>
							Yes! Send us a message and we’ll process your request no questions
							asked.
						</p>
					</div>
				</div>
			</div>

			<div className="accordion-item">
				<h2 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseFive"
						aria-expanded="false"
						aria-controls="collapseFive"
					>
						{' '}
						Do you provide additional support?
					</button>
				</h2>
				<div
					id="collapseFive"
					className="accordion-collapse collapse "
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						<p>
							Chat and email support is available 24/7. Phone lines are open
							during normal business hours.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default acord;
