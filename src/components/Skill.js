import React from "react";

function Skill({ icon, title, level, color }) {
    return (
        <div className="card">
            <div className="card-title d-flex align-items-center ms-2 mt-2">
                <img id="icon" src={icon} alt="icon" className="me-2" />
                <h5>{title}</h5>
            </div>
            <div className="card-body">
                <div className="progress">
                    <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width: `${level}%`, backgroundColor: color }} 
                        aria-valuenow={level} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    >
                        {level}%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
