// import { Diversity1 } from '@mui/icons-material';
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Divider } from "antd";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllassigment } from "src/utility/apiService.js";
import { useState } from "react";
// import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import fatculty from "src/context/fatculty";
import { useContext } from "react";
import VirtualList from './list.js';
const Assignment = () => {
  let navigate = useNavigate();
  const [data,setData] = useState([]);
  const Access=useContext(fatculty)
  const move = () => navigate("/dashboard");
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
console.log(Access);
  const getAll = async () => {
    let res = await getAllassigment();
    console.log(res?.data?.data);
    setData(res?.data?.data);
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div >
      <h1>Test </h1>
     {Access.isfaculty ? <Button
        variant="contained"
        style={{ marginLeft: "90%", marginTop: "-100px"  }}
        onClick={move}
        >
        create
      </Button>:null}
      <Divider style={{ backgroundColor: "black", marginTop: "-16px" }} />  
      <VirtualList/>
 </div>
  );
};
export default Assignment;

// margin-left: 85%;
//     margin-top: -24px;