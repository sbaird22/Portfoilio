import React from 'react';
import MeImage from '../assets/images/me.jpg';
const About = ()=>(  
    
<section>
    <h2>About Me</h2>
    <img src={MeImage} alt="Developer photo" style={{ width: '200px', height: 'auto' }} />
    <p>Hi, I'm Shane Baird, a web developer with a strong foundation in modern web technologies, including JavaScript, TypeScript, React, Node.js, and PostgreSQL. Having successfully completed an intensive coding bootcamp, I’m proficient in building full-stack applications, implementing authentication systems, and optimizing performance for scalable solutions. I’m passionate about problem-solving, writing clean and maintainable code, and continuously expanding my expertise. I'm eager to contribute my skills to innovative teams and take on new challenges in the tech industry.</p>
</section>
);

export default About;