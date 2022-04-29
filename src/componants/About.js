import React from "react";
import profile from "./imges/my foto.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { saveAs } from "file-saver";
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      const saveFile = () => {
        saveAs(
          "https://drive.google.com/uc?export=download&id=1KHZ7vWplzHGlRoMSWEdCu4b-HQ2id41S",
          "Mina_Emad_CV.pdf"
        );
      };

 return(
     <>
     
  <section id="about" data-aos="fade-up">
    <div className="container ">
      <div className="row">
        <div className="col-sm-12">
          <div className="box-shadow">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-6 col-md-5">
                    <div className="about-img">
                      <img src={profile} className="img-fluid rounded-circle" alt="profile"/>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7">
                    <div className="about-info">
                      <p><span className="title-s">Name: </span> <span className="info">Mina Emad Lotfy</span></p>
                      <p><span className="title-s">Profile: </span> <span className="info">Full Stack Developer & Python
                          Developer</span></p>
                      <p><span className="title-s">Email: </span> <span className="info">menaemadorai@gmail.com</span></p>
                      <p><span className="title-s">Phone: </span> <span className="info">(+2) 01204822114 / 01226369044</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skill-mf">
                  <p className="title-s2">Skills</p>
                  <span>HTML / HTML5 95%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "95%"}} aria-valuenow="95"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>CSS3 & Bootstrap 85%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "85%"}} aria-valuenow="75" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <span>JavaScript & JQuery 85%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "85%"}} aria-valuenow="50" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <span>ReactJs 80%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="50" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <span>Python 75%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "75%"}} aria-valuenow="90" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <span>DJANGO / FLASK 80%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="90" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-me">
                  <div className="title-box-2">
                    <h5 className="title-left">
                      About Me
                    </h5>
                  </div>
                  <p>
                    Hi, I’m Mina Emad, currently training as a Full Stack Developer using Python at
                    Information Technology Institute (ITI) . I have a Master’s degree in CS from Cairo University
                    Major Departement Information System(IS) and Mainor Departement Decesion Support(DS).
                  </p>
                  <p>
                    I have good experience in the following areas: HTML5, CSS3, SQL, MySql, javascript, Ajax, bootstrap,
                    Python (Django, Flask ), Flutter

                    Database: MySQL, Postgres

                    can manage my work well and meet customer needs.

                    I enjoy problem-solving. have good experience in version control (GIT).

                    I have good communication and presentation skills, write clean code, and good team player.
                  </p>
                  <button className="btn btn-outline-primary btn-lg" id="CV" onClick={saveFile}
                    style={{"marginTop": "30px", "marginLeft": "20px"}}>Downlod My CV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


     </>
 );
}

export default About;