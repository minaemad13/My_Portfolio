import React from "react";

import "./style.css";
import emailjs from 'emailjs-com';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_28nv5gc', 'template_ihcejbv', e.target, 'user_Qdr9KNtFvRj7X19Pg2l5x')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

    return(
        

  <section id="contact" data-aos="fade-right">
  <div className="overlay-con"></div>
  <div className="container">
    <div className="row ">
      <div className="col-sm-12">
        <div className="contact-mf">
          <div className="box-shadow">
            <div className="row">
              <div className="col-md-6">
                <div className="title-box-2">
                  <h5 className="title-left">
                    Send Message
                  </h5>
                </div>
                <div>
                  <form action="#contact" className="row  needs-validation" novalidate onSubmit={sendEmail}>
                    <div className="col-md-10">
                      <label for="validationCustom01" className="form-label">Name</label>
                      <input type="text" className="form-control" name="Name" id="validationCustom01" placeholder="Enter Your Name"
                        required/>
                      <div className="valid-feedback">
                        Thank You!
                      </div>
                      <div className="invalid-feedback">
                        Please Type Your Full Name.
                      </div>
                    </div>
                    <div className="col-md-10">
                      <label for="validationCustom02" className="form-label">Email</label>
                      <input type="email" className="form-control" id="validationCustom02"  name="Email" placeholder="Enter Your Email"
                        required/>
                      <div className="valid-feedback">
                        Thank You!
                      </div>
                      <div className="invalid-feedback">
                        Please Type a Valid Email.
                      </div>
                    </div>
                    <div className="col-md-10">
                      <label for="validationCustom03" className="form-label">Subject</label>
                      <input type="text" className="form-control" id="validationCustom03" name="Subject" placeholder="Subject"/>
                    </div>
                    <div className="col-md-10">
                      <label for="validationCustom04" className="form-label">Message</label>
                      <textarea className="form-control" id="validationTextarea" name="message" placeholder="Message"
                        required></textarea>
                      <div className="invalid-feedback">
                        Please Enter Your Message.
                      </div>
                      <div className="valid-feedback">
                        Thank You!
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-outline-primary" id="sendemail" type="submit"
                        style={{"marginTop": "10px"}}>Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="title-box-2 ">
                  <h5 className="title-left">
                    Contact Us
                  </h5>
                </div>
                <div className="more-info">
                  <p>
                    Hello, I am very happy to send us a message of motivation, or if you face a problem, you can
                    contact us, or if you want to do a project or any tasks, you can send a message to us
                    or communicate with us via WhatsApp,
                    Facebook, Linkedin and Instagram.
                  </p>
                  <ul className="list-ico">
                    <li><LocationOnRoundedIcon fontSize="medium" style={{"color":"#0078ff"}}/> El Zaiton,Cairo,Egypt</li>
                    <li><LocalPhoneRoundedIcon fontSize="medium" style={{"color":"#0078ff"}}/> (+2) 01204822114</li>
                    <li><DraftsRoundedIcon  fontSize="medium" style={{"color":"#0078ff"}}/> menaemadorai@gmail.com</li>
                  </ul>
                </div>
                <div className="socials">
                  <ul>
                    <li><a href="https://www.facebook.com/menaemad.menaemad.9" target="_blanck"><span
                          className="ico-circle"><FacebookRoundedIcon style={{"fontSize":"30px"}}/></span></a></li>
                    <li><a href="https://www.instagram.com/mina_emad13/" target="_blanck"><span className="ico-circle"><InstagramIcon  style={{"fontSize":"30px"}}/></span></a></li>
                    <li><a href="https://www.linkedin.com/in/mina-emad-68734118b/" target="_blanck"><span
                          className="ico-circle"><LinkedInIcon style={{"fontSize":"30px"}}/></span></a></li>
                    <li><a href="https://github.com/minaemad13" target="_blanck"><span className="ico-circle"><GitHubIcon style={{"fontSize":"30px"}}/></span></a></li>
                  </ul>
                </div>
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
export default Contact