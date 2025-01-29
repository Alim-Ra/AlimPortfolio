/*works.js
Alim Rashyani
301497158
28 January 2025*/

import React from 'react';
import './works.css'
import toDo from '../../assets/todoimg.png';
import resumeBuild from '../../assets/resumebuild.jpg';
import guessNo from '../../assets/guessno.jpg';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="workstitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence. My projects showcase expertise in AI, web development, and software security, solving real-world challenges.</span>
            
                <div className="worksImgs">
                    <img src={toDo} alt="toDo" className="worksImgsImg" />
                    <div className="worksImgsText">
                        <h2>To-Do List</h2>
                        <p>A simple and interactive web application to add, manage, and track tasks efficiently, built using HTML, CSS, and JavaScript for a seamless user experience.</p>
                    </div>    
                </div>
                <div className="worksImgs">
                    <img src={resumeBuild} alt="resumeBuild" className="worksImgsImg" />
                    <div className="worksImgsText">
                        <h2>Online Resume Builder</h2>
                        <p>A web application that helps users create professional resumes by customizing templates and inputting details, built using HTML, CSS, and JavaScript.</p>
                    </div>    
                </div>
                <div className="worksImgs">
                    <img src={guessNo} alt="guessNo" className="worksImgsImg" />
                    <div className="worksImgsText">
                        <h2>Number Guessing Game</h2>
                        <p>A fun and interactive game where users guess a randomly generated number, featuring dynamic hints and score tracking, developed using Java.</p>
                    </div>    
                </div>
            
        </section>
    );
}

export default Works
