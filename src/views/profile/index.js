import React, { Profiler, useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import Education from "src/components/profileViewModal/details/Education";
import Address from "src/components/profileViewModal/details/Address";
import Kyc from "src/components/profileViewModal/details/KYC";
import PersonView from "src/components/profileViewModal/details/PersonView";
// import PersonView from "src/components/profileViewModal/details/PersonView";
// import Family from "src/components/profileViewModal/details/Family";
import {
  getProfile,
  getRoleById,
  myProfile,
} from "src/utility/apiService";
import Family from "src/components/profileViewModal/details/Family";
import Experience from "src/components/profileViewModal/details/Experience";
import { Divider } from "antd";

import Work from "src/components/profileViewModal/details/Work";


export default function Profile() {
  const [basicActive, setBasicActive] = useState("tab1");
  // const [company, setCompany] = useState();
  // const [address, setAddress] = useState();
  // const [education, setEducation] = useState();
  const [profileData, setProfileData] = useState("");
  const [viewData, setViewData] = useState("");
  const [id, setId] = useState("");
  const [exp,setExp]=useState([])
const [role1,setRole1] = useState()

  let token = localStorage.getItem("hrmsv2-token");
  if (token) {
    token = JSON.parse(token);
  }

  const profile = async () => {
    try {
      let myProfile = await getProfile(token);
      setViewData(myProfile.data.data);
      setId(myProfile.data.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  const profiledetails = async () => {
    try {
      let myprofiledetail = await myProfile(token);
      setProfileData(myprofiledetail.data.data);
       setExp(myprofiledetail?.data?.data?.experience)  
       let rolename=await getRoleById(myprofiledetail?.data?.data?.work?.roleId)
       setRole1(rolename?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };




  useEffect(() => {
    profile();
    profiledetails();
    // role();
  }, []);
  return (
      <MDBContainer className="py-5 h-100" style={{ maxWidth: "100%" }}>
        <MDBCol lg="9" xl="7" style={{ minWidth: "100%" }}>
          <MDBCard>
              {/* <MDBTypography style={{ fontSize: "1.55rem", fontWeight: "300",marginLeft:'10px',marginTop:'15px' }}>
                <b>MYPROFILE</b>
               <Divider />
              </MDBTypography> */}
                 <PersonView user={viewData} basicinfo={profileData?.work} role={role1?.roleName} formy={viewData}  />
            <MDBCardBody className="text-black p-4 md-3">
              <MDBRow className=" bg-light">
                <MDBCol style={{ flex: "none" }} className="mb-12">
                  <MDBTabs className="mb-3">
                    <MDBTabsItem style={{textAlign:"center"}}>
                      <>
                      <MDBTabsLink
                        className="mb-3"
                        style={{
                          width: "120px",
                          height: "48px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleBasicClick("tab1")}
                        active={basicActive === "tab1"}
                      >
                        Education
                      </MDBTabsLink>
                      </>
                    </MDBTabsItem>
                    <MDBTabsItem style={{textAlign:"center"}}>
                      <MDBTabsLink
                        style={{
                          width: "120px",
                          height: "48px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleBasicClick("tab2")}
                        active={basicActive === "tab2"}
                      >
                        Address
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem style={{textAlign:"center"}}>
                      <MDBTabsLink
                     
                        style={{
                          width: "120px",
                          height: "48px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleBasicClick("tab3")}
                        active={basicActive === "tab3"}
                      >
                        Kyc
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem style={{textAlign:"center"}}>
                      <MDBTabsLink
                        style={{
                          width: "120px",
                          height: "48px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleBasicClick("tab4")}
                        active={basicActive === "tab4"}
                      >
                        Family
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem style={{textAlign:"center"}}>
                      <MDBTabsLink
                        style={{
                          width: "140px",
                          height: "48px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleBasicClick("tab5")}
                        active={basicActive === "tab5"}
                      >
                        Experience
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem style={{textAlign:"center"}}>
                      <MDBTabsLink
                        style={{
                          width: "140px",
                          height: "48px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleBasicClick("tab6")}
                        active={basicActive === "tab6"}
                      >
                       WorkInFo
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>
                  <MDBTabsContent>
                    <MDBTabsPane show={basicActive === "tab1"}>
                      <Education profiledata={profileData?.education} />
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === "tab2"}>
                      <Address profiledata={profileData?.address} />
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === "tab3"}>
                      <Kyc profiledata={profileData?.document}/>
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === "tab4"}>
                     <Family profiledata={profileData?.family}/>
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === "tab5"}>
                     <Experience profiledata={exp}/>
                     {/* <Experience /> */}
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === "tab6"}>
                    <Work workInfo={profileData?.work}/>
                    </MDBTabsPane>
                    
                  </MDBTabsContent>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* </MDBRow> */}
      </MDBContainer>
  );
}
