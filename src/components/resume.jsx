import React from "react";

const Resume = () => {
    return (
    <section className="resume">
        <h1>Resume</h1>
        <p>
            Below, you can find a link to download my resume and a list of my core proficiencies.
        </p>
        <a
            href="https://drive.google.com/file/d/1619BLuhlAnmKPQDV2Mvx_MnRsxeAodzv/preview" 
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
            </ul>
    </section>
    );
};

export default Resume;