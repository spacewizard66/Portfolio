import React from 'react';

import banner from '../../public/img/banner.png';

export default function Home(props: {children: React.JSX.Element[]}): React.JSX.Element {
	return (
		<main className="main">
			<div className="main__container">
				<img className="main__banner" src={banner} alt=""></img>
				<div className="main__title">
					<h2 className="main__title__text">Projects</h2>
				</div>
				{props.children[0]}
				<div className="main__title main__title--2">
					<h2 className="main__title__text">Certifications</h2>
				</div>
				{props.children[1]}
			</div>
		</main>
	);
};
