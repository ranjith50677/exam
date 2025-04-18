import { Divider} from 'antd';
import { Grid } from '@mui/material';
import {Box} from '@mui/material';
// import {Typography} from '@mui/material';
import React from 'react';
// import Profile from 'src/views/profile';

export default function Address({ profiledata}) {

     return (
          <>
           {profiledata ? (
        <div>
               <Box display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>                         
                              <Box mb={2} display="flex" > 
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Door No </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? profiledata?.Doorno : "--"}</b></span>
                              </Box>
                             {profiledata.landmark ? <Box mb={2} display="flex" > 
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Landmark </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata.landmark ? profiledata?.landmark : ""}</b></span>
                              </Box>:""}
                              <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>City </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? profiledata?.city :"--"}</b></span>
                              </Box>
                              <Box mb={2} display="flex" >
                                    <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Postal code </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? profiledata?.postalCode :"--"}</b></span>
                                   </Box>
                              
                         </Grid>
                         <Grid item xs={12} md={6}>
                         
                         <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Street Name</p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? profiledata?.streetName:"--"}</b></span>
                              </Box>
                              <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>Country </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? profiledata?.country :"--"}</b></span>
                              </Box>
                        
                              <Box mb={2} display="flex" >
                                   <p style={{minWidth:"100px",margin:0,fontWeight:'bold'}}>State </p><span style={{wordBreak:"break-word"}}><b style={{color:"#264D73"}}>:&nbsp;&nbsp;{profiledata ? profiledata?.state :"--"}</b></span>
                              </Box>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         
                   
                    </Grid>
                    
               </Box>
               
               <Divider />
               </div>
      ) : (
        <>
          <h5 style={{ fontWeight: "bold" }}>No Address Details</h5>
        </>
      )}
          </>
     );
}
