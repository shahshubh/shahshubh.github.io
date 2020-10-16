import React from 'react';

import {Tabs, Tab} from 'react-bootstrap-tabs';

//import socialApp
import socialApp from '../img/socialapp/home.PNG';
import socialApp1 from '../img/socialapp/comments.PNG';
import socialApp2 from '../img/socialapp/profile.png';
import socialApp3 from '../img/socialapp/confirm.PNG';
import socialApp4 from '../img/socialapp/chat.PNG';
import socialApp5 from '../img/socialapp/resetpassword.PNG';

//import medeasy
import medeasy from '../img/medeasy/dashboard-cropped2.png'
import medeasy1 from '../img/medeasy/admin-orders.png'
import medeasy2 from '../img/medeasy/pending-orders.png'
import medeasy3 from '../img/medeasy/home.png'
import medeasy4 from '../img/medeasy/cart.PNG'
import medeasy5 from '../img/medeasy/orders.PNG'
import medeasy6 from '../img/medeasy/order-details.PNG'

// import chatapp
import chatapp from '../img/chat-app/1.PNG'
import chatapp1 from '../img/chat-app/2.PNG'

//import predimage
import predimage from '../img/predimage/Capture.PNG'
import predimage1 from '../img/predimage/screen1.PNG'
import predimage2 from '../img/predimage/screen2.PNG'
import predimage3 from '../img/predimage/screen4.PNG'

//import spam message
import spam from '../img/spam-msg/spam1.PNG';
import spam1 from '../img/spam-msg/spam2.PNG';
import spam2 from '../img/spam-msg/spam3.PNG';

//import movie recommender system
import movie from '../img/movie-recommender/movie1.PNG';
import movie1 from '../img/movie-recommender/movie2.PNG';
import movie2 from '../img/movie-recommender/movie3.PNG';

// import shop app
import shopapp from '../img/shop-app/2.png';
import shopapp1 from '../img/shop-app/1.png';
import shopapp2 from '../img/shop-app/3.png';
import shopapp3 from '../img/shop-app/4.png';
import shopapp4 from '../img/shop-app/5.png';
import shopapp5 from '../img/shop-app/6.png';
import shopapp6 from '../img/shop-app/7.png';

// socialapp RN
import socialapp from '../img/socialapp-rn/1.jpg';
import socialapp1 from '../img/socialapp-rn/2.jpg';
import socialapp2 from '../img/socialapp-rn/3.jpg';
import socialapp3 from '../img/socialapp-rn/4.jpg';
import socialapp4 from '../img/socialapp-rn/5.jpg';
import socialapp7 from '../img/socialapp-rn/8.jpg';
import socialapp8 from '../img/socialapp-rn/9.jpg';
import socialapp10 from '../img/socialapp-rn/11.jpg';




// ----------------WebP Images----------------

//import predimage
import predimageWebP from '../img/predimage/Capture.webp'
import predimageWebP1 from '../img/predimage/screen1.webp'
import predimageWebP2 from '../img/predimage/screen2.webp'
import predimageWebP3 from '../img/predimage/screen4.webp'

// import chatapp
import chatappWebP from '../img/chat-app/1.webp'
import chatappWebP1 from '../img/chat-app/2.webp'

//import medeasy
import medeasyWebP from '../img/medeasy/dashboard-cropped2.webp'
import medeasyWebP1 from '../img/medeasy/admin-orders.webp'
import medeasyWebP2 from '../img/medeasy/pending-orders.webp'
import medeasyWebP3 from '../img/medeasy/home.webp'
import medeasyWebP4 from '../img/medeasy/cart.webp'
import medeasyWebP5 from '../img/medeasy/orders.webp'
import medeasyWebP6 from '../img/medeasy/order-details.webp'

//import movie recommender system
import movieWebP from '../img/movie-recommender/movie1.webp';
import movieWebP1 from '../img/movie-recommender/movie2.webp';
import movieWebP2 from '../img/movie-recommender/movie3.webp';

//import spam message
import spamWebP from '../img/spam-msg/spam1.webp';
import spamWebP1 from '../img/spam-msg/spam2.webp';
import spamWebP2 from '../img/spam-msg/spam3.webp';


//import socialApp
import socialAppWebP from '../img/socialapp/home.webp';
import socialAppWebP1 from '../img/socialapp/comments.webp';
import socialAppWebP2 from '../img/socialapp/profile.webp';
import socialAppWebP3 from '../img/socialapp/confirm.webp';
import socialAppWebP4 from '../img/socialapp/chat.webp';
import socialAppWebP5 from '../img/socialapp/resetpassword.webp';

// import shop app
import shopappWebP from '../img/shop-app/2.webp';
import shopappWebP1 from '../img/shop-app/1.webp';
import shopappWebP2 from '../img/shop-app/3.webp';
import shopappWebP3 from '../img/shop-app/4.webp';
import shopappWebP4 from '../img/shop-app/5.webp';
import shopappWebP5 from '../img/shop-app/6.webp';
import shopappWebP6 from '../img/shop-app/7.webp';

// socialapp RN
import socialappWebP from '../img/socialapp-rn/1.webp';
import socialappWebP1 from '../img/socialapp-rn/2.webp';
import socialappWebP2 from '../img/socialapp-rn/3.webp';
import socialappWebP3 from '../img/socialapp-rn/4.webp';
import socialappWebP4 from '../img/socialapp-rn/5.webp';
import socialappWebP7 from '../img/socialapp-rn/8.webp';
import socialappWebP8 from '../img/socialapp-rn/9.webp';
import socialappWebP10 from '../img/socialapp-rn/11.webp';



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

            imageWebP: socialappWebP,
            imageWebP1: socialappWebP1,
            imagesWebP: [socialappWebP2, socialappWebP3, socialappWebP4, socialappWebP7, socialappWebP8, socialappWebP10 ],

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

            imageWebP: shopappWebP,
            imageWebP1: shopappWebP1,
            imagesWebP: [shopappWebP2,shopappWebP3,shopappWebP4,shopappWebP5,shopappWebP6],
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

            imageWebP: socialAppWebP,
            imageWebP1: socialAppWebP1,
            imagesWebP: [socialAppWebP2, socialAppWebP3, socialAppWebP4, socialAppWebP5],

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
            
            imageWebP: spamWebP,
            imageWebP1: spamWebP1,
            imagesWebP: [spamWebP2],

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
            
            imageWebP: movieWebP,
            imageWebP1: movieWebP1,
            imagesWebP: [movieWebP2],

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
            
            imageWebP: medeasyWebP,
            imageWebP1: medeasyWebP1,
            imagesWebP: [medeasyWebP2, medeasyWebP3, medeasyWebP4, medeasyWebP5, medeasyWebP6],

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
            
            imageWebP: chatappWebP1,
            imageWebP1: chatappWebP,
            imagesWebP: [],
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
            
            imageWebP: predimageWebP,
            imageWebP1: predimageWebP1,
            imagesWebP: [predimageWebP2, predimageWebP3],

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