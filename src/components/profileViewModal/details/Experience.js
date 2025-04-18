import { Grid } from "@mui/material";
import { Divider } from "antd";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

export default function Experience({ profiledata }) {
  let textColor = "inherit";
  return (
    <>
      {profiledata ? (
        <>
          {profiledata.length > 0 ? (
            profiledata?.map((item, index) => (
              <div key={index} >
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  p={2}
                >
              <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                      <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Company Name </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{item.companyName }</b>
                  </span>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                       <Box mb={2} display="flex">
                       <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Designation</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{item.designation}</b>
                  </span>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                      <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}> Job Description</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{item.description}</b>
                  </span>

                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Salary</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{item.salary}</b>
                  </span>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                      <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Service Start Date</p>&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{item.startDate?.split("T")[0]}</b>
                  </span>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box mb={2} display="flex">
                      <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Service End Date</p>&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{item.endDate?.split("T")[0]}</b>
                  </span>
                     
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box mb={2} display="flex" >
                      <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Experience</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.experience}</b>
                  </span>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
              </div>
            ))
          ) : (
            <h5 style={{ fontWeight: "bold" }}>No Experience</h5>
          )}
        </>
      ) : (
        <>
          <h5 style={{ fontWeight: "bold" }}>No Experience</h5>
        </>
      )}
    </>
  );
}
