import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { getAllassigment } from "src/utility/apiService";
import moment from "moment";
import _ from "lodash";
// import faker from "faker";

export default function App() {
  const [people, setPeople] = React.useState([]);
//   const [time, setTime] = React.useState(new Date());
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

const getAll = async () => {
    let res = await getAllassigment();
    console.log(res?.data?.data);
    let sorted=_.sortBy(res.data.data, (obj) => {
      return new Date(obj?.createdAt)
      }).reverse()
      // console.log(sorted);
    setPeople(sorted);
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      <div style={{ width: "100%", height: "80vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={750}
              rowHeight={200}
              rowRenderer={({ key, index, style, parent }) => {
                const person = people[index];
              //  {console.log(person);}
                return (
                  <div key={key} style={style}>
      
                  <Box sx={{ width: "100%"}}>
                    <Stack spacing={1} >
                        <Item  style={{backgroundColor: "#d8dbe0"}}>
                     <MDBContainer> 
                    <MDBRow>
                        <MDBCol size="6">
                          <br/>
                        <div style={{fontSize:"17px"}}><b>Test :{person.assignmentTitle} </b></div>
                        <br/>
                        <div style={{fontSize:"17px"}} ><b>Subject Code :{person.subject} </b></div>
                        <br/>
                        <div style={{fontSize:"17px"}}><b>No.of.Question :{person.totalQuestion}</b> </div>
                        <br/>
                        </MDBCol>
                        <MDBCol size="6">
                        <br/>
                        <div style={{fontSize:"17px"}} ><b>Date :{moment(person.createdAt).format("DD-MM-YYYY")}</b> </div>
                        <br/>
                        <div style={{fontSize:"17px"}} ><b>totalMarks:{person.totalMarks}</b> </div>
                        </MDBCol>
                    </MDBRow>
                   </MDBContainer> 
                    </Item>
                     </Stack>
                     </Box>
                     </div>
                );
              }}
              rowCount={people.length}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
