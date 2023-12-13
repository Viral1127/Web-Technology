import "./styles.css";
import Navbar from "./Navbar.js";
import Logo from "./Logo.js";
//import FecultyCardData from "./FecultyCardData.js";
import Footer from "./Footer.js";
import { Outlet } from "react-router-dom";
import MockAPI from "./MockAPI";

var Home = () => {
  return (
    <>
      <div className="Header">
        <div className="Logo">
          <Logo />
        </div>
        <div className="Navbar">
          <Navbar />
        </div>
      </div>

      <div className="row m-5">
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
