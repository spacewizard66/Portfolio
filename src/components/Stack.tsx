import React from 'react';

import image12 from '../../public/img/icons/ts.png';
import image11 from '../../public/img/icons/js.png';
import image10 from '../../public/img/icons/python.png';
import image9 from '../../public/img/icons/css.png';
import image8 from '../../public/img/icons/sass.png';
import image7 from '../../public/img/icons/react.png';
import image6 from '../../public/img/icons/jquery.png';
import image5 from '../../public/img/icons/jest.png';
import image4 from '../../public/img/icons/django.png';
import image3 from '../../public/img/icons/git.png';
import image2 from '../../public/img/icons/webpack.png';
import image1 from '../../public/img/icons/cloud.png';

export default function Stack(): React.JSX.Element {
    // Type Representing 'Info' Object for Skills
    type Skill = {
        [key: string]: {
            image: string;
            title: string;
        }
    }

    // Object Containing All Tech Stack Info
    const info: Skill = {
        "skill12": {
            "image": image12,
            "title": "TypeScript"
        },
        "skill11": {
            "image": image11,
            "title": "JavaScript"
        },
        "skill10": {
            "image": image10,
            "title": "Python"
        },
        "skill9": {
            "image": image9,
            "title": "HTML/CSS"
        },
        "skill8": {
            "image": image8,
            "title": "SCSS/SASS"
        },
        "skill7": {
            "image": image7,
            "title": "React"
        },
        "skill6": {
            "image": image6,
            "title": "jQuery"
        },
        "skill5": {
            "image": image5,
            "title": "Jest"
        },
        "skill4": {
            "image": image4,
            "title": "Django"
        },
        "skill3": {
            "image": image3,
            "title": "Git"
        },
        "skill2": {
            "image": image2,
            "title": "Webpack"
        },
        "skill1": {
            "image": image1,
            "title": "Cloud Hosting"
        }
    }

    // Array to store all projects during loop
    const allSkills: React.JSX.Element[] = [];

    // Loops through 'info' object and parses data
    // then pushes each project JSX to the 'allSkills' array
    let index: number = 0;
    for (let skill in info) {
        allSkills.push(
            <div className="about__skill" key={skill}>
                <img
                    className="about__skill__img"
                    src={info[skill].image}
                    alt=""
                >
                </img>
                <p className="about__skill__title">
                    {info[skill].title}
                </p>
            </div>
        )
        index++;
    }

    return (
        <section className="about__skills">
            {allSkills}
        </section>
    );
};