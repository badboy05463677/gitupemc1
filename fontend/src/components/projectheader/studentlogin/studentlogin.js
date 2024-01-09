import axios from "axios";
import "./studentlogin.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Stdimgs from "../../images/pexels-photo-4050083.webp";
function StudentLogin(){
   
    const [data, setdata] = useState([]);
    const adminnavigate = useNavigate();
    const [error, seterror] = useState(false);
    useEffect(() => {
        axios
        .get(`http://localhost:3001/student`, {
          headers: { Authorization: "Basic YWRtaW46MTIz" },
        })
        .then((res) => {
          setdata(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const adminbtn = () => {
      let Adminname = document.getElementById("adminname");
      let Adminpassword = document.getElementById("adminpassword");
      const Invalid = data.find(
        (ele) => ele.name === Adminname.value && ele.dob === Adminpassword.value
      );
      if (Invalid) {
        adminnavigate("/Studentvalidation/" + Invalid._id);
      } else {
        seterror(true);
      }
    };
    return (
      <div id="adminbody">
        <div id="admin-image">
          <img src={Stdimgs} alt="JB Academy Logo" />
          <div className="login">
            <h2>JB ACADEMY</h2>
            <h3>Hi Student!</h3>
            <h4>
              {" "}
              Username : <input id="adminname" />{" "}
            </h4>
            <h4>
              {" "}
              Password : <input id="adminpassword" type="date" />{" "}
            </h4>
            {error && (
              <h4 className="text-center text-info fs-5">
                Invalid username or password
              </h4>
            )}
            <button onClick={adminbtn}>Login</button>
          </div>
        </div>
      </div>
    );
}
export default StudentLogin