import React from "react";
import Skill from './Skill'
import html from '../assets/html.png'
import css from '../assets/icons8-css-48.png'
import js from '../assets/icons8-js-48.png'
import jquery from '../assets/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-24.png'
import php from '../assets/icons8-php-80.png'
import react from '../assets/icons8-react-a-javascript-library-for-building-user-interfaces-24.png'
import bootstrap from '../assets/icons8-bootstrap-48.png'
import pl from '../assets/icons8-oracle-pl-sql-100.png'
import sql from '../assets/icons8-sql-64.png'

function Skills(){
    return (
        <div id="Skills" className="container">
            <div className="container mt-5">
                <h2 className="display-4 mb-4 text-primary">Skills & Technologies</h2>
                <p className="lead mb-4">Here's a look at my skills and proficiency levels.</p>
            </div>
            <div className="row mb-4">
                <div className="col ">
                    <Skill icon={html} title="HTML5" level="95" color="#E34C26" />
                </div>
                <div className="col">
                    <Skill icon={css} title="CSS3" level="70" color="#264DE4" />
                </div>
                <div className="col">
                    <Skill icon={js} title="JS" level="70" color="#F0DB4F" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <Skill icon={sql} title="SQL" level="95" color="#00758F" />
                </div>
                <div className="col">
                    <Skill icon={pl} title="PL/SQL" level="80" color="#D35400" />
                </div>
                <div className="col">
                    <Skill icon={php} title="PHP" level="50" color="#8993BE" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <Skill icon={react} title="React.js" level="75" color="#61DBFB" />
                </div>
                <div className="col">
                    <Skill icon={jquery} title="jQuery" level="90" color="#0769AD" />
                </div>
                <div className="col">
                    <Skill icon={bootstrap} title="Bootstrap" level="90" color="#563D7C" />
                </div>
            </div>
        </div>
    )
}

export default Skills;
