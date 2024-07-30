import React from 'react';

import resume from '../../public/img/Mason_Galat_Resume.pdf';

export default function About(): React.JSX.Element {
    return (
        <section className="about">
            <div className="about__container">
                <h1 className="about__title">Hi, I'm Mason</h1>
                {/* <h2 className="about__name">Hi, I'm Mason.</h2> */}
                <p className="about__description">
                    A motivated web developer/software engineer with an eagerness to
                    create smooth, appealing websites.
                    I am excited to continue expanding my skillset with
                    honorable languages and tools, while
                    still maintaining drive and focus. I love to
                    learn about technology and implement it whenever possible. I
                    believe that every problem out there is worth solving
                    and should be pursued with confidence!
                </p>
                <p className="about__skills">
                    JavaScript, TypeScript, Python, React, Django, Jest, HTML/CSS, SASS, Git
                </p>
                <a
                    className="about__resume"
                    href={resume}
                    target="_blank"
                >
                    Resume
                </a>
            </div>
        </section>
    );
};