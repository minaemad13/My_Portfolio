
import React from "react";

import "./style.css";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import image1 from "./imges/vacancy.png";
import image2 from "./imges/hosting.png";
import image3 from "./imges/rest.png";
import image4 from "./imges/Walke.png";
import image5 from "./imges/InkedGP PROTOTYPE_LI.jpg";
import image6 from "./imges/extention.png";
import { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Work = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        
  <section id="work" data-aos="fade-up" className="portfolio-mf ">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="title-box text-center">
          <h3 className="title-a">
            PORTFOLIO
          </h3>
          <p className="subtitle-a">
            These are some of my work in the field of
            developing and designing websites and mobile applications.
          </p>
          <div className="line3"></div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="work-box">
          <div className="work-img">
            <img src={image1} alt="Rental" className="img-fluid"/>
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title"><a href="https://github.com/minaemad13/Vacation-Rental" target="_blanck">Rental
                    Vacation Responsive Design</a></h2>
                <div className="w-more">
                  <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Oct. 2021</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                <span > <FavoriteRoundedIcon fontSize="large" style={{"color":"red"}}/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="work-box">
          <div className="work-img">
            <img src={image2} alt="Hosting Company" className="img-fluid"/>
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title"><a href="https://github.com/minaemad13/Hosting-Page-Design"
                    target="_blanc">Hosting Company Responsive Design</a></h2>
                <div className="w-more">
                  <span className="w-ctegory">Web Design</span> / <span className="w-date">25 Oct. 2021</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                <span > <FavoriteRoundedIcon fontSize="large" style={{"color":"red"}}/></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-4">
        <div className="work-box">

          <div className="work-img">
            <img src={image3} alt="Resturant" className="img-fluid"/>
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title"><a href="https://github.com/minaemad13/Restaurant-WebSite"
                    target="_blanck">Egyptian Sushi Restaurant</a></h2>
                <div className="w-more">
                  <span className="w-ctegory">Web Development</span> / <span className="w-date">10 Jan. 2020</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                <span > <FavoriteRoundedIcon fontSize="large" style={{"color":"red"}}/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="work-box">
          <div className="work-img">
            <img src={image4} alt="Photographer delivery" className="img-fluid"/>
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title"><a
                    href="https://github.com/minaemad13/Prototypes/blob/main/car%20washer%20application.xd"
                    target="_blanck">Photographer Delivery</a></h2>
                <div className="w-more">
                  <span className="w-ctegory">Mobile Design</span> / <span className="w-date">18 Sep. 2020</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                  <span > <FavoriteRoundedIcon fontSize="large" style={{"color":"red"}}/></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-4">
        <div className="work-box">

          <div className="work-img">
            <img src={image5} alt="" className="img-fluid"/>
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title"><a
                    href="https://github.com/minaemad13/Metro-Ticket-Reservasion_Mobile_App/upload/main"
                    target="_blanck">Metro Ticket Reservasion</a></h2>
                <div className="w-more">
                  <span className="w-ctegory">Mobile Design & Development</span> / <span className="w-date">20 Jul.
                    2021</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                <span > <FavoriteRoundedIcon fontSize="large" style={{"color":"red"}}/></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-4">
        <div className="work-box">

          <div className="work-img">
            <img src={image6} alt="" className="img-fluid"/>
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title" style={{"marginTop": "30p"}}><a
                    href="https://github.com/minaemad13/Chrome_Extention_ITI_First_Project" target="_blanck">Chrome
                    Extensions </a></h2>
                <div className="w-more">
                  <span className="w-ctegory">Web Development</span> / <span className="w-date">10 Nov. 2021</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like" style={{"marginTop": "25px"}}>
                <span > <FavoriteRoundedIcon fontSize="large" style={{"color":"red"}}/></span>
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
export default Work