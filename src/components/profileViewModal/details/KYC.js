import { Grid } from "@mui/material";
import { Divider } from "antd";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

export default function KYC({ profiledata }) {
  return (
    <>
      {profiledata ? (
        <div>
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "130px", margin: 0, fontWeight: "bold" }}
                  >
                    Account Number &nbsp;{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      &nbsp;:&nbsp;&nbsp;
                      {profiledata ? profiledata.bankDetails?.accountNo : "--"}
                    </b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "130px", margin: 0, fontWeight: "bold" }}
                  >
                    IFSC Code{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      {" "}
                      :&nbsp;&nbsp;
                      {profiledata ? profiledata.bankDetails?.ifsc : "--"}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "130px", margin: 0, fontWeight: "bold" }}
                  >
                    Branch Name
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      &nbsp; :&nbsp;&nbsp;
                      {profiledata ? profiledata.bankDetails?.branch : "--"}
                    </b>
                  </span>
                </Box>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "130px", margin: 0, fontWeight: "bold" }}
                  >
                    A/c Holder Name{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      &nbsp;&nbsp;:&nbsp;&nbsp;
                      {profiledata
                        ? profiledata.bankDetails?.accountHolderName
                        : "--"}
                    </b>
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "130px", margin: 0, fontWeight: "bold" }}
                  >
                    Bank Name{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                      {profiledata ? profiledata.bankDetails?.bankName : "--"}
                    </b>
                  </span>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Typography variant="h6" color={"#3d80c2"} ml={2} fontWeight="bold">
            Identification Details
          </Typography>

          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={2} display="flex">
                  <p
                    style={{ minWidth: "130px", margin: 0, fontWeight: "bold" }}
                  >
                    Aadhaar Number{" "}
                  </p>
                  <span style={{ wordBreak: "break-word" }}>
                    <b style={{ color: "#264D73" }}>
                      &nbsp; &nbsp;:&nbsp;&nbsp;
                      {profiledata
                        ? profiledata.identificationDetails?.aadhaarNo
                        : ""}
                    </b>
                  </span>
                </Box>
                {profiledata.identificationDetails?.passportNo ? (
                  <Box mb={2} display="flex">
                    <p
                      style={{
                        minWidth: "130px",
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Passport Number{" "}
                    </p>
                    <span style={{ wordBreak: "break-word" }}>
                      <b style={{ color: "#264D73" }}>
                        &nbsp; :&nbsp;&nbsp;
                        {profiledata
                          ? profiledata.identificationDetails?.passportNo
                          : ""}
                      </b>
                    </span>
                  </Box>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                {profiledata.identificationDetails?.pfNo ? (
                  <Box mb={2} display="flex">
                    <p
                      style={{
                        minWidth: "130px",
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Provident Fund{" "}
                    </p>
                    <span style={{ wordBreak: "break-word" }}>
                      <b style={{ color: "#264D73" }}>
                      :&nbsp;&nbsp;
                        {profiledata
                          ? profiledata.identificationDetails?.pfNo
                          : ""}
                      </b>
                    </span>
                  </Box>
                ) : (
                  ""
                )}

                {profiledata.identificationDetails?.uanNo ? (
                  <Box mb={2} display="flex">
                    <p
                      style={{
                        minWidth: "130px",
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      UAN Number{" "}
                    </p>
                    <span style={{ wordBreak: "break-word" }}>
                      <b style={{ color: "#264D73" }}>
                        :&nbsp;&nbsp;
                        {profiledata
                          ? profiledata.identificationDetails?.uanNo
                          : ""}
                      </b>
                    </span>
                  </Box>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                {profiledata.identificationDetails?.panNo ? (
                  <Box mb={2} display="flex">
                    <p
                      style={{
                        minWidth: "130px",
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      PAN Number{" "}
                    </p>
                    <span style={{ wordBreak: "break-word" }}>
                      <b style={{ color: "#264D73" }}>
                      &nbsp; :&nbsp;&nbsp;
                        {profiledata
                          ? profiledata.identificationDetails?.panNo
                          : ""}
                      </b>
                    </span>
                  </Box>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                {profiledata.identificationDetails?.esiNo ? (
                  <Box mb={2} display="flex">
                    <p
                      style={{
                        minWidth: "130px",
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      ESI Number{" "}
                    </p>
                    <span style={{ wordBreak: "break-word" }}>
                      <b style={{ color: "#264D73" }}>
                        :&nbsp;&nbsp;
                        {profiledata
                          ? profiledata.identificationDetails?.esiNo
                          : ""}
                      </b>
                    </span>
                  </Box>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </div>
      ) : (
        <>
          <h5 style={{ fontWeight: "bold" }}>No KYC Details</h5>
        </>
      )}
    </>
  );
}

