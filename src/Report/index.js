import React, { useEffect, useState } from "react";
// import { Document, Page } from "react-pdf";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import {
  Pdf,
  get,
  getAllassigment,
  getAlluser,
  getTicketsPdf,
  getviewPdf,
} from "src/utility/apiService";
import saveAs from "file-saver";
import CustomTable from "../custom/Table/index";
import { Button, selectClasses } from "@mui/material";
import CustomSelect from "src/components/CustomSelect";
import _ from "lodash";

export default function App() {
  const [basicModal, setBasicModal] = useState(false);
  // const [modal, setModal] = useState(null);

  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
  const [classType, setClassType] = useState([]);
  const [subject, setSubject] = useState([]);
  const [stdIdData, setStdIdData] = useState([]);
  const [assData, setAssData] = useState([]);
  const [filter, setFilter] = useState([]);

  const [selectedStdAssId, setSelectedStdAssId] = useState("");
  const [selectedStdId, setSelectedStdId] = useState("");
  const [selectedClassType, setSelectedClassType] = useState("");
  const [selectSubject, setSelectSubject] = useState("");
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

  const api = async () => {
    let unqArr = [];
    let unqbysub = [];
    let sleClass = [];
    let sleStdId = [];
    let sub = [];
    let ass = [];
    let All = await getAllassigment();
    // console.log(All);
    setAssData(All.data.data);
    All?.data?.data?.map((i) => {
      sub.push({ value: i.subject, label: i.subject });
      // console.log(i);
      ass.push({
        value: i.assignmentTitle,
        label: i.assignmentTitle,
        id: i._id,
      });
    });
    sub.map((item) => {
      let found = false;
      unqbysub.map((data) => {
        if (item.value == data.value) {
          found = true;
        }
      });
      if (!found) {
        unqbysub.push(item);
      }
      // console.log(unqbysub);
    });

    let res = await getAlluser();
    res?.data?.data?.map((i) => {
      if (!i.isFaculty) {
        sleClass.push({ value: i.class, label: i.class });
        sleStdId.push({
          value: `${i.name}(${i.email})`,
          label: `${i.name}(${i.email})`,
          id: i._id,
        });
      }
    });
    // console.log(sleClass);
    sleClass.map((item) => {
      let found = false;
      unqArr.map((data) => {
        if (item.value == data.value) {
          found = true;
        }
      });
      if (!found) {
        unqArr.push(item);
      }
    });
    setStdIdData(sleStdId);
    setClassType(unqArr);
    setSubject(unqbysub);
    // ass.map((i)=>{
    //   if(selectSubject.value==i.subject){
    //     console.log(i);
    //   }
    // })
    // console.log(sleStdId);
  };
  const toggleShow = async () => {
    setBasicModal(!basicModal);
    const data = await getviewPdf(
      selectedClassType?.value,
      selectSubject?.value,
      selectedStdId.id,
      selectedStdAssId.id
    );
    // console.log(data?.data?.data?.tableData);
    setData(data?.data?.data?.tableData);
    setImage(data?.data?.data?.chartImg);
  };
  const hadele = async () => {
    // console.log(selectSubject?.value);
    const { data } = await getTicketsPdf(
      selectedClassType?.value,
      selectSubject?.value,
      selectedStdId?.id,
      selectedStdAssId?.id
    );
    // console.log(data);
    const blob = new Blob([data], { type: "application/pdf" });
    saveAs(blob, "Report.pdf");
  }; 
  useEffect(()=>{
    console.log(assData);
    if(selectSubject==""){
      setFilter(assData)
    };  
  },[assData])
  useEffect(() => {
    let arr = [];
    let ano=[]
    if(selectSubject==""){
      assData?.map((item)=>{
        ano.push({
          value: item.assignmentTitle,
          label: item.assignmentTitle,
          id: item._id,
        });
      })
      return setFilter(ano)
    };   
    assData.map((i) => { 
   if(selectedClassType==''){
      if (selectSubject.value == i.subject) {
        arr.push({
          value: i.assignmentTitle,
          label: i.assignmentTitle,
          id: i._id,
        });
      }  
    }else{  
      if(selectSubject.value === i.subject && selectedClassType.value===i.class){
        console.log(i);
        arr.push({
          value: i.assignmentTitle,
          label: i.assignmentTitle,
          id: i._id,
        });
      }
    }
    });
    setFilter(arr);
  }, [selectSubject,assData,selectedClassType]);
  useEffect(() => {
    api();
    // console.log(arr);
  }, []);

  //  console.log(selectSubject.value);
  return (
    <>
      <MDBCard style={{ borderRadius: '15px', backgroundColor: '#d8dbe0' }}>
        <MDBCardBody>
          <center>
           <h1 style={{color:'#6c757d'}}>REPORT</h1>
          </center>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="md">
                <CustomSelect
                  option={classType}
                  isSearchable={true}
                  isMulti={false}
                  disabled={selectedStdId.value}
                  selectedOptions={selectedClassType}
                  setSelectedOptions={setSelectedClassType}
                  placeholder={"Select The Class"}
                  style={{ marginButtom: "0.5rem" }}
                />
              </MDBCol>
              <MDBCol size="md">
                <CustomSelect
                  option={stdIdData}
                  isSearchable={true}
                  isMulti={false}
                  disabled={
                    selectSubject.value ||
                    selectedClassType.value ||
                    selectedStdAssId.value
                  }
                  selectedOptions={selectedStdId}
                  setSelectedOptions={setSelectedStdId}
                  placeholder={"Select The Student"}
                  style={{ marginButtom: "0.5rem" }}
                />
              </MDBCol>

              <MDBCol size="md">
                <CustomSelect
                  option={subject}
                  isSearchable={true}
                  isMulti={false}
                  disabled={selectedStdId.value}
                  selectedOptions={selectSubject}
                  setSelectedOptions={setSelectSubject}
                  placeholder={"Select The subject"}
                  style={{ marginButtom: "0.5rem" }}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="md" style={{ maxWidth: "417px" }}>
                <CustomSelect
                  option={filter}
                  isSearchable={true}
                  isMulti={false}
                  selectedOptions={selectedStdAssId}
                  disabled={selectedStdId.value}
                  setSelectedOptions={setSelectedStdAssId}
                  placeholder={"Select The Assignment"}
                  style={{ marginButtom: "0.5rem" }}
                />
              </MDBCol>
              <MDBCol
                size="md"
                style={{ marginTop: "12px", marginLeft: "10px" }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    setSelectedStdId("");
                    setSelectSubject("");
                    setSelectedClassType("");
                    setSelectedStdAssId("");
                  }}
                >
                  clear
                </Button>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <center style={{ marginTop: "35px" }}>
              <Button variant="contained" onClick={toggleShow}>
                Generate Report
              </Button>
            </center>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
      <MDBModal show={basicModal} setShow={setBasicModal}>
        <MDBModalDialog>
          <MDBModalContent style={{ width: "189%", marginLeft: "-136px" }}>
            <MDBModalHeader>
              <center>
              <MDBModalTitle>REPORTS</MDBModalTitle>
              </center>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <img
                src={image}
                className="img-fluid shadow-4"
                alt="..."
                width={"90%"}
                height={"10px"}
              />
              <CustomTable columns={columnsArr} data={data} />
            </MDBModalBody>
            <MDBModalFooter>
              <center style={{ marginRight: "407px" }}>
                <Button variant="contained" onClick={hadele}>
                  download
                </Button>
              </center>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
