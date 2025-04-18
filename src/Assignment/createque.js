import React,{useEffect} from "react";
import { Divider } from "antd";
import { cilChevronLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Allassigment from './Allassignment.js';
import { CreateAssignment } from "src/utility/apiService.js";

const Craeteque = ({datas}) => {
const[open,setOpen]=useState(false);
  const [question, setQuestion] = useState([]);
  var B = datas.totalQuestion;
  let navigate = useNavigate();
  const back = () => setOpen(true);
  let [arr,setArr]=useState([]);
  let [data,setData]=useState([])
  for(let i=0;i<=B;i++){
    let si=i+1
    if(arr?.length < B){
      arr.push(i)
      data.push({questionNo:si,question:"",options:[],option1:"",option2:"",option3:"",option4:"",answer:"",markForThisQuestion:1})
    }
  }
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    let list = [...data] ;
    list[index][name] = value;
    setData(list);
  };

  const handleSubmit = async() => {
    let options=[]
    data.map((item)=>{
      if(item.option1){
        options.push({optionNo:1 , optionAns : item.option1})
      }
      if(item.option2){
        options.push({optionNo:2 , optionAns : item.option2})
      }
      if(item.option3){
        options.push({optionNo:3 , optionAns : item.option3})
      }
      if(item.option4){
        options.push({optionNo:4 , optionAns : item.option4})
      }
      item.options=options
      options=[]
    })
    datas.question=data
    // console.log(datas);
    try {
      let res=await CreateAssignment(datas)
      if(!res.ok){
        alert(res.data.message)
      }

      alert(res.data.message)
      navigate('/Assignment')
    } catch (error) {
      l
    }
  }
  
  return (
    <div>
 {open ? <Allassigment/>
   :<>
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
        Create Question
      </h1>
      <Divider style={{ backgroundColor: "black" }} />
        { arr?.map((item,index)=>{
          let si= index + 1
          return(
          <MDBContainer
          key={index}
            className="shadow-inner"
            style={{ height: "370px",backgroundColor:'#d8dbe0', marginTop:'30px' }}
            // style={{border:"2px solid" ,height:'324px',width:'85%' }}
          >
            <MDBRow>
             <div style={{marginTop:"15px",fontSize:"31px" }}>{si})</div> 
              <MDBCol size="12" style={{ margin:"4%",width:'95%', marginTop:"-40px" }}>
                <MDBInput
                  placeholder="Question"
                  id="form1"
                  type="text"
                  name="question"
                  onChange={(e) => handleChange({
                    target: {
                      name: "question",
                      value: e.target.value,
                    },
                  },
                  index)}
                  // style={{width:"95%",marginTop: "-55px",}}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="5" style={{ margin:"4%" ,marginTop: "0px" ,maxWidth:"100%" }}>
                <MDBInput placeholder="Option A" id="form1" name="option1"  type="text" style={{ width: "110%"}} onChange={(e) => handleChange({
                    target: {
                      name: "option1",
                      value: e.target.value,
                    },
                  },
                  index)} />
              </MDBCol>
              <MDBCol size="5" style={{ marginLeft: "0%"  }}>
                <MDBInput placeholder="Option B" id="form1" name="option2" type="text"  style={{marginTop: "1px", width: "119%"}} onChange={(e) => handleChange({
                    target: {
                      name: "option2",
                      value: e.target.value,
                    },
                  },
                  index)} />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="5" style={{ margin:"4%" ,marginTop: "1px" }}>
                <MDBInput placeholder="Option C" id="form1" name="option3" type="text" style={{ width: "110%"}} onChange={(e) => handleChange({
                    target: {
                      name: "option3",
                      value: e.target.value,
                    },
                  },
                  index)} />
              </MDBCol>
              <MDBCol size="5" style={{ marginLeft: "0%" }}>
                <MDBInput placeholder="Option D" id="form1" name="option4" type="text"  style={{marginTop: "1px", width: "119%"}} onChange={(e) => handleChange({
                    target: {
                      name: "option4",
                      value: e.target.value,
                    },
                  },
                  index)} />
              </MDBCol>
              <MDBCol size="5" style={{ margin:"4%",marginTop: "0px"  }}>
                <MDBInput placeholder="Answer" id="form1" name="answer" type="text" style={{width: "110%"}} onChange={(e) => handleChange({
                    target: {
                      name: "answer",
                      value: e.target.value,
                    },
                  },
                  index)} />
              </MDBCol>
              <MDBCol size="5" style={{ marginLeft: "0%" }}>
                <MDBInput placeholder="Mark For This Question" id="form1" name="markForThisQuestion" style={{marginTop: "1px", width: "119%"}}    type="number" onChange={(e) => handleChange({
                    target: {
                      name: "markForThisQuestion",
                      value: e.target.value,
                    },
                  },
                  index)}                 />
              </MDBCol>
            </MDBRow>
          </MDBContainer>)})}
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ marginTop: "10%", marginLeft: "90%",marginBottom:'70px' }} 
      >
        Submit
      </Button>
      </>
      }
    </div>
  );
};

export default Craeteque;
