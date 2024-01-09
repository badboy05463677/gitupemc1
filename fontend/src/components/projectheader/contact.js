import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './contact.css';
import about from "../images/images.png";
import about1 from "../images/images.png";
import teacher1 from "../images/teacher1.png";
import teacher2 from "../images/teacher2.png";
import teacher3 from "../images/teacher3.png";
import teacher4 from "../images/teacher4.png";
import subject1 from "../images/subject1.png";
import subject2 from "../images/subject2.png";
import subject3 from "../images/subject3.png";
import subject4 from "../images/subject4.png";

function Contact() {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>the best courses you will find here</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi fuga unde, voluptates, nisi qui hics.</p>
          <a href="#" className="btn">
            <span className="text text-1">learn more</span>
            <span className="text text-2" aria-hidden="true">learn more</span>
          </a>
        </div>
      </section>

      {/* ----  banner start ---- */}

      <section className="about" id="about">
        <h1 className="heading">about us</h1>
        <div className="container">
          <figure className="about-image">
            <img src={about} id='abtimg1' alt="About 1" />
            <img src={about1} className='about-img' alt="About 2" />
          </figure>
          <div className="about-content">
            <h3>Welcome to Gani Academy</h3>
            <p>Gani Academy is a Higher Secondary School started in the year 1997, and here we stand proud stepping into the 25th year seeking inspiration from our achievements...</p>
            <a href="#" className="btn">
              <span className="text text-1">read more</span>
              <span className="text text-2" aria-hidden="true">read more</span>
            </a>
          </div>
        </div>
      </section>
      {/* ----  banner End ---- */}

      <section className="teacher" id="teacher">
        <h1 className="heading">Alumni</h1>
        <div className="box-container">
          {/* Teacher boxes go here */}
        </div>
      </section>

      {/* ----  banner start ---- */}
      {/* More sections go here */}
      {/* ----  banner End ---- */}

      <section className="footer">
        <div className="box-container">
          {/* Footer boxes go here */}
        </div>
        <div className="credit">created by <span>ninjashub </span>| all rights are reserved!</div>
      </section>
    </div>
  );
}

export default Contact;
