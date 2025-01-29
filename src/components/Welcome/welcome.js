import React from 'react';
import './welcome.css';

const Welcome = () => {
    return (
        <section className="welcomePg">
            <div id="welcome">
                <h1 className="contactPgTitle">Hello and welcome to my personal portfolio!</h1>
                <p className="welcomeMessage">I'm Alim Rashyani, a passionate Software Developer and AI Enthusiast with expertise in Java, Python, Web Development, and Artificial Intelligence. Here, you'll find a showcase of my projects, skills, and experiences in software engineering, AI, and web development. Feel free to explore and connect with me!</p>
                <h1 className="contactPgTitle">Mission Statement:</h1>
                <p className="welcomeMessage">My mission is to leverage cutting-edge technology, artificial intelligence, and software development to create innovative solutions that enhance efficiency and solve real-world problems. I am committed to continuous learning, collaborating on impactful projects, and contributing to the tech community with my knowledge and expertise.</p>
                <button className="btn" onClick={() => {
                                document.getElementById('intro').scrollIntoView({behavior: 'smooth'});
                            }}> About Me </button>
            </div>
        </section>
    )
}

export default Welcome;