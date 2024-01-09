import axios from "axios";
import "./admin.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Stdimgs from "../../images/pexels-photo-8926556.webp";

function Admin() {
  const [data, setdata] = useState([]);
  const adminnavigate = useNavigate();
  const [error, seterror] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin", {
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
      adminnavigate("Adminvalidation/" + Adminname.value);
    } else {
      seterror(true);
    }
  };
  return (
    <div className="adminbody">
      <div className="admin-image">
        <img src={Stdimgs} alt="JB Academy Logo" />
        <div id="login">
          <h2>JB ACADEMY</h2>
          <h3>Hi Admin!</h3>
          <h4>
            {" "}
            Username : <input id="adminname" />{" "}
          </h4>
          <h4>
            {" "}
            Password : <input id="adminpassword" type="date" />{" "}
          </h4>
         <h4> {error && 
            <h4 className="text-danger ms-5 mt-0">
              Invalid username are password
            </h4>
          }</h4>
          <button onClick={adminbtn}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
