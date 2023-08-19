import "./styles.css";
import Navbar from "./Navbar.js";
import Logo from "./Logo.js";
import Card from "./Card.js";
import Footer from "./Footer.js";

var Home = () => {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <Logo />
        </div>
        <div className="Navbar">
          <Navbar />
        </div>
      </div>

      <div className="content">
        <div className="card">
          <Card />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
