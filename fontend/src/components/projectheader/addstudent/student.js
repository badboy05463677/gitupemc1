
import "./student.css";
import axios from "axios";
import { useState } from "react";

function STUDENT() {
  const [error, seterror] = useState(false);
  const [form, setForm] = useState({
    name: "",
    dob: "",
    age: "",
    Gender: "",
    fathername: "",
    mothername: "",
  
    class: "",
    Adreass: "",
    bloodgroup: "",
    Occupation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const student = () => {
    const condition =[
      form.name.length !== 0 &&
      form.dob.length !== 0 &&
      form.age.length !== 0 &&
      form.Gender.length !== 0 &&
      form.class.length !== 0 &&
      form.bloodgroup.length !== 0 &&
      form.fathername.length !== 0 &&
      form.mothername.length !== 0 &&
      form.Occupation.length !== 0 &&
      form.Adreass.length !== 0]
      let truevaluve=condition.every((value)=>value)

    if (truevaluve) {
      axios
        .post(`http://localhost:3001/student`, form, {
          headers: { Authorization: "Basic YWRtaW46MTIz" },
        })
        .then((res) => {
          console.log("success", res);
          setForm({
            name: "",
            dob: "",
            age: "",
            Gender: "",
            class: "",
            bloodgroup: "",
            fathername: "",
            mothername: "",
            Occupation: "",
            Adreass: "",
          });
          seterror(false)
        })
        .catch((err) => {
          console.log(err, "errr");
        });
    } else {
      seterror(true);
    }
  };

  return (
    <div id="studntbody" >
       <div className="studentpage">
      <h1 className="studnthead">Add Student</h1>
      <div>
        <div className="studentflex">
          <div className="headflex">
            <h3 className="headflex1">Student Name :</h3>
            <input
              type="name"
              className="inputnames"
              name="name"
              placeholder="Enter Your name"
              value={form.name}
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
          <div className="studentdiv">
            <h3 className=""> Student D.O.B :</h3>
            <input
              type="date"
              className="inputnames"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
        </div>

        <div className="studentflex">
          <div className="headflex">
            <h3 className="headflex1">Student Age :</h3>
            <input
              type="number"
              className="inputnames"
              name="age"
              placeholder="Enter your age"
              value={form.age}
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
          <div className="studentdiv">
            <h3 className="">Gender :</h3>
            <select
              value={form.Gender}
              name="Gender"
              className="inputnames"
              onChange={handleChange}
            >
              <option>gender
              
              </option>
              <option value="Male" className="inputnames">
                Male
              </option>
              <option value="Female" className="inputnames">
                Female
              </option>
              <option value="Other" className="inputnames">
                Other
              </option>
            </select>
            <br></br>
          </div>
        </div>

        <div className="studentflex">
          <div className="headflex">
            <h3 className="headflex1">Class :</h3>
            <input
              type="text"
              className="inputnames"
              placeholder="Enter your class"
              value={form.class}
              name="class"
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
          <div className="studentdiv">
            <h3 className="">Blood Group :</h3>
            <input
              type="text"
              className="inputnames"
              placeholder="Your Blood Group"
              value={form.bloodgroup}
              name="bloodgroup"
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
        </div>

        <div className="studentflex">
          <div className="headflex">
            <h3 className="headflex1">Father Name :</h3>
            <input
              type="name"
              className="inputnames"
              placeholder="Enter Your father Name"
              value={form.fathername}
              name="fathername"
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
          <div className="student-div">
            <h3 className="">Mother Name:</h3>
            <input
              type="name"
              className="inputnames"
              placeholder="Enter Your Mother Name"
              value={form.mothername}
              name="mothername"
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
        </div>

        <div className="studentflex">
          <div className="headflex">
            <h3 className="headflex1">Occupption:</h3>
            <input
              type="text"
              className="inputnames"
              value={form.Occupation}
              name="Occupation"
              placeholder="Enter the ocuupution"
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
          <div className="studentdiv">
            <h3 className="">Address :</h3>
            <textarea
              placeholder="Address...."
              value={form.Adreass}
              name="Adreass"
              className="inputnames"
              onChange={handleChange}
            ></textarea>
            <br></br>
          </div>
        </div>

        {error && <p className="errorbutton">Please fill all required fields</p>}
        <button onClick={student} className="studentbutton">
          submit
        </button>
      </div>
    </div>
    </div>
   
  );
}

export default STUDENT;
