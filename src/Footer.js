import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "../src/App.css";

function Footer() {
return (
    <div className="sFooter gray" id="footer">

        <div><a href="/"><u><i className="material-icons">keyboard_arrow_up</i></u></a></div>

        <a href="https://github.com/gravyhtx" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage
                className="socials brighten"
                src={process.env.PUBLIC_URL + "/images/gh.png"}
                alt="GitHub" />
        </a>

        <a href="https://www.behance.net/gravyhtx" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage
                className="socials brighten"
                src={process.env.PUBLIC_URL + "/images/be.png"}
                alt="Behance" />
        </a>

        <a href="https://www.linkedin.com/in/andrewrichard88/" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage
                className="socials brighten"
                src={process.env.PUBLIC_URL + "/images/ln.png"}
                alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/gravyhtx" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage
                className="socials brighten"
                src={process.env.PUBLIC_URL + "/images/in.png"}
                alt="Instagram" />
        </a>

        <br />

    </div>
    )
}

export default Footer;