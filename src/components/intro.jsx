import React from 'react';
import './stars.scss';
import Typed from 'react-typed';

class Intro extends React.Component{
    render(){
        return (
          // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
            <div id="home" className="intro route bg-image background">
              <div id="stars" />
              <div id="stars2" />
              <div id="stars3" />
            {/* <div className="overlay-intro"></div> */}
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <h1 className="intro-title mb-4">Hello, I am Shubh Shah</h1>
                  <p className="intro-subtitle"><span className="text-slider-items">
                    </span><strong className="text-slider"><Typed strings={['Front End Developer', 'Back End Developer', 'React Native Developer']} typeSpeed = {80} backDelay = {1100} backSpeed = {30} loop/></strong></p>
                  <p className="pt-3">
                    <a 
                      className="btn btn-primary btn js-scroll px-4" 
                      style={{ cursor: "pointer" }}
                      href= {`/files/Shubh_Resume.pdf?${new Date().getTime()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View My Resume <i class="fa fa-download" aria-hidden="true"></i>
                    </a>
                    {/* <a 
                      className="btn btn-primary btn js-scroll px-4 ml-5" 
                      style={{ cursor: "pointer" }}
                      href="#work"
                    >
                      View My Work
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
            </div>
        
        );
    }
}

export default Intro;