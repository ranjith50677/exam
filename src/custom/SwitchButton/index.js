import React, { useState } from 'react'

import Switch from "react-switch";
import { Typography } from '@material-ui/core';



const SwitchButton = ({ name,checked,setchecked,onClick, update }) => {
    
    return (
     
        <div  style={{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"center",margin:"10px"}}>
            <Typography  color="inherit" variant="subtitle1" mt={1} style={{padding:3}}>
                {name}
            </Typography>
            <Switch onChange={update?onClick:()=>setchecked(!checked)} checked={checked} />
        </div>
        

    )
}
export default SwitchButton