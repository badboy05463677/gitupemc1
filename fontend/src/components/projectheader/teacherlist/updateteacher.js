import { useState, useEffect } from "react";
import "./updateteacher.css";
import axios from "axios";
import { useParams } from "react-router-dom";
function Updateteacher() {
  const { _id } = useParams();

const [form, setForm] = useState({
  name:"",
  dob:"",
  age:"",
  Gender:"",
  Qualification:"",
  experiance:"",
  phonenumber:"",
  Email:"",
  Adreass:"",
  class:""
});


useEffect(() => {
  axios.get(`http://localhost:3001/teacher`, {
    headers: { Authorization: "Basic YWRtaW46MTIz" },
  })
    .then((res) => {
      const teacher = res.data.find((ele) => ele._id === _id);
      setForm(teacher);
    })
    .catch((err) => {
      console.log(err);
    });
}, [_id]);
  
const handlechange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const submit = () => {
    axios.put(`http://localhost:3001/Teacher/update/${_id}`, form, {
      headers: { Authorization: "Basic YWRtaW46MTIz" },
    })
      .then(() => {
        console.log("success update");
      })
      .catch((error) => {
        console.error("Error updating:", error);
      });
  };
  

 
  
return (
  <div id="updatebody">
    <div className="upadteflex">
    <h1 className="updateteacher">UpdateTeacher</h1>
    <div>
      <div className="update-div">
      <div className="updateflex">
      <h3 className="updateflex1">Name:</h3>
      <input
        className="inputupdate"
        type="text"
        placeholder="Enter your name"
        value={form.name}
    name="name"
    onChange={handlechange}
       
      /></div><div className="updateflex2">
      <h3 className="updateflex1">Age:</h3>
      <input
        className="inputupdate"
        type="number"
        placeholder="please Enter your age"
        value={form.age}
        name="age"
        onChange={handlechange}
       
      /></div></div>


      <div className="update-div">
        <div className="updateflex">
      <h3 className="updateflex1">Email:</h3>
      <input
      className="inputupdate"
        type="email"
        placeholder="Enter your email"
        value={form.Email}
        name="Email"
        onChange={handlechange}
     
      /><br></br></div>
      <div className="updateflex2">
        
      <h3 className="updateflex1">Gender:</h3>
      <select
         value={form.Gender}
         name="Gender"
         onChange={handlechange}
        className="inputupdate"
      >
        <option className="inputupdate" value="male">Male</option>
        <option className="inputupdate" value="female">Female</option>
        <option className="inputupdate" value="other">Other</option>
      </select><br></br></div>
      </div>

      <div className="update-div">
        <div className="updateflex">
      <h3 className="updateflex1">Date of birth:</h3>
      <input
      className="inputupdate"
        type="date"
        value={form.dob}
        name="dob"
        onChange={handlechange}
    
      /><br></br></div>
      <div className="updateflex2">
      <h3 className="updateflex1">Qulification:</h3>
      <input
      className="inputupdate"
        type="text"
        placeholder="Enter Your qulification"
         value={form.Qualification}
         name="Qualification"
         onChange={handlechange}
      /><br></br></div>
      </div>

     <div className="update-div">
      <div className="updateflex">
      <h3 className="updateflex1">Phone Number</h3>
      <input
      className="inputupdate"
        type="number"
        placeholder="Enter Your number"
        value={form.phonenumber}
        name="phonenumber"
        onChange={handlechange}
      /><br></br></div>
      <div className="updateflex2">
      <h3 className="updateflex1">Address:</h3>
      <textarea
      className="inputupdate"
        placeholder="Address.."
         value={form.Adreass}
         name="Adreass"
         onChange={handlechange}
      ></textarea><br></br></div>
      </div>

      <div className="update-div">
        <div className="updateflex">
      <h3 className="updateflex1">Experience:</h3>
      <input
      className="inputupdate"
      placeholder="Enter Your Experience"
        type="text" value={form.experiance}
        name="experiance"
        onChange={handlechange}
      
      /><br></br></div>
      <div className="updateflex2">

      <h3 className="updateflex1">class:</h3>
      <input
      className="inputupdate"
        type="text"
        placeholder="Enter Your class"
           value={form.class}
           name="class"
           onChange={handlechange}
      /><br></br></div>
      </div>

      <div className="updateflex">
        <button className="submitbtns" onClick={submit} >Submit</button>
      </div>


    </div>

  </div>
  </div>
  
);
}

export default Updateteacher;
