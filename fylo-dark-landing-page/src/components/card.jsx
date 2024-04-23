import '../index.css';

// eslint-disable-next-line react/prop-types
export default function Cards({img, alt, title, description}) {
	return (
		<div className="container-card">
			<div className="card">
				<img
					style={{width: '50px'}}
					src={img}
					alt={alt}
				/>
				<p style={{width: '100%', fontWeight: '700', fontSize: '14px'}}>
					{title}
				</p>
				<p style={{width: '100%'}}>{description}</p>
			</div>
		</div>
	);
}
