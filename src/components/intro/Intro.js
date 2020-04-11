import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./style.css";

function Intro() {
    return(
        <Router>
        
        <div>
            
            <div id="introduction"/>
            
            <br />
            <br />
            <br />
            
            <div
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="3000"
                data-aos-anchor-placement="center"
                className="container lil-margin">
            
                <div
                    data-aos="flip-right"
                    data-aos-delay="400"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center">
                    
                    <div className="intro-header"><b>websites.</b></div>
            
                    <div
                    data-aos="flip-left"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center">
            
                    <div className="column-words justify">
                        Welcome to the Web Development and Design website for <b><u>Grävy Design Co.</u></b> where our number one priority is aesthetic design. We've realized client projects in all digital realms including web development, illustration, product design, and audio production. We are prepared for the challenges of any job we take on with our unique style set to your specifications.
                    </div>
                </div>
                    
                    <div className="column-words justify">
                        Our most comprehensive designs are featured in our web development projects. We offer mobile-first, full stack web development focused on UX/UI design. This website serves as an example of a PWA Optimized website and we are proud to offer this feature for your fully integrated web app. Whether you need a beautiful one-page site or fully functional GUI enhanced database software, we got you covered. Click <b><Link to="#featured">here</Link></b> to see some of our favorite web projects.
                    </div>
                </div>

                <LazyLoadImage 
                    className="img-audit center"
                    src={process.env.PUBLIC_URL + "/images/audit.png"}
                    alt="PWA Audit" />            
            
                <br /><br /><br /><br />
                
                <div
                    data-aos="flip-left"
                    data-aos-delay="600"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center">
            
                    <div className="intro-header clients"><b>clients.</b></div>
                    
                    <div
                    data-aos="flip-right"
                    data-aos-delay="400"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center">
            
                        <div className="column-words justify clients-text" id="clients">
                            Grävy Design Co. was founded in Houston, TX and we have worked to execute the vision of clients from businesses of all sizes to Houston's premiere rap legends on cover art, promotional materials, and creative direction on music videos. Creative Director and Owner, Andy Richard, began his design career working on apparel for small businesses and grew to work on projects for large corporations and businesses such as Kinder-Morgan, WCA Waste Corporation, Republic Services, and Texan Wire Wheels. Since our 2019 launch we have worked with both signed and independent artists from Houston to New York.
                        </div>
            
                    </div>
            
                </div>
                    
                <br/>
                <br/>

            </div>

            <br /><br />

        </div>
        
        </Router>
    )
}

export default Intro;