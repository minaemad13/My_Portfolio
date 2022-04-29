import React from "react";

import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" style={{"backgroundColor":"#050D1F"}}>
    
    <Navbar.Brand  className="navbar-brand" style={{ "fontStyle": "oblique", "fontFamily": "serif","fontWeight":"bolder" }}  href="#home">MINAEMAD</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Nav.Link className="nav-link " href="#home" style={{ "fontSize": "20px" }}> <HomeIcon fontSize="medium"/> Home</Nav.Link>
        <Nav.Link className="nav-link " href="#about" style={{ "fontSize": "20px" }}><CoPresentIcon fontSize="medium"/> About</Nav.Link>
        <Nav.Link className="nav-link " href="#service" style={{ "fontSize": "20px" }}><MiscellaneousServicesRoundedIcon fontSize="medium"/> Services</Nav.Link>
        <Nav.Link className="nav-link " href="#work" style={{ "fontSize": "20px" }}><WorkspacePremiumRoundedIcon fontSize="medium"/> Work</Nav.Link>
        <Nav.Link className="nav-link " href="#contact" style={{ "fontSize": "20px" }}><PermContactCalendarRoundedIcon fontSize="medium"/> Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavBar;
