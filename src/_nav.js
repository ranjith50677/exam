import React, { useContext } from "react";
import { CNavGroup, CNavItem } from "@coreui/react";
import { MdAccountBox, MdDashboard } from "react-icons/md";
import _ from "lodash";
import fatculty from "./context/fatculty";
import { GoReport } from "react-icons/go";

const _nav = () => {
  const Access=useContext(fatculty)
  let arr=[]
  let commonRoute=[]
  if(Access.isfaculty===true){
    commonRoute = [
      {
        component: CNavItem,
        name: "Assignment",
        to: "/Assignment",
        order: 0,
        icon: <MdDashboard style={{ width: "30px", paddingLeft: "2px " }} />,
        badge: {
          color: "info",
        },
      },
      {
        component: CNavItem,
        name: "Add Student",
        to: "/Reg",
        order: 0,
        icon: <MdAccountBox style={{ width: "30px", paddingLeft: "2px " }} />,
        badge: {
          color: "info",
        },
      },
      
      {
        component: CNavItem,
        name: "Report",
        to: "/report",
        order: 0,
        icon: <GoReport style={{ width: "30px", paddingLeft: "2px " }} />,
        badge: {
          color: "info",
        },
      },
    ];
  }else{
    commonRoute=[
      {
        component: CNavItem,
        name: "StudentAttend",
        to: "/Attend",
        order: 0,
        icon: <MdDashboard style={{ width: "30px", paddingLeft: "2px " }} />,
        badge: {
          color: "info",
        },
      },
      {
        component: CNavItem,
        name: "Report",
        to: "/Stuview",
        order: 0,
        icon: <GoReport style={{ width: "30px", paddingLeft: "2px " }} />,
        badge: {
          color: "info",
        },
      }

    ]
  }


  return commonRoute;
 
};

export default _nav;