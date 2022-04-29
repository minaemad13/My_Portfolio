import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./componants/Home";

import NavBar from "./componants/NavBar";
import About from "./componants/About";
import Services from "./componants/Service";
import Work from "./componants/Work";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
