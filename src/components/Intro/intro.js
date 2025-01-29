import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import resume from '../../assets/AlimRashyaniResume.pdf';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText"> I'm <span className="introName">Alim</span><br />Website Designer</span>
                <p className="introPara">I am a a skilled web designer with experience in creating<br /> visually appealing and user friendly websites.</p>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                    <button className="btn"> Resume </button>
                </a>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}
export default Intro;