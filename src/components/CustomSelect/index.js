import Select from 'react-select';
import "./CustomSelect.css" 
import React from 'react';
import {Typography} from '@mui/material';
import {Box} from '@mui/material';

const CustomSelect = ({option,name,placeholder,widthForSelect,disabled,setSelectedOptions,selectedOptions,star,isSearchable,isMulti,width,paddingLeft,marginTop,styles}) => {
    const handleSelect=(data)=>{
        setSelectedOptions(data);
    }
    return (
        <div className='mass' style={{width:width,paddingLeft:paddingLeft,marginTop:marginTop}}>
            <Typography variant="h6" fontWeight="medium" color="dark" mt={1} sx={{paddingLeft:"20px"}}>{name}</Typography>
            <Box sx={{width:widthForSelect}}>
                <Select
                    className='sel'
                    options={option}
                    placeholder={placeholder}
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    isDisabled={disabled}
                    styles={styles}
                />
            </Box>            
        </div>
    );
};

export default CustomSelect;
