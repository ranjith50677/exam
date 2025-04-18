// import { Flex } from '@chakra-ui/react';
import { CContainer, CFormInput } from '@coreui/react';
import React from 'react'

const CustomInput = (props) => {
const {style,id,name,placeholder,type,inputStyle, ...others}= props
  return (
    <CContainer style={style}>
      <CFormInput id={id} name={name} placeholder={placeholder} type={type} style={inputStyle}  {...others}/>
     </CContainer> 
     
  )
}

export default CustomInput
