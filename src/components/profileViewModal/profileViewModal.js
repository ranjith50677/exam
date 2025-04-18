import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { Grid, Icon } from "@mui/material";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Box } from "@mui/material";
import { Divider } from "antd";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Education from "./details/Education";
import PersonView from "./details/PersonView";
import Experience from "./details/Experience";
import KYC from "./details/KYC";
import Address from "./details/Address";
import Family from "./details/Family";
import { getAddressById, getDocumentById, getEducationById, getExperienceById, getFamily, getFamilyById, getWorkByid } from "src/utility/apiService"; 
import Work from "./details/Work";

export default function UserProfile({ user,setUserProfileModal,userProfileModal,menuId}) {
  const toggleShow = () => setUserProfileModal(!userProfileModal);
  let textColor = "inherit";

  const [company, setCompany] = useState();
  const [address, setAddress] = useState();
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState([]);
  const [document, setDocument] = useState();
  const [family, setFamily] = useState();
  const [rolename, setRolename] = useState("");
  const [des, setDes] = useState("");
  const [work, setWork] = useState();


let token = localStorage.getItem("hrmsv2-token");
if (token) {
token = JSON.parse(token);
}
  const userDetails = async () => {
    try {
      let education1=await getEducationById(user?._id,menuId)
      setEducation(education1?.data);
      let family1=await getFamilyById(user?._id,menuId)
      setFamily(family1?.data);
      let address1=await getAddressById(user?._id,menuId)
      setAddress(address1?.data);
      let document1=await getDocumentById(user?._id,menuId)
      setDocument(document1?.data);
      let experience1=await getExperienceById(user?._id,menuId)
      setExperience(experience1?.data);
      let design=await getWorkByid(user?._id,menuId)
      setRolename(design?.data?.data?.roleId.roleName)
      setDes(design?.data?.data);
      let works=await getWorkByid(user?._id,menuId)
      setWork(works?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    userDetails();
  }, []);
  
  return (
    <Box maxWidth="550" ml={10}>
      <MDBModal
        tabIndex="-1"
        show={userProfileModal}
        setShow={setUserProfileModal}
      >
        <MDBModalDialog size="xl" scrollable centered>
          <MDBModalContent
            style={{ marginTop: "1%", maxHeight: "87vh" }}
            className="modalForuserProfile"
          >
            <MDBModalHeader>
              <MDBModalTitle style={{ fontSize: "1.4rem", fontWeight: "bold",color:'#267bd9' }} >
                User Profile
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>

            <MDBModalBody>
              <Box>
                <Box>
                  <PersonView user={user} basicinfo={des} role={rolename} />
                </Box>
              </Box>
              <Divider />
              <Box mt={2}>
                <Accordion sx={{ marginTop: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      // color={textColor}
                      color="#267bd9"
                      
                    >
                      Address Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Address card */}
                    <Address profiledata={address?.data}  />
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="#267bd9"
                    >
                      Education Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Education card */}
                    <Education profiledata={education?.data}  />
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="#267bd9"
                    >
                      Experience Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Experience card */}
                    <Experience profiledata={experience?.data} />
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="#267bd9"
                    >
                      KYC Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <KYC profiledata={document?.data} />
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="#267bd9"
                    >
                      Family details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Family profiledata={family?.data} />
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="#267bd9"
                    >
                      WorkInfo
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Work workInfo={work} />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </Box>
  );
}
