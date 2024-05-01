import React from "react";
import background from "../img/background.jpeg";

function Main() {
  return (
    <div className="main--box"
    style={{ 
        backgroundColor: '#768fb8',
        backgroundImage: `url(${background})`, 
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height:'100vh'
        }}>
      <ul className="main--menu">
        <h2>Sign-Up 2024</h2>
        <h2>Submit 2024</h2>
        <h2><a href="https://www.youtube.com/@sandnudes" target="_blank" rel="noreferrer">   
        Past Submissions</a></h2>
      </ul>
    </div>
  );
}


export default Main;