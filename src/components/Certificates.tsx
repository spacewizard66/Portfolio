import React from 'react';

import cert3 from '../../public/img/certificates/Meta.png';
import cert2 from '../../public/img/certificates/FreeCodeCamp.png';
import cert1 from '../../public/img/certificates/Cisco.png';

export default function Certificates(): React.JSX.Element {
    // Type Representing 'Info' Object for Certificates
    type Certificate = {
        [key: string]: {
            image: string | undefined;
            title: string;
            url: string | undefined;
            button: string | undefined;
        }
    };

    // Object Containing All Certificate Info
    const info: Certificate = {
        "certificate3" : {
            "image": cert3,
            "title": "Meta Front-End Specialization",
            "url": "https://www.coursera.org/verify/professional-cert/6MTWJRUQAUZQ",
            "button": "---------> Verify Here <---------"
        },
        "certificate2" : {
            "image": cert2,
            "title": "Scientific Computing with Python",
            "url": "https://www.freecodecamp.org/certification/masongalat/scientific-computing-with-python-v7",
            "button": "---------> Verify Here <---------"
        },
        "certificate1" : {
            "image": cert1,
            "title": "CCNA R&S: Introduction to Networks",
            "url": undefined,
            "button": undefined
        }
    };

    // Array to store all projects during loop
    const allCerts: React.JSX.Element[] = [];

    // Loops through 'info' object and parses data
    // then pushes each project JSX to the 'allCerts' array
    for (let cert in info) {
        allCerts.push(
            <div className="main__certificate" key={cert}>
                <img
                    className="main__certificate__img"
                    key={`${cert}-image`}
                    src={info[cert].image}
                    alt=""
                ></img>
                <h3 className="main__certificate__title">
                    {info[cert].title}
                </h3>
                <a
                    className="main__certificate__link"
                    href={info[cert].url}
                    target="_blank"
                >
                    {info[cert].button}
                </a>
            </div>
        )
    }

    return (
        <section className="main__certificates">
            {allCerts}
        </section>
    );
};