import React from 'react';

import {Tabs, Tab} from 'react-bootstrap-tabs';

//import predimage
import predimage from '../img/predimage/Capture.webp'
import predimage1 from '../img/predimage/screen1.webp'
import predimage2 from '../img/predimage/screen2.webp'
import predimage3 from '../img/predimage/screen4.webp'

// import chatapp
import chatapp from '../img/chat-app/1.webp'
import chatapp1 from '../img/chat-app/2.webp'

//import medeasy
import medeasy from '../img/medeasy/dashboard-cropped2.webp'
import medeasy1 from '../img/medeasy/admin-orders.webp'
import medeasy2 from '../img/medeasy/pending-orders.webp'
import medeasy3 from '../img/medeasy/home.webp'
import medeasy4 from '../img/medeasy/cart.webp'
import medeasy5 from '../img/medeasy/orders.webp'
import medeasy6 from '../img/medeasy/order-details.webp'

//import movie recommender system
import movie from '../img/movie-recommender/movie1.webp';
import movie1 from '../img/movie-recommender/movie2.webp';
import movie2 from '../img/movie-recommender/movie3.webp';

//import spam message
import spam from '../img/spam-msg/spam1.webp';
import spam1 from '../img/spam-msg/spam2.webp';
import spam2 from '../img/spam-msg/spam3.webp';


//import socialApp
import socialApp from '../img/socialapp/home.webp';
import socialApp1 from '../img/socialapp/comments.webp';
import socialApp2 from '../img/socialapp/profile.webp';
import socialApp3 from '../img/socialapp/confirm.webp';
import socialApp4 from '../img/socialapp/chat.webp';
import socialApp5 from '../img/socialapp/resetpassword.webp';

// import shop app
import shopapp from '../img/shop-app/2.webp';
import shopapp1 from '../img/shop-app/1.webp';
import shopapp2 from '../img/shop-app/3.webp';
import shopapp3 from '../img/shop-app/4.webp';
import shopapp4 from '../img/shop-app/5.webp';
import shopapp5 from '../img/shop-app/6.webp';
import shopapp6 from '../img/shop-app/7.webp';

// socialapp RN
import socialapp from '../img/socialapp-rn/1.webp';
import socialapp1 from '../img/socialapp-rn/2.webp';
import socialapp2 from '../img/socialapp-rn/3.webp';
import socialapp3 from '../img/socialapp-rn/4.webp';
import socialapp4 from '../img/socialapp-rn/5.webp';
import socialapp7 from '../img/socialapp-rn/8.webp';
import socialapp8 from '../img/socialapp-rn/9.webp';
import socialapp10 from '../img/socialapp-rn/11.webp';


import Projects from './projects';


class Portfolio extends React.Component{
    constructor(){
      super();
      this.state = {
        projects: [

          {
            title: "SocialApp-RN",
            webLink: "https://socialapp-serverr.herokuapp.com/static/socialapp-rn-2.apk",
            githubLink: "https://github.com/shahshubh/SocialApp-React-Native",
            description:
              "Social Networking mobile app similar to Instagram in React Native.",
            stack: [
              "REACT-NATIVE",
              "REDUX",
              "SOCKET.IO",
              "MONGODB",
              "NODEJS",
              "EXPRESS"
            ],
            image: socialapp,
            image1: socialapp1,
            images: [socialapp2, socialapp3, socialapp4, socialapp7, socialapp8, socialapp10 ],
            dataLightbox: "gallery-socialapp-rn",
            type: "app"
          },

          {
            title: "ShopApp",
            
            githubLink: "https://github.com/shahshubh/Shop-App",
            description:
              "An E-commerce shop app in React Native.",
            stack: [
              "REACTJS",
              "REACT-NATIVE",
              "REDUX",
              "FIREBASE",
            ],
            image: shopapp,
            image1: shopapp1,
            images: [shopapp2,shopapp3,shopapp4,shopapp5,shopapp6],
            dataLightbox: "gallery-shopapp",
            type: "app"
          },

          {
            title: "SocialApp",
            webLink: "https://sociallappp.herokuapp.com/",
            githubLink: "https://github.com/shahshubh/socialApp-MERN",
            description:
              "This is a social networking webapp similar to Instagram.",
            stack: [
              "REACTJS",
              "NODEJS",
              "EXPRESSJS",
              "MONGODB",
              "BOOTSTRAP-MATERIAL",
            ],
            image: socialApp,
            image1: socialApp1,
            images: [socialApp2, socialApp3, socialApp4, socialApp5],
            dataLightbox: "gallery-socialapp",
            type: "web"
          },
          {
            title: "Spam Message Classification",
            githubLink: "https://github.com/shahshubh/spam-message-classification",
            description: "A Spam Detection Filter for Text Messages using NLP and Naive Bayes.",
            stack: [
              "NUMPY",
              "PANDAS",
              "SEABORN",
              "SCIKIT-LEARN",
              "NLP",
              "NAIVE-BAYES",
            ],
            image: spam,
            image1: spam1,
            images: [spam2],
            dataLightbox: "gallery-spam-msg",
            type: "ml/dl"
          },
          {
            title: "Movie Recommender System",
            githubLink: "https://github.com/shahshubh/Machine-Learning-Projects/tree/master/Movie_recommender_system",
            description: "A basic movie recommender system. It tells you what movies are most similar to your movie choice.",
            stack: [
              "NUMPY",
              "PANDAS",
              "SEABORN",
            ],
            image: movie,
            image1: movie1,
            images: [movie2],
            dataLightbox: "gallery-movie-recommender",
            type: "ml/dl"
          },
          {
            title: "MedEasy",
            webLink: "https://medeasyy.herokuapp.com/",
            githubLink: "https://github.com/shahshubh/medEasy",
            description: "MedEasy is an E-commerce website for medicines.",
            stack: [
              "HTML",
              "CSS",
              "BOOTSTRAP",
              "JAVASCRIPT",
              "NODEJS",
              "EXPRESSJS",
              "MONGODB",
            ],
            image: medeasy,
            image1: medeasy1,
            images: [medeasy2, medeasy3, medeasy4, medeasy5, medeasy6],
            dataLightbox: "gallery-medeasy",
            type: "web"
          },
          {
            title: "Chat-App",
            webLink: "https://chat-appln.netlify.com/",
            githubLink: "https://github.com/shahshubh/chat-app",
            description:
              "This is a Realtime chat app where users can join any room to chat.",
            stack: ["REACTJS", "NODEJS", "EXPRESSJS", "SOCKET.IO"],
            image: chatapp1,
            image1: chatapp,
            images: [],
            dataLightbox: "gallery-chatapp",
            type: "web"
          },
          {
            title: "predImage - model trainer ",
            githubLink: "https://github.com/shahshubh/model-trainer",
            description:
              "PredImage is a webapp to predict images. This project was made in 24hrs at DJCSI Hackathon CODESHASTRA 6.0. ",
            stack: [
              "BOOTSTRAP",
              "NODEJS",
              "JAVASCRIPT",
              "FLASK",
              "TENSORFLOW",
              "OPENCV",
              "KERAS-CNN",
            ],
            image: predimage,
            image1: predimage1,
            images: [predimage2, predimage3],
            dataLightbox: "gallery-predimage",
            type: "ml/dl"
          },

        ],

      }
    }
    render(){

        return (
          <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a s-port ">
                      Portfolio
                    </h3>
                    <p className="subtitle-a">
                      Check Out Few Of My Selected Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                  {/* <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'  }} >
                    <div>All</div>
                    <div>Website</div>
                    <div>Native Apps</div>
                  </div> */}
                </div>
              </div>

              <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                <Tab label="All">
                  <Projects projects={this.state.projects} type="All" />
                </Tab>
                <Tab label="Web Developement">
                  <Projects projects={this.state.projects} type="web" />
                </Tab>
                <Tab label="App Developement">
                  <Projects projects={this.state.projects} type="app" />
                </Tab>
                <Tab label="ML/DL">
                  <Projects projects={this.state.projects} type="ml/dl" />
                </Tab>
            </Tabs>

            </div>
          </section>
        );
    }
}

export default Portfolio;