import { CButton } from '@coreui/react'
import React from 'react'

const CustomButton = (props) => {
    const {title,style,text,color, variant,...others}= props
    // color:  primary danger success warning info secondary light dark
  return (
    <div>
        <CButton color={color} title={title} style={style}  variant={variant} {...others} width={'100%'} >{text}</CButton>
    </div>
  )
}

export default CustomButton
