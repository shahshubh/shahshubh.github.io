import React from 'react';
import myImage from "../img/shubh_profilepic2.jpg";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
                {id:"HTML_CSS_skill", content: "HTML / CSS",porcentage: "85%", value: "85"},
                // {id:"CSS_skill", content: "CSS",porcentage: "80%", value: "80"},
                {id:"Java_skill", content: "Java",porcentage: "75%", value: "75"},
                {id:"JavaScript_skill", content: "JavaScript",porcentage: "80%", value: "80"},
                {id:"NodeJS_skill", content: "NodeJS / ExpressJS",porcentage: "75%", value: "75"},
                // {id:"ExpressJS_skill", content: "ExpressJS",porcentage: "75%", value: "75"},
                {id:"MongoDB_skill", content: "MongoDB",porcentage: "75%", value: "75"},
                {id:"ReactJS_skill", content: "ReactJS",porcentage: "80%", value: "80"},
                {id:"ReactNative_skill", content: "React Native",porcentage: "70%", value: "70"},
                {id:"Python_skill", content: "Python",porcentage: "70%", value: "70"},
            ],
            about_me:[
                {id: "first-p-about",content: "I am a third year student in Computer Science and Engineering(CSE) who loves to transform ideas into reality using code. I am passionate about using Javascript."},
                // {id: "second-p-about", content: "With over two years of experience developing web applications using the latest front-end and back-end technologies."},
                {id: "third-p-about", content: "Motivated developer with experience creating websites and mobile applications. "}
            ]
        }
    }

    render(){
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt="profile-pic"/>
                                                </div>
                                            </div>
                                            {/* <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                <p><span class="title-s">Name: </span> <span>Frank Izquierdo</span></p>
                                                <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                                                <p><span class="title-s">Email: </span> <span>contact@example.com</span></p>
                                                <p><span class="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="skill-mf">
                                            {/* <p className="title-s">Skill</p> */}
                                            {
                                                this.state.skills.map(skill => {
                                                    return(
                                                        <React.Fragment key={skill.id}>
                                                            <span>{skill.content}</span> <span className="pull-right">{skill.porcentage}</span>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: skill.porcentage}} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                About Me
                                                </h5>
                                            </div>
                                            {
                                                this.state.about_me.map((content) => {
                                                    return <p className="lead" key={content.id}>{content.content}</p>;
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;