// Import Link from react-router-dom
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./adminvalidation.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Adminvalidation() {
  const { name } = useParams();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [alowed, setalowed] = useState(false);
  const [getdata, setgetdata] = useState([]);
  const [applyleave, setapplyleave] = useState({
    tachername: "",
    subject: "",
    approve: true,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin", {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then((res) => {
        setgetdata(res.data);
      })
      .catch((error) => {
        console.error("Error fetching admin data:", error);
      });

    axios
      .get("http://localhost:3001/teacher", {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
      });

    axios
      .get("http://localhost:3001/applyleave", {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then((res) => {
        setapplyleave(res.data);
      })
      .catch((error) => {
        console.error("Error fetching leave request data:", error);
      });
  }, []);

  const handleCheckInOut = () => {
    setIsCheckedIn((prev) => !prev);
    setalowed((prev) => !prev);
    setShow((prev) => !prev);
  };

  const teacherdeletebtn = (_id) => {
    axios
      .delete(`http://localhost:3001/Teacher/delete/${_id}`, {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then(() => {
        setData((prevData) => prevData.filter((ele) => ele._id !== _id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleapplychange = (e) => {
  //   const { name, value } = e.target;
  //   setapplyleave((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const applybtn = () => {
    axios
      .post("http://localhost:3001/applyleave", applyleave, {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then((res) => {
        console.log("update success", applyleave);
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
      });
  };

  return (
    <div id="flexadmin">
      <div id="adminflex">
        <div>
          <h1>hi {name} admin user!</h1>
        </div>
        <Button
          id="checkin"
          onClick={handleCheckInOut}
          className={isCheckedIn ? "bg-danger " : ""}
        >
          {isCheckedIn ? "CHECK OUT " : "CHECK IN"}
        </Button>
        <Link
          className={alowed ? "no-cursor1" : "no-cursor"}
          to={`/Teacheradd/${name}`}
        >
          ADD TEACHER
        </Link>
        <Link id={alowed ? "addstudnt1" : "addstudnt"} to={`/STUDENT/${name}`}>
          ADD STUDENT
        </Link>
      </div>
      {show && (
        <div>
          <div id="admintabel">
            {getdata
              .filter((e) => e.name === name)
              .map((admin) => (
                <div key={admin._id}>
                  <h4 className="admindata">
                    NAME: <label className="admindata1">{admin.name}</label>{" "}
                  </h4>
                  <h4 className="admindata">
                    D.O.B:<label className="admindata1">{admin.dob}</label>{" "}
                  </h4>
                  <h4 className="admindata">
                    Qualification:
                    <label className="admindata1">
                      {admin.Qualification}
                    </label>
                  </h4>
                  <h4 className="admindata">
                    AGE:<label className="admindata1">{admin.age}</label>{" "}
                  </h4>
                  <h4 className="admindata">
                    Address:{" "}
                    <label className="admindata1">{admin.Adreass}</label>{" "}
                  </h4>
                </div>
              ))}
            <div>
              <h1 className="text">Leave request</h1>
              <div>
                <div id="applyflex">
                  <h3 name="tachername">{applyleave.tachername}</h3>
                  <h3 name="subject">{applyleave.subject}</h3>
                  <button name="approve" onClick={applybtn}>
                    approve
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center">Teacher List</h1>
          </div>
          <div>
            <table className="my-table">
              <thead>
                <tr>
                  <th>class:</th>
                  <th>name</th>
                  <th>age</th>
                  <th>date of birth</th>
                  <th>Gender</th>
                  <th>Qualification</th>
                  <th>experiance</th>
                  <th>phonenumber</th>
                  <th>Email</th>
                  <th>Adreass</th>
                  <th>d/u</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ele) => (
                  <tr key={ele._id}>
                    <td>{ele.class}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.dob}</td>
                    <td>{ele.Gender}</td>
                    <td>{ele.Qualification}</td>
                    <td>{ele.experiance}</td>
                    <td>{ele.phonenumber}</td>
                    <td>{ele.Email}</td>
                    <td>{ele.Adreass}</td>
                    <td>
                      <button
                        id="delbtn"
                        onClick={() => teacherdeletebtn(ele._id)}
                      >
                        delete
                      </button>
                      <Link
                        className="updatebtn"
                        to={`/Updateteacher/${ele._id}`}
                      >
                        update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Adminvalidation;
