
import "./header.css";
import headerimag from "../images/images.png";

import { useNavigate } from "react-router-dom";
function Projecthead() {
  const admipagenavi=useNavigate()
  const navitacher=useNavigate()
  const studnet=useNavigate()
  const Adminnavigate=()=>{
    admipagenavi('/Admin')
  }

  const teachernavi=()=>{
    navitacher('/Teacherlogin')

  }

  const studentnavi=()=>{
    studnet('./StudentLogin')

  }
  

  return (
    <div>
      <div id="img-png">
        <div id="nav-header">
          <div id="logo">
            <img className="logoimg" src={headerimag}></img>
            <h1 className="head mt-2 ms-2 ">J.B NATINOAL SCHOOL</h1>
          </div>
          <div>
            <button className="student me-5 " onClick={Adminnavigate}>ADMIN LOGIN</button>
            <button className="student me-5" onClick={teachernavi}>TEACHER LOGIN</button>
            <button className="student me-5" onClick={studentnavi}>STUDENT LOGIN</button>
          </div>
        </div>
        <div id="paraheaad">
        <h3>We Ensure better education <br></br>for a better world</h3>
        <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
            <h6 id="parabtn">LOG IN </h6>
        </div>

      </div>
      
      
    </div>
  );
}

export default Projecthead;
