import React from 'react';
import TableContainer from './TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from '../Card';
import { CContainer } from '@coreui/react';
import "./table.css";
const CustomTable = (props) => {
  const {data,columns,onClick}=props
  return (
    <CustomCard  style={{maxWidth:"60%",minWidth:"70%",marginTop:'30px',borderColor:'transparent'}} >
      <CContainer  style={{padding:'5px',width:"145%"}}>
        <TableContainer
          columns={columns}
          data={data?(data):(()=>{
            console.log("no data");
          })}
         
          onClick={onClick}
        /> 
        
        
      </CContainer>
    </CustomCard>
  );
};

export default CustomTable;
