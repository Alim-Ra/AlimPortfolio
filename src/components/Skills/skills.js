/*skills.js
Alim Rashyani
301497158
28 January 2025*/

import React from 'react';
import './skills.css';
import UIdesign from '../../assets/uidesign.png';
import Webdesign from '../../assets/webdesign.png';
import Appdesign from '../../assets/appdesign.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding Of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
            <div className="skillBar">
                <div className="skillBar">
                    <img src={UIdesign} alt="UIdesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p></p>
                    </div>    
                </div>
                <div className="skillBar">
                    <img src={Webdesign} alt="Webdesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p></p>
                    </div>    
                </div>
                <div className="skillBar">
                    <img src={Appdesign} alt="Appdesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p></p>
                    </div>    
                </div>
            </div>
        </section>
    );
}

export default Skills;
