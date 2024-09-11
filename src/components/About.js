import React from "react";
import photo from '../assets/téléchargement.jpg';

function About() {
    return (
        <div className="container py-5" id="About">
            <div className="row align-items-center">
                <div className="col-md-6 col-lg-5 d-flex justify-content-center mb-4 mb-md-0">
                    <img src={photo} alt="Coding" className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-6 col-lg-7">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            About Me
                        </div>
                        <div className="card-body">
                            <p>Hello! I'm Ines Jaziri, a passionate Software Engineering student.</p>
                            <p>I specialize in front-end development with experience in creating interactive and user-friendly web applications. My focus is on building scalable and efficient solutions using modern technologies.</p>
                            <p>I have a strong foundation in web technologies like HTML, CSS, JavaScript, and React. I'm also familiar with back-end technologies and am always eager to learn and adapt to new challenges.</p>
                            <p>In addition to my technical skills, I value teamwork and collaboration. I enjoy working on projects that have a meaningful impact and contribute to solving real-world problems.</p>
                            <div className="mt-4">
                                <a href="https://www.linkedin.com/in/ines-jaziri-09306b267/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-outline-primary me-2">LinkedIn</button>
                                </a>
                                <a href="https://github.com/ines2604" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-outline-primary">GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
