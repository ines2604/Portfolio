import React, { useState, useEffect } from "react";

function Projet({ images, title, description, githublink, competences }) {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="card">
            <img src={images[currentImg]} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="competences justify-content-center mb-4">
                    {competences.map((comp, index) => (
                        <img 
                            key={index}
                            src={comp.src} 
                            alt={comp.alt} 
                            className="competence-icon" 
                        />
                    ))}
                </div>
                <a 
                    href={githublink} 
                    className="btn btn-primary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default Projet;
