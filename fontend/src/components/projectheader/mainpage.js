import './home.css'

import about from '../images/about.jpg'
import about1 from '../images/about-1.jpg'
import subject1 from '../images/subject-1.png'
import subject2 from '../images/subject-2.png'
import subject3 from '../images/subject-3.png'
import subject4 from '../images/subject-4.png'
import teacher1 from '../images/teacher-1.png'
import teacher2 from '../images/teacher-2.png'
import teacher3 from '../images/teacher-3.png'
import teacher4 from '../images/teacher-4.png'


import { RiLoginBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Home() {
    const mergestd = useNavigate();
    const stdlogin = () => {
        mergestd('/StudentLogin');
    }

    const mergeteacher = useNavigate();
    const Teacherln = () => {
        mergeteacher('/Teacherlogin'); // Fix: Use '/Teacherlogin' instead of './Teacherlogin'
    }

    const mergeadmin = useNavigate();
    const Adminlogin = () => {
        mergeadmin('/Admin');
    }

    return <div className='body'>
        {/* navbar */}
        <header className='header'>
            <h3 className="logo"> <i><IoMdSchool /></i> J.B School Academy</h3>
            
            <nav className='navbar'>
                <button className="btn"
                 onClick={stdlogin}
                >STUDENT</button>
                <button className="btn" 
                onClick={Teacherln}
                >TEACHER</button>
                <button className="btn" onClick={Adminlogin}>ADMIN</button>
            </nav>
        </header>

        {/* ---- navbar end ---- */}

        {/* ----  banner start ---- */}

        <section className="home" >

            <div className="content">
                <h3>the best courses you will find here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi fuga unde, voluptates,ipsum dolor sit amet consectetur adipisicing elit. Numquam animi fuga unde, voluptates,
                    nisi qui hics.</p>
                <a href="#" className="btn">
                    <span className="text text-1">learn more</span>
                    <span className="text text-2 " aria-hidden="true">learn more</span>
                </a>
            </div>

        </section>

        {/* ----  banner start ---- */}

      
        {/* ----  banner End ---- */}


        <section className="teacher" >

            <h1 className="heading">Alumuni</h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={teacher1} />
                        <div className="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3>SATHIS</h3>
                        <span>developer</span>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={teacher2} />
                        <div className="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Tamil</h3>
                        <span>cyper sequurity</span>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={teacher3} />
                        <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3>john deo</h3>
                        <span>instructor</span>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={teacher4} />
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Kumaran deo</h3>
                        <span>Back end developer</span>
                    </div>
                </div>

            </div>

        </section>


        {/* ----  banner start ---- */}


        <section className="subjects">

            <h1 className="heading">our achievements</h1>

            <div className="box-container">

                <div className="box">
                    <img src={subject1} />
                    <h3>QCE Success for Year 12</h3>
                    <p>fun & challenging</p>
                </div>

                <div className="box">
                    <img src={subject2} />
                    <h3>Tailored Pathways for Success</h3>
                    <p>fun & challenging</p>
                </div>

                <div className="box">
                    <img src={subject3} />
                    <h3>Engaged & Supported Learners</h3>
                    <p>fun & challenging</p>
                </div>

                <div className="box">
                    <img src={subject4} />
                    <h3>Satisfaction in Teaching & Learning</h3>
                    <p>fun & challenging</p>
                </div>

            </div>

        </section>


        

        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>find us here</h3>
                    <p>j.b Academy</p>
                    <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                        <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                        <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="box">
                    <h3>contact us</h3>
                    <p>+91 9940721525</p>
                    <a href="#" className="link">jbacadmy87@gmail.com</a>
                </div>

                <div className="box">
                    <h3>location</h3>
                    <h5>Cit Nager , T-Nager </h5>
                    <h5>Chennai - 600006 </h5>
                    <h5>Tamilnadu</h5>
                </div>

            </div>
            <div className="credit">created by <span>Prathap RS </span>| Imran - Crampete</div>
        </section>

    </div>
}

export default Home;
