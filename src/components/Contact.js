import React from "react";

function Contact() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h4>Contact Information</h4>
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="bi bi-envelope-open"></i>
                            <p>inesjaziri2003@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-phone"></i>
                            <p>+216 99921231</p>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-linkedin"></i>
                            <a href="https://www.linkedin.com/in/ines-jaziri-09306b267/" target="_blank" rel="noopener noreferrer">
                                Ines Jaziri
                            </a>
                        </div>
                    </div>
                </div>
                <form id="Contact" className="col-md-6 mt-4">
                    <h4>Get in Touch</h4>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nameInput" 
                            placeholder="Write your name here"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailInput" 
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="messageTextarea" className="form-label">Your message</label>
                        <textarea 
                            className="form-control" 
                            id="messageTextarea" 
                            rows="3"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
