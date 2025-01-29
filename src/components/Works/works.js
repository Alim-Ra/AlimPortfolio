/*works.js
Alim Rashyani
301497158*/

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
                        <p></p>
                    </div>    
                </div>
                <div className="worksImgs">
                    <img src={resumeBuild} alt="resumeBuild" className="worksImgsImg" />
                    <div className="worksImgsText">
                        <h2>Online Resume Builder</h2>
                        <p></p>
                    </div>    
                </div>
                <div className="worksImgs">
                    <img src={guessNo} alt="guessNo" className="worksImgsImg" />
                    <div className="worksImgsText">
                        <h2>Number Guessing Game</h2>
                        <p></p>
                    </div>    
                </div>
            
        </section>
    );
}

export default Works
