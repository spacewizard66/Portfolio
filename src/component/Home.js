import React from "react";

import Projects from "../projects.js"

function Home() {

    let projects = Projects;
    let final = [];

    for (let project in projects) {
        final.push(
            <div className="project" key={project}>
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
                    <p className="home-title">Frontend Developer</p>
                    <p className="home-skills">JavaScript / React / Python / Django / HTML / CSS / Git</p>
                    <p className="home-name">Hi, I'm Mason.</p>
                    <p className="home-description">
                        A motivated web developer from Pennsylvania, USA, 
                        aspiring to become an expert computer geek.
                        I absolutely love to learn new technologies, and use it in my everyday life.
                        Every problem out there is worth solving!
                        In my freetime, I enjoy admiring art, music, and skateboarding with friends.
                    </p>
                </div>

                <div className="middle-title-div">
                    <h2 className="middle-title">Projects</h2>
                </div>

                <div className="project-section">
                    {final}
                </div>
            </div>
    );
}
export default Home;