import React from 'react';
import MeImage from '../assets/images/me.jpg';
const About = ()=>(  
    
<section>
    <h2>About Me</h2>
    <img src={MeImage} alt="Developer photo" style={{ width: '200px', height: 'auto' }} />
    <p>Hi, I'm Shane Baird, an aspiring developer currently honing my skills in a comprehensive coding bootcamp. With a foundation in modern web technologies and a passion for problem-solving, I'm eager to apply my growing expertise to real-world projects. I'm actively seeking opportunities to kickstart my career in coding and contribute to innovative teams.</p>
</section>
);

export default About;