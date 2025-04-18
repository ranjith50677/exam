import { Grid } from "@mui/material";
import { Divider } from "antd";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

export default function Education({  profiledata }) {

  return (
    <>
      {profiledata ? (
        <div>
        {/* ********************************************************** SSLC ************************************************************************ */}
          <Typography variant="h6" color={"#3d80c2"} ml={2} fontWeight="bold">
            SSLC
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "120px", margin: 0, fontWeight: "bold" }}
                  >
                    School Name
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata ? profiledata?.sslc?.sslcSchoolName : ""}
                    </b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "120px", margin: 0, fontWeight: "bold" }}
                  >
                    Board of Studied &nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata ? profiledata?.sslc?.sslcBoard : ""}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "120px", margin: 0, fontWeight: "bold" }}
                  >
                    Year of Passing
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.sslc?.sslcYearOfPassing
                        : ""}
                    </b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "120px", margin: 0, fontWeight: "bold" }}
                  >
                    Percentage &nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                    &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                      {profiledata ? profiledata?.sslc?.sslcPercentage : ""}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          {/* **********************************************************  HSC ************************************************************************ */}
          <Typography variant="h6" color={"#3d80c2"} ml={2} fontWeight="bold">
            HSC
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "120px", margin: 0, fontWeight: "bold" }}
                  >
                    School Name
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.hsc?.hscSchoolName
                        :  ""}
                    </b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "120px", margin: 0, fontWeight: "bold" }}
                  >
                    Board of Studied &nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.hsc?.hscBoard
                        :  ""}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "120px", margin: 0, fontWeight: "bold" }}
                  >
                    Year of Passing
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.hsc?.hscYearOfPassing
                        :  ""}
                    </b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "120px", margin: 0, fontWeight: "bold" }}
                  >
                    Percentage 
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                    &nbsp; &nbsp; :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.hsc?.hscPercentage
                        : ""}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider />
                {/* **********************************************************  UG ************************************************************************ */}
          <Typography variant="h6" color={"#3d80c2"} ml={2} fontWeight="bold">
            UG (Under Graduate)
          </Typography>
          {profiledata?.ug? <><Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    University Name{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.ug?.ugUniversityName
                        :  ""}
                    </b>
                  </span>
                </Box>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Course
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.ug?.ugDepartmentCourse
                        :  ""}
                    </b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Institution Name{" "}&nbsp;&nbsp; &nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.ug?.ugInstituteName
                        :  ""}
                    </b>
                  </span>
                </Box>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Percentage / CGPA{" "}&nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                    :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.ug?.ugCgpa
                        :  ""}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Year of Passing{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.ug?.ugYearOfPassing
                        :  ""}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider /></> :"No Ug data"}
          {/* **********************************************************  PG ************************************************************************ */}
          <Typography variant="h6" color={"#3d80c2"} ml={2} fontWeight="bold">
            PG (Post Graduate)
          </Typography>
          {
            profiledata?.pg == null  ? <h5 style={{padding:"20px"}}>No  Data</h5> :<>
            <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
              {profiledata?.pg?.pgUniversityName? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    University Name{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.pg?.pgUniversityName
                        : ""}
                    </b>
                  </span>
                </Box> :""}
                {profiledata?.pg?.pgDepartmentCourse? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Course
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.pg?.pgDepartmentCourse
                        :  ""}
                    </b>
                  </span>
                </Box> :""}
                
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
              {profiledata?.pg?.pgInstituteName?  <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Institution Name{" "} &nbsp;&nbsp; &nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.pg?.pgInstituteName
                        : ""}
                    </b>
                  </span>
                </Box> :""}
                { profiledata?.pg?.pgCgpa? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Percentage / CGPA{" "} &nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.pg?.pgCgpa
                        : ""}
                    </b>
                  </span>
                </Box>:""}
                
                
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
              {profiledata?.pg?.pgYearOfPassing? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Year of Passing{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.pg?.pgYearOfPassing
                        :  ""}
                    </b>
                  </span>
                </Box>:""}
                
              </Grid>
            </Grid>
          </Box>
          </>}
          <Divider />
          {/* *************************************************  PHD ******************************************************************* */}
          
          <Typography variant="h6" color={"#3d80c2"} ml={2} fontWeight="bold">
            PHD (Doctor Of Philosophy)
          </Typography>
          { profiledata?.phd ==null  ? <h5 style={{padding:"20px"}}>No  Data</h5> : <>  
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
              {profiledata?.phd?.phdUniversityName? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    University Name{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.phd?.phdUniversityName
                        : ""}
                    </b>
                  </span>
                </Box> :""}
                {profiledata?.phd?.phdDepartmentCourse? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Course
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.phd?.phdDepartmentCourse
                        :  ""}
                    </b>
                  </span>
                </Box>:""}
                
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
              {profiledata?.phd?.phdInstituteName? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Institution Name{" "} &nbsp;&nbsp; &nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.phd?.phdInstituteName
                        : ""}
                    </b>
                  </span>
                </Box> :""}
               {profiledata?.phd?.phdCgpa? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Percentage / CGPA{" "} &nbsp;
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.phd?.phdCgpa
                        :  ""}
                    </b>
                  </span>
                </Box>:""}
                
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
              {profiledata?.phd?.phdYearOfPassing? <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "133px", margin: 0, fontWeight: "bold" }}
                  >
                    Year of Passing{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata
                        ? profiledata?.phd?.phdYearOfPassing
                        :  ""}
                    </b>
                  </span>
                </Box>:""}
                
              </Grid>
            </Grid>
          </Box>
          </>}
          
        </div>
      ) : (
        <>
          <h5 style={{ fontWeight: "bold" }}>No Education Details</h5>
        </>
      )}
    </>
  );
}
