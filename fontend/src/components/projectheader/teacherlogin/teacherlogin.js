import axios from "axios";
import './teacherlogin.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Stdimgs from "../../images/pexels-photo-5212325.jpeg";

function Teacherlogin() {
    const [data, setdata] = useState([]);
    const adminnavigate = useNavigate();
    const [error, seterror] = useState(false);
    
    useEffect(() => {
        axios.get(`http://localhost:3001/teacher`, {
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
        const invalidTeacher = data.find(
            (ele) => ele.name === Adminname.value && ele.dob === Adminpassword.value
        );
        
        if (invalidTeacher) {
            adminnavigate("Teachervalidation/" + invalidTeacher._id);
        } else {
            seterror(true);
        }
    };
    
    return (
        <div id="teacherbody">
            <div id="teacher-image">
                <img src={Stdimgs} alt="JB Academy Logo" />
                <div className="teacherlogin">
                    <h2>JB ACADEMY</h2>
                    <h3>Hi TEACHER!</h3>
                    <h4>
                        {" "}
                        Username : <input id="adminname" />{" "}
                    </h4>
                    <h4>
                        {" "}
                        Password : <input id="adminpassword" type="date" />{" "}
                    </h4>
                    {error && (
                        <h4 className="text-center text-warning fs-5">
                            Invalid username or password
                        </h4>
                    )}
                    <button onClick={adminbtn}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Teacherlogin;
