import React from "react";
import { CCard } from "@coreui/react";

const CustomCard = (props) => {
    const { style, children, ...rest } = props;
    return (
        <CCard style={style} {...rest}>
        {children}
        </CCard>
    );
    }

export default CustomCard;