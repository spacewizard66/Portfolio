import React from 'react';

import { useInView } from 'react-intersection-observer';

import projectsInfo from './info'

export default function Projects() {
    // Declaring options for useInView() hook
    const options: {triggerOnce: boolean, threshold: number} = {
        triggerOnce: true,
        threshold: 0.1,
    }

    // useInView hooks that returns a boolean (true, false) if in viewport.
    const [ project1Ref, project1 ] = useInView(options);
    const [ project2Ref, project2 ] = useInView(options);
    const [ project3Ref, project3 ] = useInView(options);
    const [ project4Ref, project4 ] = useInView(options);
    const [ project5Ref, project5 ] = useInView(options);

    // Array of ref variables
    const refs = [
        project1Ref,
        project2Ref,
        project3Ref,
        project4Ref,
        project5Ref
    ];

    // Array of inView boolean values
    const inViewValues: boolean[] = [
        project1,
        project2,
        project3,
        project4,
        project5
    ];

    // Array to store all projects during loop
    const allProjects = [];

    // Loop for loading each project info from 'projectsInfo.js',
    // then pushes each project to the 'allProjects' array
    let index: number = 0;
    for (let project in projectsInfo) {
        allProjects.push(
            <div
                ref={refs[index]}
                className={`project ${inViewValues[index] ? "project__animate" : ""}`}
                key={project}
            >
                <img
                    className="project__img"
                    key={`${project}-image`}
                    src={projectsInfo[project].image}
                    alt=""
                >
                </img>
                <section className="project__info" key={`${project}-info`}>
                    <p className="project__title" key={`${project}-title`}>
                        {projectsInfo[project].title}
                    </p>
                    <p className="project__description" key={`${project}-description`}>
                        {projectsInfo[project].description}
                    </p>
                    <button
                        className="project__button"
                        onClick={() => window.open(projectsInfo[project].url, "_blank")}
                        rel="noopener noreferrer"
                        key={`${project}-button`}
                    >
                        {projectsInfo[project].button}
                    </button>
                </section>
            </div>
        );
        index++;
    };
    return (
        <>
            {allProjects}
        </>
    )
};