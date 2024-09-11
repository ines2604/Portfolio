import React from "react";
import photo from '../assets/1700988175897.jpg';
import cvFile from '../assets/ines_jaziri_cv.pdf';

function Home() {
    return (
        <div  id="Home" className="container d-flex justify-content-center align-items-center mt-2" style={{ height: '100vh' }}>
            <div className="row align-items-center w-100">
                <div className="col col-md-6 col-lg-6 d-flex flex-column justify-content-center mt-5">
                    <p className="display-6">Hi, my name is Ines.</p>
                    <p className="display-6 fw-bold text-primary">I'm a <span>Software Engineering Student</span>.</p>
                    <a href={cvFile} download="CV_Ines_Jaziri.pdf">
                        <button className="btn btn-outline-primary mt-4" type="button" id="cvButton">Download CV</button>
                    </a>
                </div>
                <div className="col col-md-6 col-lg-5 d-flex justify-content-center">
                    <img src={photo} alt="Profile" className="img-fluid rounded-circle shadow"/>
                </div>
            </div>
        </div>
    );
}

export default Home;
