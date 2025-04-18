import { Button } from "@mui/material";
import { MDBCard } from "mdb-react-ui-kit";
import React,{useEffect, useState} from "react";
import CustomTable from "src/custom/Table";
import { getUser, studentviewdata } from "src/utility/apiService";
// import View from './viewquestion'


export default function StuView(){
    const [data,setData]=useState([])
    const [open,setOpen]=useState(false)
    const [columnsArr, setColumnsArr] = useState([
        {
          Header: "SI No",
          id: "index",
          accessor: (row, index) => (
            <div style={{ textAlign: "center" }}>{index + 1}</div>
            ),
           },
       {
         Header: "name",
         accessor: "name",
       },
       {
         Header: "class",
         accessor: "class",
       },
       {
         Header: "subject",
         accessor: "subject",
       },
       {
         Header: "assignmentName",
         accessor: "assignmentName",
       },
       {
         Header: "scoredMarks",
         accessor: "scoredMarks",
       },
     ]); 

 const handel=async()=>{
    let profile=await getUser()
    // setId(profile?.data?.data._id)
    console.log(profile?.data?.data._id)
    let res= await studentviewdata(profile?.data?.data?._id)
    setData(res?.data?.data?.tableData)
    }
   const view=async()=>{
    setOpen(true)
    }
 useEffect(()=>{
    handel()
 },[])
return(
    <>
    <Button variant="contained" onClick={view}  >
        view report
    </Button>
{open ? 
<MDBCard style={{marginTop:'20px',width:'90%',marginLeft:'50px'}}>
<CustomTable 
  columns={columnsArr}
  data={data}
  />
  </MDBCard>
  :null}
  </>
    
)

} 