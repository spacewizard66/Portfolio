import React from 'react';

import banner from '../../public/img/banner.png';

export default function Home(props: React.ReactNode): React.ReactNode {
	return (
		<>
			<header className="nav">
				<nav className="nav__item">
					<a
						className="nav__link"
						href="img/Mason_Galat_Resume.pdf"
						target="_blank"
					>
						Resume
					</a>
				</nav>
			</header>
			<main>
				<section className="about">
					<header>
						<h1 className="about__title">Web Developer</h1>
					</header>
					<p className="about__skills">
						JavaScript, React, Python, Django, HTML/CSS, SASS/SCSS,
						Git
					</p>
					<h2 className="about__name">Hi, I'm Mason.</h2>
					<p className="about__description">
						A motivated front-end developer with an eagerness to
						create smooth, appealing websites.
						I am excited to continue expanding my skillset with
						honorable languages and tools, while
						still maintaining drive and focus. I love to
						learn about technology and implement it whenever possible. I
						believe that every problem out there is worth solving
						and should be pursued with confidence!
					</p>
				</section>
				<section className="section2">
					<img className="section2__banner" src={banner} alt=""></img>
					<section className="projects">
						<div className="projects__title">
							<h2 className="projects__title-text">Projects</h2>
						</div>
						{props.children}
					</section>
				</section>
			</main>
		</>
	);
}
