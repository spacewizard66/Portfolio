import image5 from '../../public/img/SuperSwing.gif';
import image4 from '../../public/img/WeatherApp.gif';
import image3 from '../../public/img/PassPal.gif';
import image2 from '../../public/img/AlienInvasion.gif';
import image1 from '../../public/img/TicTacToe.gif';

type Project = {
    [key: string]: {
        image: string;
        title: string;
        description: string;
        url: string;
        button: string;
    }
}

const info: Project = {
    "project5": {
        "image": image5,
        "title": "Super Swing Baseball",
        "description": "The website for a company that proudly offers baseball lessons to youth and aspiring athletes. Built using React and SCSS. ",
        "url": "https://super-swing-baseball.onrender.com/",
        "button": "Live Site"
    },
    "project4": {
        "image": image4,
        "title": "Weather App",
        "description": "A weather forecast application built with React, OpenWeather's API, & responsive CSS",
        "url": "https://weather-forecast-0ce3.onrender.com/",
        "button": "Live Site"
    },
    "project3": {
        "image": image3,
        "title": "PassPal",
        "description": "Generates a unique and complex password using vanilla JavaScript & SCSS",
        "url": "https://password-generator-vti7.onrender.com",
        "button": "Live Site"
    },
    "project2": {
        "image": image2,
        "title": "Alien Invasion",
        "description": "Space Invaders clone game that is developed with Python & Pygame",
        "url": "https://github.com/spacewizard66/Alien-Invasion",
        "button": "View Github"
    },
    "project1": {
        "image": image1,
        "title": "Tic Tac Toe",
        "description": "Fun, 2-player game integrated using Python & Pygame",
        "url": "https://github.com/spacewizard66/TicTacToe",
        "button": "View Github"
    }
};
export default info;