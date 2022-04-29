import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsEthernetRoundedIcon from '@mui/icons-material/SettingsEthernetRounded';
import DeveloperModeRoundedIcon from '@mui/icons-material/DeveloperModeRounded';
import PhonelinkRoundedIcon from '@mui/icons-material/PhonelinkRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';

const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
return(
    
  <section id="service" data-aos="fade-left" className="services-mf">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="text-center">
          <h3 className="title-a">
            SERVICES
          </h3>
          <p className="subtitle-a">
            This is what I can do in this field.
          </p>
          <div className="line"></div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><ComputerIcon style={{"fontSize":"75px"}}/></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">WEB DESIGN</h2>
            <p className="s-description text-center">
              I can design web pages and web applications from scratch,
              and I can deal with design programs such as figma and adobe XD.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><SettingsEthernetRoundedIcon style={{"fontSize":"90px"}}/></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">WEB DEVELOPMENT</h2>
            <p className="s-description text-center">
              I can develop your web pages and re-design them professionally
              and do complete frontend and backend projects.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><DeveloperModeRoundedIcon style={{"fontSize":"70px"}} /></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">MOBILE UI DESIGN</h2>
            <p className="s-description text-center">
              I can design and develop your mobile
              application and it works on Android and iOS in Flutter.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><PhonelinkRoundedIcon  style={{"fontSize":"70px"}}/></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Responsive Design</h2>
            <p className="s-description text-center">
              I can design and develop responsive web pages and web applications using bootstrap css framework
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><StorageRoundedIcon  style={{"fontSize":"70px"}}/></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">DATABASE</h2>
            <p className="s-description text-center">
              I can design and develop your database because I have experience
              in databases such as Mysql, Postgress, SQL Server ..
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><IntegrationInstructionsRoundedIcon style={{"fontSize":"70px"}}/></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">PYTHON</h2>
            <p className="s-description text-center">
              I can develop programs in python language, do some algorithms of
              machine learning, read files, and draw diegrams.
            </p>
          </div>

        </div>

      </div>
      <div className="container line2"></div>
    </div>

  </div>

</section>

);
}

export default Services