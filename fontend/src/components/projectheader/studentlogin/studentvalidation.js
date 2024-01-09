import { useEffect, useState } from "react";
import Stdimgs1 from "../../images/pexels-photo-5212345.jpeg";
import './studentvalidation.css'
import axios from "axios";
import { useParams } from "react-router-dom";
function Studentvalidation() {
  let {_id}=useParams()
  const [edit,setedit]=useState(false)
  const [border,setBorder]=useState(false)
  const [data,setdata]=useState({
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
  })
 
  useEffect(()=>{
    axios.get('http://localhost:3001/student',{
      headers: { Authorization: "Basic YWRtaW46MTIz" },
    })
    .then((res)=>{
      let student=res.data.find((ele)=>ele._id===_id)
      setdata(student)

    })
    .catch((err)=>{
      console.log(err);
    })
  },[_id])
  const editbtn=()=>{
    setBorder(true)
    setedit(true)

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const savesbtn=()=>{
    axios
    .put(`http://localhost:3001/student/update/${data._id}`, data, {
      headers: { Authorization: "Basic YWRtaW46MTIz" },
    })
    .then(() => {
      console.log("success update");
    })
    .catch((error) => {
      console.error("Error updating:", error);
    });
    setBorder(false)
    setedit(false)
  }
  return (
    <div id="studentbody">
        <h1 >HI STUDENT {data.name}</h1>
        <div >
      
      <div id="studentvalidationdiv">
        <div>
            <img  src={Stdimgs1}></img>
          <div className="flexstudent">
            <h3>  NAME: <label>{data.name}</label></h3>
            <h3>  Age:<label>{data.age}</label></h3>
          </div>
          <div className="flexstudent">
            <h3>  Gender:<label>{data.Gender}</label> </h3>
            <h3>  Blood group :<label>{data.bloodgroup}</label> </h3>
          </div>
          <div className="flexstudent">
            <h3>  class:<label>{data.class}</label> </h3>
            <h3>  dob :<label>{data.dob}</label> </h3>
          </div>
          <div className="flexstudent">
            <h3>  fathername:<input value={data.fathername} className={border ? "adressedit" :"adressedit1"} name="mothername"></input> </h3>
            <h3>   mothername:<label>{data.mothername}</label> </h3>
          </div>
          <div className="flexstudent1">
            <h3>  Adreass:<input className={border ?" adressedites" :"adressedites1"} value={data.Adreass}  onChange={edit ? handleChange : null} name="Adreass"></input> </h3>
            <h3>Occupation:<input className={border ? "adressedit" :"adressedit1"} value={data.Occupation} name="Occupation"  onChange={edit ? handleChange : null}></input> </h3>
          </div>
          <div className="studbtn">
            <button className="editesbtn" onClick={editbtn}  >Edit</button>
            <button className="studntesbtn" onClick={savesbtn}>Save</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
export default Studentvalidation;
