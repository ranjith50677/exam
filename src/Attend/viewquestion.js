import { Box, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { CheckAnswer, studentAss } from "src/utility/apiService";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Button } from "@mui/material";
import Questionatt from "./attendques";
import Answer from "./Viewanswer";
import moment from "moment";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
export default function Attend() {
  const [data, setData] = useState([]);
  const [attendData, setAttendData] = useState([]);
  const [checkData, setCheckData] = useState([]);
  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight:190,
    })
  );
  const [open1, setOpen1] = useState(false);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  let arr = [];
  const handelClick =async() => {
    console.log("clicking");
    let ch = !check 
    setCheck(!check)
    console.log(ch);
    if (ch == true) {
      data.map((i) => {
        if (i?.answers.length <= 0) {
          console.log(i);
          arr.push(i);
        }
      });
      setData(arr);
    }else{
      let res = await studentAss();
      let sort=_.sortBy(res.data.data, (obj) => {
        return new Date(obj?.createdAt)
        }).reverse()
      setData(sort);
    }
  };
  console.log(arr);

  const handel = async () => {
    if(checkData.length!==0){
      let res = await CheckAnswer(id?.assignment?._id);
      setAnswerData(res?.data?.data);
    }
    let res = await studentAss();
      let sorted=_.sortBy(res.data.data, (obj) => {
        return new Date(obj?.createdAt)
        }).reverse()
    setData(sorted);
  };
  const Attend = (i) => {
    setAttendData(i);
    setOpen(true);
  };

  useEffect(() => {
    handel();
  }, []);
  console.log(checkData,"sssss");
  return (
    <>
      {open1 ? (
        <Answer id={checkData} />
      ) : (
        <>
          {open ? (
            <Questionatt data={data} id={attendData} />
          ) : (
            <div>
            <div style={{ width: "100%", height: "80vh" }}>
                  <FormControlLabel
                    control={<Checkbox value={check} onClick={handelClick} />}
                    label="Not Attend"
                  />
              <AutoSizer>
                {({ width, height }) => (
                  <List
                    width={width}
                    height={800}
                    rowHeight={180}  
                    rowRenderer={({ key, index, style, parent }) => {
                      const person = data[index];
                    //  {console.log(person);}
                      return (
                        <div key={key} style={style}>

                    <Box sx={{ width: "100%" , backgroundColor: '#d8dbe0' }}>
                      <Stack spacing={2}>
                          <Item key={index}  style={{border:"2px solid"}}>
                            <MDBContainer>
                              <MDBRow>
                                <MDBCol size="6">
                                  <div
                                    style={{ marginTop: "10px", fontSize: "17px" }}
                                  >
                                    <b>
                                      Title :{person.assignment.assignmentTitle}
                                       {/* (
                                      {person.assignment.subject}){" "} */}
                                    </b>
                                  </div>
                                  <div
                                    style={{ marginTop: "10px", fontSize: "17px" }}
                                  >
                                    <b>Subject Code :{person.assignment.subject}</b>
                                  </div>
                                  <div
                                    style={{ marginTop: "10px", fontSize: "17px" }}
                                  >
                                    <b>
                                      No.of.Question :{person.assignment.totalQuestion}
                                    </b>{" "}
                                  </div>
                                </MDBCol>
                                <MDBCol size="6">
                                  <div
                                    style={{ marginTop: "10px", fontSize: "17px" }}
                                  >
                                    <b>Date :{moment(person.updatedAt).format("DD-MM-YYYY")}</b>{" "}
                                  </div>
                                  <div
                                    style={{ marginTop: "10px", fontSize: "17px" }}
                                  >
                                    <b>totalMarks:{person.assignment.totalMarks}</b>{" "}
                                  </div>
                                </MDBCol>
                              </MDBRow>
                              {person?.answers.length <= 0 ? (
                                <Button
                                  variant="contained"
                                  style={{ marginTop: "10px" }}
                                  onClick={() => Attend(person)}
                                >
                                  Attend
                                </Button>
                              ) : (
                                <Button
                                  variant="contained"
                                  style={{ marginTop: "10px" }}
                                  onClick={() => {
                                    setOpen1(true);
                                    setCheckData(person);
                                  }}
                                >
                                  View
                                </Button>
                              )}
                            </MDBContainer>
                          </Item>
                      
                      </Stack>
                    </Box>
                      </div>);
                    }}
                    rowCount={data.length}
                  />
                )}
              </AutoSizer>
            </div>
          </div>
          )}
        </>
      )}
    </>
  );
}
