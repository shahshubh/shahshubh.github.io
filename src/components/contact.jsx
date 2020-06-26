import React from 'react';
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component{

    render(){
        return (
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}>
                <div className="overlay-mf"></div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="contact-mf">
                        <div id="contact" className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="title-box-2">
                                <h5 className="title-left">
                                Send A Message
                                </h5>
                            </div>
                            <div>
                                <form action="https://getform.io/f/0b5524c2-f754-468e-b761-47d71f460032" method="POST" className="contactForm">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                        <div className="validation"></div>
                                    </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required />
                                        <div className="validation"></div>
                                    </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                        <div className="validation"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" required></textarea>
                                        <div className="validation"></div>
                                    </div>
                                    </div>
                                    <div className="col-md-12">
                                    <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="title-box-2 pt-4 pt-md-0">
                                <h5 className="title-left">
                                Get in Touch
                                </h5>
                            </div>
                            <div className="more-info">
                                <p className="lead">
                                    Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.<br />
                                    Simply fill the from and send me an email.
                                </p>
                                <ul class="list-ico">
                                    <li><span class="ion-ios-location"></span> Mumbai, IN </li>
                                    <a href="tel:+91-7021624827" ><li><span class="ion-ios-telephone"></span> +91-7021624827</li></a>
                                    <a href="mailto:shahshubh1010@gmail.com"><li><span class="ion-email"></span> shahshubh1010@gmail.com </li></a>
                                    {/* <li><span class="ion-email"></span> shubh.as@somaiya.edu</li> */}
                                </ul>
                            </div>
                            <div className="socials">
                                <ul>
                                <li><a href="https://github.com/shahshubh" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                                <li><a href="https://www.linkedin.com/in/shubh-shah-2326081a3/" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>
                                <li><a href="https://www.instagram.com/shah_shubh_/" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="copyright-box">
                        <p className="copyright">2020 &copy; Copyright <strong>Shubh Shah</strong>.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </section>
        );
    }
}

export default Contact;