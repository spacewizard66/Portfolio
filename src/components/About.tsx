import React from 'react';

import resume from '../../public/img/Mason_Galat_Resume.pdf';

export default function About(props: {children: React.JSX.Element[]}): React.JSX.Element {
    return (
        <section className="about">
            <div className="about__container">
                <h1 className="about__title">Hi, I'm Mason G.</h1>
                <p className="about__description">
                    Welcome to my portfolio!<br></br>I am a motivated web developer with an eagerness to
                    create smooth, appealing websites.
                    I am excited to continue expanding my skillset with
                    honorable languages and tools, while
                    still maintaining drive and focus. I love to
                    learn about technology and implement it whenever possible. I
                    believe that every problem out there is worth solving
                    and should be pursued with confidence!
                </p>
                {props.children[0]}
                <a
                    className="about__resume"
                    href={resume}
                    target="_blank"
                    title="Mason's Resume"
                    >
                    Resume
                </a>
                {props.children[1]}
            </div>
        </section>
    );
};