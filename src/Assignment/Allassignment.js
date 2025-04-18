import React, { useEffect } from "react";
import { Divider } from "antd";
import { cilChevronLeft } from "@coreui/icons";
import { cilChevronRight } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Craeteque from "./createque.js";


export default function Assignment() {
  const [title, setTitel] = useState("");
  const [subject, setSubject] = useState("AP001");
  const [cls, setCls] = useState(1);
  const [total, setTotalmark] = useState(0);
  const [no, setNo] = useState(0);
  const [show, setShow] = useState(false);

  let navigate = useNavigate();
  const hadele = () => {
    if(title==="") return alert("please fill all the field title")
    if(subject==="") return alert("please fill all the field subject")
    if(cls===0) return alert("please fill all the field class")
    if(total===0) return alert("please fill all the field TotalMark")
    if(no===0) return alert("please fill all the field no of question")
    setShow(true);
  };
  const back = () => navigate("/Assignment");
  const data = {assignmentTitle:title,subject,class:cls,totalMarks:total,totalQuestion:no,question:[]}
  return (
    <>
      {show ? <Craeteque datas={data} /> :
      <>
        <CIcon
          icon={cilChevronLeft}
          size="xl"
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
          onClick={back}
        />
        <h1 style={{ marginLeft: "3rem", marginTop: "-3rem" }}>
          Create Question papar
        </h1>
        <Divider style={{ backgroundColor: "black", height:'2px' }} />
        <div style={{backgroundColor:'#d8dbe0' ,height:'324px',width:'85%' ,marginLeft:'50px' }}>
        <MDBContainer >
          <MDBRow >
            <MDBCol size="6" style={{marginTop:'35px'}} >
              <MDBInput
                placeholder="Title"
                id="form1"
                type="text"
                onChange={(e) => setTitel(e.target.value)}
              />
            </MDBCol>
            <MDBCol size="6" style={{marginTop:'35px'}}>
              <MDBInput
              style={{background:"#ebedefcf"}}
                placeholder="Subject code"
                id="form1"
                type="text"
                disabled
                value={subject}
              />
            </MDBCol>
          </MDBRow>
          <br />
          <MDBRow>
            <MDBCol size="6">
              <MDBInput
              style={{background:"#ebedefcf"}}
                placeholder="All student"
                id="form"
                type="text"
                disabled
               value={"All"}
              />
            </MDBCol>
            <MDBCol size="6">
              <MDBInput
                placeholder="Total Mark"
                id="form1"
                type="Number"
                onChange={(e) => setTotalmark(e.target.value)}
              />
            </MDBCol>
            <MDBCol size="6" style={{ marginTop: "20px" }}>
              <MDBInput placeholder="No of Question" id="form1" type="number"
               onChange={(e) => setNo(e.target.value)} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBIcon fas icon="angle-right" />
        <Button
          variant="contained"
          style={{ marginTop: "5%", marginLeft: "85%" }}
          onClick={hadele}
        >
          Next{" "}
          <CIcon
            icon={cilChevronRight}
            size="xl"
            style={{
              marginTop: "0rem",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
          />
        </Button>
        </div>
      </>
      }
    </>
    // margin-top: 40%;
    // margin-left: 90%;
  );
}

// import React from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

// export default function App() {
//   return (

//   );
// }
