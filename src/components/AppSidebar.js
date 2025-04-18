import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CAvatar, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react';
// import {cilAccountLogout} from '@coreui/icons'

import { AppSidebarNav } from './AppSidebarNav'

// import { logoNegative } from 'src/assets/brand/logo-negative'
// import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { cilAccountLogout } from '@coreui/icons'
import { cilApple } from '@coreui/icons'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import fatculty from 'src/context/fatculty';
import { Box, Button } from '@mui/material';

const AppSidebar = () => {
  const nav=useNavigate()
  const Access=useContext(fatculty)
  const a=Access.name
  const[logout,setLogout]=useState(false)
  const[name,setName]=useState('')
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  let width ;
  (function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;
    function displayWindowSize() {
      width = window.innerWidth;
      if(width > 768){
        dispatch({ type: 'set', sidebarShow: true })
      }
    };
  })()

  const handle=(e)=>{
    e.preventDefault();  
    localStorage.removeItem('token')
    Access.isfaculty=''
    setLogout(true)
    nav('/login')
  }

  const capitalizeFirstLowercaseRest = (a) => {
    let ab=a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    setName(ab)

  };
  useEffect(()=>{
    capitalizeFirstLowercaseRest(a)
  },[])
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      style={{backgroundColor:"#1b3d5f"}}
    >
      <CSidebarBrand className="d-none d-md-flex"   style={{backgroundColor:"#1b3d5f"}} >
        <Box style={{backgroundColor:'#e7e1e1', marginTop: '78px' ,height: "157px",
    width: "155px",
    borderRadius: "82px"}}>
         <CAvatar src={"https://www.w3schools.com/howto/img_avatar.png"} size="xl" style={{marginTop:"30%",width:"132px",border:'10px',marginLeft:'12px'}} />
        </Box>
      </CSidebarBrand>
      <center>
      <div style={{marginTop:'20px',marginLeft:"-19px",fontFamily:"Georgia, serif"}}>
      <CIcon icon={cilApple} className="me-2"/>  
          <b>
            {name}
            </b>
       </div>
      </center>
      <CSidebarNav style={{marginTop:"30px"}}>
        <SimpleBar>
          <AppSidebarNav items={navigation()} />
        </SimpleBar>
      </CSidebarNav>
      <div style={{cursor: "pointer",marginBottom:'100px'}} onClick={handle}>
      <center >
        <Button variant='contained' style={{borderRadius:'30px'}}>
        <CIcon icon={cilAccountLogout} className="me-2"/>   
         Logout
        </Button>
      </center>
      </div>
      <br/>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)