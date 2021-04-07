import React from "react";
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./FooterStyles";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="box">
            <h1 style={{
                color: "#FEFEFE",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Traaventure
	        </h1>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="heading">About Us</div>
                        <div className="footerLink" href="#">Aim</div>
                        <div className="footerLink" href="#">Vision</div>
                        <div className="footerLink" href="#">Testimonials</div>
                    </div>
                    <div className="column">
                        <div className="heading">Services</div>
                        <div className="footerLink" href="#">Writing</div>
                        <div className="footerLink" href="#">Internships</div>
                        <div className="footerLink" href="#">Coding</div>
                        <div className="footerLink" href="#">Teaching</div>
                    </div>
                    <div className="column">
                        <div className="heading">Contact Us</div>
                        <div className="footerLink" href="#">Uttar Pradesh</div>
                        <div className="footerLink" href="#">Ahemdabad</div>
                        <div className="footerLink" href="#">Indore</div>
                        <div className="footerLink" href="#">Mumbai</div>
                    </div>
                    <div className="column">
                        <div className="heading">Social Media</div>
                        <div className="footerLink" href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
				</span>
                            </i>
                        </div>
                        <div className="footerLink" href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
				</span>
                            </i>
                        </div>
                        <div className="footerLink" href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
				</span>
                            </i>
                        </div>
                        <div className="footerLink" href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
				</span>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
