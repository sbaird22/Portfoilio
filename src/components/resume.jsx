import React from "react";

const Resume = () => {
    return (
    <section className="resume">
        <h1>Resume</h1>
        <p>
            Below, you can find a link to download my resume and a list of my core proficiencies.
        </p>
        <a
            href="https://drive.google.com/file/d/1JTf9KFSH8BbM9AK5F62SAr7jCnqXFtD5/view?usp=sharing" 
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" 
            className="resume-download-link"
            >
            Download My Resume
        </a>
        <h2>Proficiencies</h2>
            <ul>
                <li>JavaScript (ES6+)</li>
                <li>React & React Router</li>
                <li>HTML & CSS</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>Responsive Design</li>
                <li>Testing (Jest)</li>
                <li>Python</li>
            </ul>
    </section>
    );
};

export default Resume;