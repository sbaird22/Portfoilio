import React from 'react';

const Project = ({ title, image, appLink, repoLink }) => (
    <li>
        <article>
            <h3>{title}</h3>
            <img src={image} alt={`${title} screenshot`} />
            <p>   
            <a href={repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </p>
        </article>
    </li>
);

export default Project;