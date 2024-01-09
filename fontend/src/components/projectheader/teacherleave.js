import axios from 'axios';
import './teacherleave.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Leaverequest() {
  const { name } = useParams();
  const [form, setForm] = useState({
    Date: new Date().toLocaleDateString(),
    tachername: name,
    subject: '',
    approve: false,
  });

 

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendbtn = () => {
    console.log(form)
    axios
      .post('http://localhost:3001/applyleave', form, {
        headers: { Authorization: 'Basic YWRtaW46MTIz' },
      })
      .then(() => {
        console.log('success update');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="leavebody">
      <div className="play8">
        <div className="play4">
          <h1 className="headleave">Leave Request</h1>
          <div className="play3">
            <h3 className="headname">Name:</h3>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="play7"
              name="tachername"
              value={name}
             
            />

            <h3 className="headname">Leave Reason:</h3>
            <textarea
              placeholder="Enter Your Reason"
              id="textareainput"
              name="subject"
              onChange={handleChange}
            ></textarea>
            <br></br>
            <button className="play6" onClick={sendbtn}>
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaverequest;
