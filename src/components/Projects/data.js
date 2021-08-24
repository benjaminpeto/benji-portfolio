import faceDetect from './project_img/faceDetect.jpg';
import portfolio from './project_img/portfolio.png';
import quote from './project_img/quote.png';
import todo from './project_img/todo.png';
import robofriends from './project_img/robofriends.png';
import mysteryboxes from './project_img/mysteryboxes.png';

export const project = [
    {
        id: 101,
        title: "Face Detection App",
        description:
        "The app uses an API from Clarifai and detects faces on photos. You only have to paste a URL in the input, and it will find the face on it. I'm currently adding new features.",
        image: faceDetect,
        libraries:['reactJS', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'API'],
        link: "https://ai-face-recognition.herokuapp.com/",
        source:"https://github.com/benjaminpeto/face-recognition-app-api"
    },
    {
        id: 102,
        title: "Personal Portfolio",
        description:
        "The site what you are currently looking at. Made with React, deployed by netlify. I learnt using tailwindCSS and added a darkmode feature with toggle by the user.",
        image: portfolio,
        libraries:['ReactJS', 'React Hooks', 'TailwindCSS', 'GoogleMaps API'],
        link: "#coming",
        source:"https://github.com/benjaminpeto/benji-portfolio∑"
    },
    {
        id: 103,
        title: "RoboFriends",
        description:
        "My first app made with React, it was a project in Zero To Mastery course on Udemy. You can live search for robots. Later I added React Hooks, and Redux to manage states.",
        image: robofriends,
        libraries:['ReactJS', 'React Hooks', 'Redux', 'CSS', 'JavaScript'],
        link: "https://benjaminpeto.github.io/robofriends/",
        source:"https://github.com/benjaminpeto/robofriends"
    },
    {
        id: 104,
        title: "Quote Generator",
        description:
        "A pure JavaScript quote generator. Fetching data from JSON, completely responsive and you can tweet it straight on your Twitter. Contains also a spinning loader until the data is fetched.",
        image: quote,
        libraries:['HTML', 'CSS', 'JavaScript'],
        link: "https://benjaminpeto.github.io/quote-generator/",
        source:"https://github.com/benjaminpeto/quote-generator"
    },
    {
        id: 105,
        title: "To-do App",
        description:
        "JavaScript ToDo app with a nicely designed interface and some added animations. Responsive and working on every browser. I am planning to add localStorage and destructure the codebase.",
        image: todo,
        libraries:['HTML', 'CSS', 'JavaScript'],
        link: "https://benjaminpeto.github.io/ToDo-App/",
        source:"https://github.com/benjaminpeto/ToDo-App"
    },
    {
        id: 106,
        title: "Surf Mystery Box Landing Page",
        description:
        "Just a simple landing page with pure HTML and CSS, my goal was to practice a little bit of Bootstrap and get back in shape with tags.",
        image: mysteryboxes,
        libraries:['HTML', 'CSS', 'Bootstrap'],
        link: "https://benjaminpeto.github.io/Surf-Mystery-Box-Mockup/",
        source:"https://github.com/benjaminpeto/Surf-Mystery-Box-Mockup"
    }
]