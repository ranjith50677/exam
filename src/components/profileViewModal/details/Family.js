import { Divider } from "antd";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { familyDetails } from "src/utility/apiService";
import { useEffect } from "react";
import moment from "moment";

export default function Family({ profiledata }) {

  let textColor = "inherit";

  return (
    <>
      {profiledata ? (
        <>
          {profiledata.length > 0 ? (
      profiledata?.map((item, index) => (
        <div key={index} >
          <Box display="flex" flexDirection="column" alignItems="center" p={2} >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Name </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? item?.name : "--"}</b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Relationship </p>&nbsp;&nbsp;&nbsp;
                  <span style={{ wordBreak: "break-word",textTransform:'capitalize' }}>
                    <b style={{color:"#264D73"}}>
                      :&nbsp;&nbsp;{profiledata ? item?.relationship : "--"}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>DOB </p>
                  <span style={{ wordBreak: "break-word" }}>
                    {/* <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? item?.dob?.split("T")[0] : "--"}</b> */}
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{!moment(profiledata?.dob).isValid() ? profiledata?.dob: moment(profiledata?.dob).format("DD-MM-YYYY")}</b>
                  </span>
                </Box>
                <Box mb={2} display="flex">
                  <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>Occupation </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? item?.occupation : "--"}</b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>AadhaarNo </p>&nbsp;&nbsp;&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? item?.adhaarNo : "--"}</b>
                  </span>
                </Box>

                <Box mb={2} display="flex">
                  <p style={{ minWidth: "100px", margin: 0,fontWeight:'bold' }}>EmergencyNo</p>&nbsp;&nbsp;
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{color:"#264D73"}}>
                      :&nbsp;&nbsp;
                      {profiledata ? item?.emergencyContact : "--"}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </div>
        ))
          ) : (
            <h5 style={{ fontWeight: "bold" }}>No Family Details</h5>
          )}
        </>
      ) : (
        <>
          <h5 style={{ fontWeight: "bold" }}>No Family Details</h5>
        </>
      )}
    </>
  );
}
