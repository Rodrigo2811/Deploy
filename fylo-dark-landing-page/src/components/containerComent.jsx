import ImageProductive from '../assets/images/illustration-stay-productive.png';
import arrow from '../assets/images/icon-arrow.svg';

import '../index.css';

export default function ContainerComent() {
	return (
		<div className="containerComent">
			<div className="sub-container-coment">
				<div className="container-coment-img">
					<img
						src={ImageProductive}
						alt="imagemProductive"
					/>
				</div>
				<div className="descripton-productive">
					<h2>Stay productive, wherever you are</h2>

					<p>
						Never let location be an issue when accessing your files. Fylo has
						you covered for all of your file storage needs.
					</p>

					<p>
						Securely share files and folders with friends, family and colleagues
						for live collaborarion. No email attachments required.
					</p>

					<a href="#">
						See how fylo works
						<img
							src={arrow}
							alt="arrow"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
