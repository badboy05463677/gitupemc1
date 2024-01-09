import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


import School from "./components/schoolproject/school";
import Admin from "./components/projectheader/adminlogin/admin";
import Adminvalidation from "./components/projectheader/adminlogin/adminvalidation/admivalidation";
import Teacheradd from "./components/projectheader/teacherlist/teacherlist";
import STUDENT from "./components/projectheader/addstudent/student";
import Updateteacher from "./components/projectheader/teacherlist/updateteacher";
import Teacherlogin from "./components/projectheader/teacherlogin/teacherlogin";
import Teachervalidation from "./components/projectheader/teacherlogin/teachervalidation";
 import Leaverequest from "./components/projectheader/teacherleave";

import StudentLogin from "./components/projectheader/studentlogin/studentlogin";
import Studentvalidation from "./components/projectheader/studentlogin/studentvalidation";
import Atanance from "./components/projectheader/teacherlogin/atanance";


function App() {
 
  
 
  return <div>
   <BrowserRouter>
   <Link to="/Admin/Adminvalidation/:name"></Link>
   <Link to="/STUDENT/:name"></Link>
   <link to="/Updateteacher/:id"></link>
   <link to="/Leaverequest"></link>
   <Routes>
    <Route path="/" element={<School/>}></Route>
    <Route path="/Admin" element={<Admin/>}></Route>
    <Route path="/Admin/Adminvalidation/:name" element={<Adminvalidation />} />
    <Route path="/Teacheradd/:adminname" element={<Teacheradd></Teacheradd>}></Route>
    <Route path="/Adminvalidation" element={<Adminvalidation></Adminvalidation>}></Route>
    <Route path="/STUDENT/:name" element={<STUDENT/> }></Route>
    <Route path="/Updateteacher/:_id" element={<Updateteacher/> }></Route>
    <Route path="/Teacherlogin" element={<Teacherlogin/>}></Route>
    <Route path="Teacherlogin/Teachervalidation/:_id" element={<Teachervalidation></Teachervalidation>}></Route>
    <Route path="Atanance/:name/:std" element={<Atanance></Atanance>}></Route>
     <Route path="/Leaverequest/:name" element={<Leaverequest></Leaverequest>}></Route>
    
     <Route path="/StudentLogin" element={<StudentLogin></StudentLogin>}></Route>
     <Route path="/Studentvalidation/:_id" element={<Studentvalidation></Studentvalidation>}></Route>
   </Routes>
   </BrowserRouter>

  </div>
}

export default App;
