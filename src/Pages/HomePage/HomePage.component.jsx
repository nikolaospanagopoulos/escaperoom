import React from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";
import Contact from "../../components/contact-form/Contact";
import Cube from "../../components/animated/cube";
class HomePage extends React.Component {
  render() {
    return (
      <section className="home">
        <Navbar />
        
        <h1 className="title">
          Welcome to cube <br />
          challenges
        </h1>

        
        <Contact />
        <div className="cube-animation">
          <Cube />
        </div>
       
      </section>
    );
  }
}

export default HomePage;
