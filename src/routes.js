import React from "react";
import _ from "lodash";
import { useContext } from "react";
import fatculty from "./context/fatculty.js";

const Ass = React.lazy(() => import("./Assignment/createAss.js"));
const ques = React.lazy(() => import("./Assignment/createque.js"));
const All = React.lazy(() => import("./Assignment/Allassignment.js"));
const Attend = React.lazy(() => import("./Attend/index.js"));
const Report = React.lazy(() => import("./Report/index.js"));
const Reg = React.lazy(() => import("./views/pages/regsiter/reg.js"));
const view = React.lazy(() => import("./Attend/studentviewreport/index.js"));

let routers = () => {
  const Access=useContext(fatculty)
// let token = localStorage.getItem("token");

let studentAss=[
  { path: "/Stuview", name: "StudentReport", element: view },
  { path: "/Attend", name: "student", element: Attend }
];
let Faculty=[
  { path: "/Assignment", name: "Assignment", element: Ass },
  { path: "/Question", name: "ques", element: ques },
  { path: "/dashboard", name: "Dashboard", element: All },
  { path: "/report", name: "Report", element: Report },
  { path: "/Reg", name: "regsiter", element: Reg },
]


  return Access.isfaculty ? Faculty: studentAss;
};

export default routers;





// import React from "react";
// import _ from "lodash";
// import { useContext } from "react";
// import fatculty from "./context/fatculty.js";

// const Ass = React.lazy(() => import("./Assignment/createAss.js"));
// const Login = React.lazy(() => import("./views/pages/login/Login.js"));
// const ques = React.lazy(() => import("./Assignment/createque.js"));
// const All = React.lazy(() => import("./Assignment/Allassignment.js"));
// const Attend = React.lazy(() => import("./Attend/index.js"));
// const Report = React.lazy(() => import("./Report/index.js"));
// const Reg = React.lazy(() => import("./views/pages/regsiter/reg.js"));
// const view = React.lazy(() => import("./Attend/studentviewreport/index.js"));
// const list = React.lazy(() => import("./Attend/list.js"));


// let routers = () => {
//   const Access=useContext(fatculty)
// console.log(Access.isfaculty);
//   let token = localStorage.getItem("token");
//   let routes;

//   if (token) {
//     routes = [
//       // { path: '/', exact: true, name: 'Home' },
//       { path: "/Assignment", name: "Assignment", element: Ass },
//       { path: "/Question", name: "ques", element: ques },
//       { path: "/dashboard", name: "Dashboard", element: All },
//       { path: "/report", name: "Report", element: Report },
//       { path: "/Attend", name: "student", element: Attend },
//       { path: "/Reg", name: "regsiter", element: Reg },
//       { path: "/Stuview", name: "StudentReport", element: view },
//       { path: "/List", name: "List", element: list },
//     ];
//   }else{
//     routes=[]
//   }

//   return routes;
// };

// export default routers;
