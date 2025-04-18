import { CContainer, CFormSwitch } from '@coreui/react';
import {Switch,Typography} from '@mui/material'
import { Label } from 'reactstrap';
import React from 'react'

const CustomSwitch = (props) => {
    const {name,size,color,setChecked,isChecked} = props;
  return (
    <>    
    <CContainer>
     <Label>{name}</Label>
        <Switch  size={size} color={color} onChange={()=>setChecked(!isChecked)}  checked={isChecked}   /> 
    </CContainer> 
    </>

  )
}

export default CustomSwitch
