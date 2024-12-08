import React from 'react';
import Project from '../components/project';

const Portfolio = () => {
const projects = [
    { title: 'Weather App', repoLink: 'https://github.com/sbaird22/weather-app' },
    { title: 'Food tracker app', repoLink: 'https://github.com/dmiddleton92/diet-food-tracker-app'},
    { title: 'Company Table Sql', repoLink: 'https://github.com/sbaird22/company-tables' },
    { title: 'Automobile Selector app', repoLink: 'https://github.com/sbaird22/auto-selector' },
    { title: 'A README.md generator', repoLink: 'https://github.com/sbaird22/README-generator' },
    { title: 'Portfolio', repoLink: 'https://github.com/sbaird22/Portfoilio' },
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