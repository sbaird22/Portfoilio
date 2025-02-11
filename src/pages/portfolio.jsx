import React from 'react';
import Project from '../components/project';

const Portfolio = () => {
const projects = [
    { 
        title: 'Weather App',
        image: '/assets/images/weather.png',
        repoLink: 'https://github.com/sbaird22/weather-app'
    },
    { 
        title: 'Food tracker app',
        image: '/assets/images/diet.png',
        repoLink: 'https://github.com/dmiddleton92/diet-food-tracker-app'
    },
    { 
        title: 'Company Table Sql',
        image: '/assets/images/company.png',
        repoLink: 'https://github.com/sbaird22/company-tables' 
    },
    { 
        title: 'Automobile Selector app',
        image: '/assets/images/autoapp.png',
        repoLink: 'https://github.com/sbaird22/auto-selector' 
    },
    { 
        title: 'A README.md generator',
        image: '/assets/images/readme.png',
        repoLink: 'https://github.com/sbaird22/README-generator' },
    { 
        title: 'Job Tracker',
        image: '/assets/images/job.png',
        repoLink: 'https://github.com/sbaird22/job-application' },
    // Add more projects here
];

return (
    <section>
        <h2>Shane Baird's Portfolio</h2>
        <section className="portfolio-container">
            {projects.map((project, index) => (
            <Project key={index} {...project} />
            ))}
        </section>
    </section>
    );
};

export default Portfolio;