import React from 'react';
import { useInView } from 'react-intersection-observer';

import image6 from '../../public/img/projects/Eckenrode_Septic.gif';
import image5 from '../../public/img/projects/SuperSwing.gif';
import image4 from '../../public/img/projects/WeatherApp.gif';
import image3 from '../../public/img/projects/PassPal.gif';
import image2 from '../../public/img/projects/AlienInvasion.gif';
import image1 from '../../public/img/projects/TicTacToe.gif';

export default function Projects(): React.JSX.Element {
    // Type Representing 'Info' Object for Projects
    type Project = {
        [key: string]: {
            image: string;
            title: string;
            description: string;
            url: string;
            button: string;
        }
    };

    // Object Containing All Project Info
    const info: Project = {
        "project6" : {
            "image": image6,
            "title": "Eckenrode's Septic",
            "description": "A landing page for a local septic cleaning and repairing company. Utilizes SEO, REST APIs, responsive design, cloud hosting, and a custom domain. Technologies used include JavaScript, React, SCSS, Webpack, Render, and Git.",
            "url": "https://www.eckenrodesepticllc.com/",
            "button": "View Site"
        },
        "project5": {
            "image": image5,
            "title": "Super Swing Baseball",
            "description": "A landing page for a local company that proudly offers baseball lessons to youth. Technologies used include JavaScript, React, SCSS, Render, and Git.",
            "url": "https://super-swing-baseball.onrender.com/",
            "button": "View Site"
        },
        "project3": {
            "image": image3,
            "title": "PassPal",
            "description": "PassPal is a clean and simple application that lets you generate a unique and complex password, perfect for real world use and solid security. Created using vanilla JavaScript and SCSS.",
            "url": "https://password-generator-vti7.onrender.com",
            "button": "View Site"
        },
        "project4": {
            "image": image4,
            "title": "Weather App",
            "description": "A weather forecast application to retrieve current forecast data of a specified area. Built with JavaScript, React, CSS, Render, and OpenWeather's REST API.",
            "url": "https://weather-forecast-0ce3.onrender.com/",
            "button": "View Site"
        },
        "project2": {
            "image": image2,
            "title": "Alien Invasion",
            "description": "A Space Invaders clone game developed with Python & Pygame. Structured using object-oriented programming principles.",
            "url": "https://github.com/spacewizard66/Alien-Invasion",
            "button": "View Github"
        },
        "project1": {
            "image": image1,
            "title": "Tic Tac Toe",
            "description": "Fun, 2-player game integrated using Python & Pygame. This showcases a responsive and engaging user interface.",
            "url": "https://github.com/spacewizard66/TicTacToe",
            "button": "View Github"
        }
    };

    // Declaring options for useInView() hook
    const options: {triggerOnce: boolean, threshold: number} = {
        triggerOnce: true,
        threshold: 0.3
    }

    // useInView hooks that returns a boolean (true, false) if in viewport
    const [ project6Ref, project6 ] = useInView(options);
    const [ project5Ref, project5 ] = useInView(options);
    const [ project4Ref, project4 ] = useInView(options);
    const [ project3Ref, project3 ] = useInView(options);
    const [ project2Ref, project2 ] = useInView(options);
    const [ project1Ref, project1 ] = useInView(options);

    // Array of ref variables
    const refs = [
        project6Ref,
        project5Ref,
        project4Ref,
        project3Ref,
        project2Ref,
        project1Ref
    ];

    // Array of inView boolean values
    const inViewValues: boolean[] = [
        project6,
        project5,
        project4,
        project3,
        project2,
        project1
    ];

    // Array to store all projects during loop
    const allProjects: React.JSX.Element[] = [];

    // Loops through 'info' object and parses data
    // then pushes each project JSX to the 'allProjects' array
    let index: number = 0;
    for (let project in info) {
        allProjects.push(
            <div
                ref={refs[index]}
                className={`main__project ${inViewValues[index] ? "main__project__animate" : ""}`}
                key={project}
            >
                <img
                    className="main__project__img"
                    key={`${project}-image`}
                    src={info[project].image}
                    alt=""
                >
                </img>
                <section className="main__project__info" key={`${project}-info`}>
                    <p className="main__project__title" key={`${project}-title`}>
                        {info[project].title}
                    </p>
                    <p className="main__project__description" key={`${project}-description`}>
                        {info[project].description}
                    </p>
                    <button
                        className="main__project__button"
                        onClick={() => window.open(info[project].url, "_blank")}
                        rel="noopener noreferrer"
                        key={`${project}-button`}
                    >
                        {info[project].button}
                    </button>
                </section>
            </div>
        );
        index++;
    };

    return (
        <section className="main__projects">
            <div className="main__projects__container">
                {allProjects}
            </div>
        </section>
    );
};