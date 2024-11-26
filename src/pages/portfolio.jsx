import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
const projects = [
    { title: 'Project 1', image: 'project1.jpg', appLink: '#', repoLink: '#' },
    // Add more projects here
];

return (
    <section>
        <h2>Shane Baird Portfolio</h2>
        <section className="portfolio-container">
            {projects.map((project, index) => (
            <Project key={index} {...project} />
            ))}
        </section>
    </section>
    );
};

export default Portfolio;