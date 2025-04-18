import { cilChevronLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Box, Button, FormLabel, Radio } from "@mui/material";
// import Radio from '@mui/joy/Radio';
import { Divider } from "antd";
import {
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import View from "./index.js";
import { styled } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { CheckAnswer, writeAnswer } from "src/utility/apiService.js";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
// import { turn } from "core-js/core/array";
// import FormLabel from "@mui/material/FormLabel";

//******************************** */
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function questionAttend({ data, id }) {
  //  console.log(id?.assignment?._id);
  const [open, setOpen] = useState(false);
  //   const [answer, setAnswer] = useState([]);
  const [answerData, setAnswerData] = useState([]);
  const [post, setPost] = useState({
    answer: [],
  });

  const handel = async () => {
    let res = await CheckAnswer(id?.assignment?._id);
    setAnswerData(res?.data?.data);
  };

  useEffect(() => {
    // setQuestion(id?.assignment?.question);
    handel();
  }, []);
  console.log(answerData,"fffff");

 

  return (
    <>
      {open ? (
        <View />
      ) : (
        <>
          <CIcon
            icon={cilChevronLeft}
            size="xl"
            style={{
              marginTop: "1rem",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
            onClick={() => setOpen(true)}
          />
          <h1 style={{ marginLeft: "3rem", marginTop: "-3rem" }}>
            Check Answer
          </h1>
          <Divider style={{ backgroundColor: "black" }} />
          {answerData?.assignment?.question.map((i, index) =>
            i ? (
              <MDBContainer
                key={index}
                className="shadow-inner"
                style={{backgroundColor: '#9da5b1', height: "420px", marginTop:'30px' }}
              >
                <MDBRow style={{ height: "55px" }}>
                  <div style={{ margin: "1%", marginTop: "25px", fontSize: "31px" }}>
                    {index + 1})
                  </div>
                  <MDBCol size="12" style={{ margin: "4%" ,width:'90%', marginTop: "-50px"}}>
                    <MDBInput
                      placeholder="Question No"
                      id="form1"
                      type="text"
                      disabled
                      value={i?.question}
                      // style={{ width: "95%", marginTop: "-75px" }}
                    />
                  </MDBCol>
                </MDBRow>
                <FormControl style={{ margin: "5%" }}>
                  <RadioGroup
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                    defaultValue={answerData.answers[index].answer}
                    // defaultValue={i?.options[0]?.optionAns}
                // style={{color:`${answerData.answers[index].answer===i?.options[index]?.optionAns?"red":"green"}`}}
                    >
                  <FormControlLabel
                      value={i?.options[0]?.optionAns}
                      control={<BpRadio />}
                      // disabled
                      disabled={i?.options[0]?.optionAns!==answerData.answers[index].answer}
                      label={i?.options[0]?.optionAns.trim()===i.answer.trim() ? (<Fragment>{i?.options[0]?.optionAns}<CheckCircleSharpIcon color="success"/></Fragment>):(<Fragment>{i?.options[0]?.optionAns}<HighlightOffSharpIcon color="secondary"/></Fragment>)} 
                    
                    />
                    <FormControlLabel
                      value={i?.options[1]?.optionAns}
                      control={<BpRadio />}
                       disabled={i?.options[1]?.optionAns!==answerData.answers[index].answer}
                       label={i?.options[1]?.optionAns.trim()===i?.answer.trim() ? (<Fragment>{i?.options[1]?.optionAns}<CheckCircleSharpIcon color="success"/></Fragment>):(<Fragment>{i?.options[1]?.optionAns}<HighlightOffSharpIcon color="secondary"/></Fragment>)} 
                      />
                    <FormControlLabel
                      value={i?.options[2]?.optionAns}
                      control={<BpRadio />}
                      disabled={i?.options[2]?.optionAns!==answerData.answers[index].answer}
                      label={i?.options[2]?.optionAns.trim()===i?.answer.trim() ? (<Fragment>{i?.options[2]?.optionAns}<CheckCircleSharpIcon color="success"/></Fragment>):(<Fragment>{i?.options[2]?.optionAns}<HighlightOffSharpIcon color="secondary"/></Fragment>)} 
                    />
                    <FormControlLabel
                      value={i?.options[3]?.optionAns}
                      control={<BpRadio />}
                      disabled={i?.options[3]?.optionAns!==answerData.answers[index].answer}
                      label={i?.options[3]?.optionAns.trim()===i?.answer.trim() ? (<Fragment>{i?.options[3]?.optionAns}<CheckCircleSharpIcon color="success"/></Fragment>):(<Fragment>{i?.options[3]?.optionAns}<HighlightOffSharpIcon color="secondary"/></Fragment>)} 
                    />

                  </RadioGroup>
                  <br/>
                  <FormLabel id="demo-radio-buttons-group-label">
                   Correct Answer:
                  <MDBInput
                      id="form1"
                      type="text"
                      disabled
                      value={i?.answer}
                    />
                  </FormLabel>
                </FormControl>
              </MDBContainer>
            ) : null
          )}
          {/* <FormLabel id="demo-radio-buttons-group-label">
              TotalMarks:
                  <MDBInput
                      id="form1"
                      type="text"
                      disabled
                      value={i?.scored}
                    />
                  </FormLabel> */}
        </>
      )}
    </>
  );
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Radio from '@mui/material/Radio';

// export default function CustomizedRadios() {
//   return (

//   );
// }
