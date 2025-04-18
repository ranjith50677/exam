import { Icon } from '@mui/material';
import {Box} from '@mui/material';
import {Typography} from '@mui/material';

import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdCancel } from 'react-icons/md';
import { GoVerified } from 'react-icons/go';
import moment from 'moment';
// import { getUserRole } from 'utility/apiService';
// import { currentCompanyView } from 'utility/apiService';

export default function PersonView({user,basicinfo,role,formy}) {
     const [justifyActive, setJustifyActive] = useState('tab1');

     const handleJustifyClick = (value) => {
          if (value === justifyActive) {
               return;
          }
          setJustifyActive(value);
     };


     const userDetaills = async () => {
          // try {
          //      const resCurrent = await currentCompanyView(user._id);
          //      // console.log(resCurrent);
          //      setCompany(resCurrent);
          //      const resRole = await getUserRole(user.role);
          //      setRole(resRole.data);
          // } catch (error) {
          //      console.log(error);
          // }
     };
     // currentCompany();
     useEffect(() => {
          userDetaills();
     }, []);

     return (
          <div style={{ width: '100%', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
              {!formy ?(
             <Typography variant='h5' fontWeight='medium' color={"#5479ab"}>
                    {user?.firstName}'s Profile
               </Typography>
              ):null
                } 
               <Box display='flex' alignItems='start' flexDirection='row' sx={{ backgroundColor:'#EEEEEC',flexWrap: 'wrap',alignItems:"center", justifyContent: 'start' }}>
                    <Box
                         component='img'
                         src='https://www.w3schools.com/howto/img_avatar.png'   
                         alt='avatar'
                         width='150px'
                         height='150px'
                         borderRadius='50%'
                         ml={1.3}
                         mt={2}
                         mb={2}
                    />
                    <Box ml={2} mt={2} mb={2} display='flex' flexDirection='column'>
                         <Typography variant='h5' mb={"20px"} fontWeight='bold' style={{display:"flex"}} color={"#264D73"}>
                              {user?.firstName} {user?.lastName}
                              {user?.isActive ? (
                                   <GoVerified color='green' size='20px' style={{ marginLeft: '2px' }} />
                              ) : user?.isBlocked ? (
                                   <IconContext.Provider value={{ color: 'red', size: '20px', style: { marginLeft: '2px' } }}>
                                   <MdCancel/>
                              </IconContext.Provider>
                              ) : (
                                   <IconContext.Provider value={{ color: 'red', size: '20px', style: { marginLeft: '2px' } }}>
                                  <MdCancel/>
                              </IconContext.Provider>
                              )}
                         </Typography>
                         <Box display='flex' flexDirection='column' width='16rem'>
                              <Box display='flex' flexDirection='row' sx={{width:'max-content'}}>
                                   <Typography variant='body2' fontSize='14px' fontWeight={"bold"} color={"#264D73"}>
                                        Role
                                   </Typography>
                                   &nbsp;&nbsp;
                                   <Typography variant='body1' fontWeight={"bold"} ml={'48px'} fontSize='14px' color={"#267bd9"}>
                                        : {role ? role : '--'}
                                   </Typography>
                              </Box>
                              <Box display='flex' flexDirection='row' sx={{width:'max-content'}}>
                                   <Typography variant='body2' fontSize='14px' fontWeight={"bold"} color={"#264D73"}>
                                        Designation
                                   </Typography>
                                   &nbsp;
                                   <Typography variant='body1' fontWeight={"bold"} fontSize='14px' color={"#267bd9"}>
                                        : {basicinfo ? basicinfo?.designation : '--'}
                                   </Typography>
                              </Box>
                              <Box display='flex' flexDirection='row' sx={{width:'max-content'}} >
                                   <Typography variant='body2' fontSize='14px' fontWeight={"bold"} color={"#264D73"}>
                                        E-Mail
                                   </Typography>
                                   &nbsp;&nbsp;
                                   <Typography variant='body1' fontWeight={"bold"} ml={'36px'} fontSize='14px' color={"#267bd9"} >
                                       : {user?.email}       
                                   </Typography>
                              </Box>
                              <Box display='flex' flexDirection='row' sx={{width:'max-content'}}>
                                   <Typography variant='body2' fontSize='14px' fontWeight={"bold"} color={"#264D73"}>
                                        Mobile No
                                   </Typography>
                                   &nbsp;
                                   <Typography variant='body1' fontWeight={"bold"} ml={'11px'} fontSize='14px' color={"#267bd9"}>
                                 :  {user?.mobileNo}

                                   </Typography>
                              </Box>  
                         </Box>
                    </Box>
                    <Box mt={2} sx={{width:"300px",   marginLeft:"13%"}} >
                         <MDBTabs
                              pills
                              className='mb-3 '
                              style={{
                                   backgroundColor: '#dddd',
                                   borderRadius: '5px',
                                   width: '205px',
                                   fontSize: '13px',
                                   marginLeft:"32px",
                                   width: '70%'
                              }}>
                              <MDBTabsItem>
                                   <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} style={{fontWeight:'bold'}}>
                                        Basic Info
                                   </MDBTabsLink>
                              </MDBTabsItem>
                              <MDBTabsItem>
                                   <MDBTabsLink
                                        style={{ width: '104%',fontWeight:'bold'}}
                                        onClick={() => handleJustifyClick('tab2')}
                                        active={justifyActive === 'tab2'}>
                                        Personal Info
                                   </MDBTabsLink>
                              </MDBTabsItem>
                         </MDBTabs>

                         <MDBTabsContent>
                              <MDBTabsPane show={justifyActive === 'tab1'}>
                                   <Box >
                                        <Box display='flex' flexDirection='row' sx={{width:'max-content'}}>
                                             <Typography variant='body2' fontSize='14px' fontWeight={"bold"} color={"#264D73"}>
                                                  Joining Date 
                                             </Typography>
                                             &nbsp; &nbsp;
                                             <Typography variant='body1' fontWeight={"bold"} fontSize='14px' color={"#267bd9"} >
                                                  {/* {basicinfo?.joiningDate?.split("T")[0]} */}
                                                :  {!moment(basicinfo?.joiningDate).isValid() ? basicinfo?.joiningDate: moment(basicinfo?.joiningDate).format("DD-MM-YYYY")}
                                             </Typography>
                                                  
                                        </Box>
                                        <Box display='flex' flexDirection='row' sx={{width:'max-content'}}>
                                             <Typography variant='body2' fontSize='14px'  fontWeight={"bold"} color={"#264D73"}>
                                                  Gender 
                                             </Typography>
                                             &nbsp;&nbsp;&nbsp;
                                             <Typography variant='body1' fontWeight={"bold"} ml={"34px"} fontSize='14px' color={"#267bd9"}    style={{textTransform:'capitalize'}}>
                                                : {user?.gender}
                                             </Typography>
                                        </Box>
                                        <Box display='flex' flexDirection='row'>
                                             &nbsp;  
                                        </Box>
                                       
                                   </Box>
                              </MDBTabsPane>
                              <MDBTabsPane show={justifyActive === 'tab2'}>
                                   <Box mt={2}>
                                        <Box display='flex' flexDirection='row' sx={{width:'max-content'}}>
                                             <Typography variant='body2' fontSize='14px' fontWeight={"bold"} color={"#264D73"}>
                                                  Date of Birth 
                                             </Typography>
                                             &nbsp;&nbsp;    
                                             <Typography variant='body1' fontWeight={"bold"} ml={"9px"} fontSize='14px' color={"#267bd9"} >
                                                  {/* :  { user?.dob?.split("T")[0]} */}
                                                  : {!moment(user?.dob).isValid() ? user?.dob: moment(user?.dob).format("DD-MM-YYYY")}
                                             </Typography>
                                        </Box>
                                        <Box display='flex' flexDirection='row' sx={{width:'max-content'}}>
                                             <Typography variant='body2' fontSize='14px' fontWeight={"bold"}  color={"#264D73"}>
                                                  Marital Status 
                                             </Typography>
                                             &nbsp;&nbsp; 
                                             <Typography variant='body1' fontWeight={"bold"}  fontSize='14px' color={"#267bd9"}   style={{textTransform:'capitalize'}}>
                                                    : {user?.marriageStatus}
                                             </Typography>
                                        </Box>
                                        <Box display='flex' flexDirection='row' sx={{width:'max-content'}}>
                                             <Typography variant='body2' fontSize='14px'  fontWeight={"bold"} color={"#264D73"}>
                                                  Blood Group 
                                             </Typography>
                                             &nbsp;
                                             <Typography variant='body1' fontWeight={"bold"} ml={"11px"} fontSize='14px' color={"#267bd9"}  >
                                                  : {user?.bloodGroup}
                                             </Typography>
                                        </Box>
                                   </Box>
                              </MDBTabsPane>
                         </MDBTabsContent>
                    </Box>
               </Box>
          </div>
     );
}
