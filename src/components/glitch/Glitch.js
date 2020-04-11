import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css";

class Glitch extends React.Component { 
    constructor(props, context) { 
      super(props, context); 
      AOS.init(); 
    } 
    componentWillReceiveProps (){ 
      AOS.refresh(); 
    } 

    render() {
        return (
        <Router>
            
        <div>

        <Link to="#introduction">

            <div className="screen glitch" id="welcome">

                <div
                    data-aos="fade"
                    data-aos-delay="250"
                    data-aos-duration="5000"
                    data-aos-anchor-placement="top"
                    className="container-fluid brighten" id="logo">

                    <LazyLoadImage 
                        className="img-main clock"
                        src={process.env.PUBLIC_URL + "/images/gravy_logo.png"}
                        alt="Gravy VHS Logo" />

                </div>
                
            </div>
            
        </Link>

        </div>

        </Router>
        )          
    }
}

export default Glitch;