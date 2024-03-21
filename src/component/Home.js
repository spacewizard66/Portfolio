import React from 'react';
import { useInView } from 'react-intersection-observer';
import Projects from '../projects.js';

export default function Home() {
    // Brings viewport back to top of page on unload (refresh)
    // to help animation effects
    window.onunload = function () {
        window.scrollTo(0, 0);
    }


    // Declaring options for useInView() hook
    const options = {
        triggerOnce: true,
        threshold: 0.1,
    }

    // useInView hooks for each project that returns
    //  a boolean (true, false) of ref if in viewport.
    // Accomplishes animation logic for projects.
    const [ project1Ref, project1 ] = useInView(options);
    const [ project2Ref, project2 ] = useInView(options);
    const [ project3Ref, project3 ] = useInView(options);
    const [ project4Ref, project4 ] = useInView(options);
    const [ project5Ref, project5 ] = useInView(options);
    const [ project6Ref, project6 ] = useInView(options);

    // Assigning imported document to variable
    const projects = Projects;

    // Array to store all projects during loop
    // then total array gets rendered
    const allProjects = [];

    // Array of ref variables for projects
    const refs = [project1Ref, project2Ref, project3Ref, project4Ref, project5Ref, project6Ref];

    // Array of inView boolean values for projects
    const inViewValues = [project1, project2, project3, project4, project5, project6];

    // Initialize index for looping through arrays
    let index = 0;

    // Loop for loading each project info from
    // 'projects.js', and pushes each project to the
    // allProjects array to be rendered.
    for (let project in projects) {
        allProjects.push(
            <div
                ref={refs[index]}
                className={`${"project"} ${inViewValues[index] ? "project-animate" : ""}`}
                key={project}>
                <img
                    className="project-img"
                    key={`${project}-image`}
                    src={`${projects[project].image}`}
                    alt="displaying each project"
                >
                </img>
                <section className="project-info" key={`${project}-info`}>
                    <p className="project-info-title" key={`${project}-title`}>
                        {projects[project].title}
                    </p>
                    <p className="project-info-description" key={`${project}-description`}>
                        {projects[project].description}
                    </p>
                    <button
                        className="project-button"
                        onClick={() => window.open(`${projects[project].url}`, "_blank")}
                        rel="noopener noreferrer"
                        key={`${project}-button`}
                    >
                        Learn More
                    </button>
                </section>
            </div>
        );
        index++;
    }

    return (
        <>
            <header className="nav">
                <nav className="nav__item">
                    <a className="nav__link" href="img/Mason_Galat_Resume.pdf" target="_blank">Resume</a>
                </nav>
            </header>
            <main>
                <section className="home">
                    <header>
                        <h1 className="home__title">Web Developer</h1>
                    </header>
                    <p className="home__skills">
                        JavaScript, React, Python, Django, HTML, CSS, Git
                    </p>
                    <h2 className="home__name">Hi, I'm Mason.</h2>
                    <p className="home__description">
                        A motivated front-end developer with an eagerness to 
                        create smooth, appealing websites and web applications.
                        I am excited to continue expanding my skillset with 
                        honorable languages and great development tools 
                        while still maintaining drive and focus.
                        I absolutely love to learn about technology and use it 
                        in my everyday life.
                        I believe that every problem out there is worth solving 
                        and should be pursued with confidence!
                    </p>
                </section>
                <img className="wave" src="img/wave3.png" alt=""></img>
                <section className="project-section">
                    <div className="middle__title">
                        <h2 className="middle__text">Projects</h2>
                    </div>
                    {allProjects}
                </section>
            </main>
        </>
    );
};