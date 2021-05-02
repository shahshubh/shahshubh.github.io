import React from 'react';
// import './stars.scss';
import Typed from 'react-typed';
import $ from 'jquery';



class Intro extends React.Component{
  componentDidMount(){
    $(".intro-title-letters").on("mouseover", function() {
      $(this).addClass('rubberBandAnim');
      this.addEventListener("webkitAnimationEnd", function(){
        $(this).removeClass('rubberBandAnim');
      });
    });
  }
  
    render(){
      
      let introText = "Hello, I am Shubh Shah";
      let introTextArr = [];
      for(let i=0;i<introText.length;i++){
        introTextArr.push(introText[i]);
      }
        return (
          // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
            <div id="home" className="intro route bg-image s-intro-background">
              <div id="stars" />
              <div id="stars2" />
              <div id="stars3" />
            {/* <div className="overlay-intro"></div> */}
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <h1 className="intro-title mb-4">
                    {
                      introTextArr.map((e,i) => (
                        e === " " ? (
                          <span key={i} className="intro-title-letters" >{e}</span>
                        ) : (
                          <span key={i} style={{ display: 'inline-block' }} className="intro-title-letters" >{e}</span>
                        )
                      ))
                    }
                  </h1>
                  <p className="intro-subtitle">
                    <span className="text-slider-items">
                    </span>
                    <strong className="text-slider"><Typed strings={['Front End Developer', 'Back End Developer', 'React Native Developer']} typeSpeed = {80} backDelay = {1100} backSpeed = {30} loop/></strong>
                  </p>
                  <p className="pt-3">
                    <a 
                      className="btn btn-primary btn js-scroll px-4" 
                      style={{ cursor: "pointer" }}
                      href= {`/files/Shubh_Resume.pdf?${new Date().getTime()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View My Resume <i className="fa fa-download" aria-hidden="true"></i>
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