
  import React, { useContext, useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";

//   import image from "../../../assets/images/thumb-bg.png";
  import { getUser, studentcreate, userLogin } from "src/utility/apiService";
  import fatculty from "../../../context/fatculty";
  // import { Button, selectClasses } from "@mui/material";
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { Button } from "@mui/material";
  function Login() {
    let navigate = useNavigate();
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cls, setCls] = useState("");
    
    const [show, setShow] = useState(false);
    
    const Access=useContext(fatculty)
    // console.log(password);
    const handleSubmit = async(e) => {
      e.preventDefault();
      let res = await studentcreate({name,email,password,class:cls})
      if(!res.ok) {
        return alert(res.data.message) 
      }else{
         alert(res.data.message) 
         setShow(true)
      }
    }
    // console.log(show);
    return (
        <>
         {show ?
          <Button variant="contained" onClick={()=>setShow(!show)}>
          Create Another Student
        </Button>:
         <MDBCard style={{ borderRadius: '15px', backgroundColor: '#d8dbe0' ,width:'90%', marginTop:'20px', marginLeft:'40px' }}>
        <MDBCardBody>
          <center>
           <h1 style={{color:'#4e565d'}}>Student Create</h1>
          </center>
          <MDBContainer style={{marginTop:'40px'}}>
            <MDBRow>
              <MDBCol size="md">
              <MDBInput
                placeholder="Name"
                id="form1"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              </MDBCol>
              <MDBCol size="md">
              <MDBInput
                placeholder="Email"
                id="form1"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              </MDBCol>
              </MDBRow>
              <MDBRow style={{marginTop:'40px'}}>
             < MDBCol>
              <MDBInput
                placeholder="password"
                id="form1"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
             </MDBCol>
              <MDBCol size="md">
              <MDBInput
                placeholder="class"
                id="form1"
                type="text"
                onChange={(e) => setCls(e.target.value)}
              />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <center>
           <Button variant="contained" style={{marginTop:'40px'}} onClick={handleSubmit}>sumbit</Button>
          </center>
        </MDBCardBody>
      </MDBCard> 
     }
        </>
    );
}

export default Login;
