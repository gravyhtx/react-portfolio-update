import React from 'react';
import Glitch from "./components/glitch/Glitch";
import Intro from "./components/intro/Intro";
import './App.css';

function App() {
        
    // Look what I did, ma! This will make the page refresh always go to top.... most of the time!
    document.addEventListener("DOMContentLoaded", function(){
        window.location.hash=""
        document.documentElement.scrollTop = 0  // For Chrome, Firefox, IE and Opera
        document.body.scrollTop = 0 // For Safari
    })

    return (
        <div>
            <Glitch />
            <Intro />
        </div>
    )
}
      


export default App;


