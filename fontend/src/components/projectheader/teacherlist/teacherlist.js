import axios from "axios";
import { useState } from "react";
import "./techer.css";
import { useNavigate, useParams } from "react-router-dom";

function Teacheradd() {
  const [error, setError] = useState(false);
  const { adminname } = useParams();
  const naviback = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    dob:"",
    Gender: "",
    Qualification: "",
    experiance: "",
    phonenumber: "",
    Email: "",
    Adreass: "",
    class:""
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const conditionArray = [
      form.name.length !== 0,
      form.age.length !== 0,
      form.dob.length !== 0,
      form.Gender.length !== 0,
      form.phonenumber.length !== 0,
      form.Email.length !== 0,
      form.Adreass.length !== 0,
      form.class.length !== 0,
      form.experiance.length !== 0,
      form.Qualification.length !== 0
    ];
  
    const allTrue = conditionArray.every((value) => value);
  
    if (allTrue) {
      axios
        .post("http://localhost:3001/teacher", form, {
          headers: { Authorization: "Basic YWRtaW46MTIz" },
        })
        .then((res) => {
          console.log("Success:", res);
          setForm({
            name: "",
            age: "",
            dob: "",
            Gender: "",
            Qualification: "",
            class: "",
            experiance: "",
            Email: "",
            Adreass: "",
            phonenumber: "",
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setError(true);
    }
  };
  
  const backbtn = () => {
    naviback("/Admin/Adminvalidation/" + adminname);
  };

  return (
    <div id="teacherhead">
       <div className="teacher-head">
      <h1 className="teacherlist">Add Teacher</h1>
      <div>
        <div className="flexitem-teacher">
          <div className="headname">
            <h3 className="headname">Name:</h3>
            <input
              className="inputname"
              type="text"
              placeholder="Enter your name"
               name="name"
               value={form.name}
               onChange={handleChange}
            />
          </div>
          <div className="headname">
            <h3 className="headname">Age:</h3>
            <input
              className="inputname"
              type="number"
              placeholder="please Enter your age"
              name="age"
              value={form.age}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flexitem-teacher">
          <div className="headname">
            <h3 className="headname">Email:</h3>
            <input
              className="inputname"
              type="email"
              placeholder="Enter your email"
              name="Email"
              value={form.Email}
              onChange={handleChange}
            />
            <br></br>
          </div>
          <div className="headname">
            <h3 className="headname">Gender:</h3>
            <select
              name="Gender"
              value={form.Gender}
              onChange={handleChange}
              className="inputname"
            >  
               <option > </option>
               <option value="male"> male</option>
               <option value="female"> female</option>
              <option className="inputname" value="other">
                Other
              </option>
            </select>
            <br></br>
          </div>
        </div>

        <div className="flexitem-teacher">
          <div className="headname">
            <h3 className="headname">Date of birth:</h3>
            <input
              className="inputname"
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
            <br></br>
          </div>
          <div className="headname">
            <h3 className="headname">Qulification:</h3>
            <input
              className="inputname"
              type="text"
              placeholder="Enter Your qulification"
              name="Qualification"
              value={form.Qualification}
              onChange={handleChange}
            />
            <br></br>
          </div>
        </div>

        <div className="flexitem-teacher">
          <div className="headname">
            <h3 className="headname">Phone Number:</h3>
            <input
              className="inputname"
              type="number"
              placeholder="Enter Your number"
              name="phonenumber"
              value={form.phonenumber}
              onChange={handleChange}
            />
            <br></br>
          </div>
          
          

          <div className="headname">
            <h3 className="headname">Address:</h3>
            <textarea
              className="inputname"
              placeholder="Address.."
              name="Adreass"
              value={form.Adreass}
              onChange={handleChange}
            ></textarea>
            <br></br>
          </div>
        </div>

       
      </div>
      <div>
      <div className="flexitem-teacher">
          <div className="headname">
            <h3 className="headname">experience:</h3>
            <input
              className="inputname"
              type="text"
              placeholder="enter your experience"
              name="experiance"
              value={form.experiance}
              onChange={handleChange}
            />
            <br></br>
          </div>
          <div className="headname">
            <h3 className="headname"> class:</h3>
            <input
              className="inputname"
              type="text"
              placeholder="Enter Your class"
              name="class"
              value={form.class}
              onChange={handleChange}
            />
            <br></br>
          </div>
        </div>
        <div className="salu01">
          <h1>  {error && (
            <h4 className="errorname">Please fill all required fields</h4>
          )}</h1>
        
          <button className="submitbtn"
           onClick={handleSubmit}
           >
            Submit
          </button>
        </div>
        <button onClick={backbtn} id="backbtn">
          back
        </button>
      </div>
    </div>

    </div>
   
  );
}

export default Teacheradd;
