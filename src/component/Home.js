import React from 'react';
import { useInView } from 'react-intersection-observer';
import Projects from '../projects.js';
import '../style.css';

function Home() {
    // Brings viewport back to top of page on unload (refresh)
    //  to help animation effects
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

    // Assigning imported document to variable
    const projects = Projects;

    // Array to store all projects during loop
    // then total array gets rendered
    const allProjects = [];

    // Array of ref variables for projects
    const refs = [project1Ref, project2Ref, project3Ref, project4Ref, project5Ref];

    // Array of inView boolean values for projects
    const inViewValues = [project1, project2, project3, project4, project5];

    // Initialize index for looping through arrays
    let index = 0;

    // Loop for loading each project info from
    // projects.js, and pushes each project to the
    // allProjects array to be rendered when complete
    for (let project in projects) {
        allProjects.push(
            <div ref={refs[index]} className={`${"project"} ${inViewValues[index] ? "project-animate" : ""}`} key={project}>
                <img className="project-img" key={`${project}-image`} src={`${projects[project].image}`} alt="displaying each project"></img>
                <div className="project-details" key={`${project}-details`}>
                    <p className="project-title" key={`${project}-title`}>{projects[project].title}</p>
                    <p className="project-description" key={`${project}-description`}>{projects[project].description}</p>
                    <a href={projects[project].url} key={`${project}-url`} target="_blank" rel="noreferrer">
                        <button className="project-button" key={`${project}-button`}>Learn More</button>
                    </a>
                </div>
            </div>
        );
        index++;
    }

    return (
        <div>
            <div className="nav-list">
                <div className="nav-item">
                    <a className="nav-link" href="img/Mason_Galat_Resume.pdf" target="_blank">
                        <p className="nav-links-title">Resume</p>
                    </a>
                </div>
            </div>
            <div className="home-description-div">
                <p className="home-title">Front-End Developer</p>
                <p className="home-skills">
                    JavaScript / React / Python / Django / HTML / CSS / Git
                </p>
                <p className="home-name">Hi, I'm Mason.</p>
                <p className="home-description">
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
            </div>
            <div className="middle-title-div">
                <h2 className="middle-title">Projects</h2>
            </div>
            <div className="project-section">
                {allProjects}
            </div>
        </div>
    );
}
export default Home;