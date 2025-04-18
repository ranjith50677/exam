import { Divider} from 'antd';
import { Grid } from '@mui/material';
import {Box} from '@mui/material';
// import {Typography} from '@mui/material';
import React from 'react';
import moment from 'moment';

export default function Work({workInfo}) {
     return (
          <>
          {workInfo ? (
              <div >
               <Box display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Department </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp; {workInfo ? workInfo?.department:"--"}</b></span>
                              </Box>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Designation </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{workInfo ? workInfo?.designation:"--"}</b></span>
                              </Box>
                              
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Joining Date </p><span style={{wordBreak:"break-word"}}>
                                        {/* <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{workInfo ? workInfo?.joiningDate?.split("T")[0]:"--"}</b> */}
                                        <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{!moment(workInfo?.joiningDate).isValid() ? workInfo?.joiningDate: moment(workInfo?.joiningDate).format("DD-MM-YYYY")}</b>
                                        </span>
                              </Box>
                              <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Salary </p><span style={{wordBreak:"break-word"}}>
                                        <b style={{color:"#264D73"}}>:&nbsp;&nbsp;{workInfo ? workInfo?.salary:"--"}</b></span>
                              </Box>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Reported To </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{workInfo ? workInfo?.reportedTo:"--"}</b></span>
                              </Box>
                             
                    
                         </Grid>
                    </Grid>
               </Box>
               <Divider />
               </div>
             ) : (
               <>
                 <h5 style={{ fontWeight: "bold" }}>No Work Details</h5>
               </>
             )}
    </>
     );
}
