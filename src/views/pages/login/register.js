import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Icon,
    Link,
    Switch,
    Text,
    useColorModeValue,
    Show,
  } from "@chakra-ui/react";
  import React, { useContext, useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  // import Particles from "react-particles";
  // import { loadFull } from "tsparticles";
  // import { useCallback } from "react";
  // import IconButton from "@material-ui/core/IconButton";
  // import InputLabel from "@material-ui/core/InputLabel";
  // import VisibilityIcon from "@mui/icons-material/Visibility";
  // import { InputAdornment } from "@mui/material";
  // import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
  // import Input from "@material-ui/core/Input";
  // import {Login} from "src/utility/apiService";
  // import { RoleMenuAccessContext } from "src/context/roleMenuContext";
  // import CustomButton from "src/custom/Button";
  import { CButton, CFormInput, CFormSwitch } from "@coreui/react";
  import { toast, Toaster } from "react-hot-toast";
  import { TextField } from "@material-ui/core";
  import image from "../../../assets/images/thumb-bg.png";
  import { getUser, studentcreate, userLogin } from "src/utility/apiService";
  import fatculty from "../../../context/fatculty";
  // import Regsiter from '../regsiter/reg'
  function Regsiter({setShow,show}) {
    let navigate = useNavigate();
    const bgForm = useColorModeValue("white", "navy.800");
   
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cls, setCls] = useState("");
  
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const Access=useContext(fatculty)
  // console.log(password);
  const handleSubmit = async(e) => {
    e.preventDefault();
    let res = await studentcreate({name,email,password,class:"A"})
    if(!res.ok) {
      return alert(res.data.message) 
    }else{
       alert(res.data.message) 
    }
  }
    // console.log(Access);
    return (
      <>
      <Flex
        background="rgb(27, 61, 95)"
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        alignItems="center"
        justifyContent="center"
      >
  
         <img
              src={image}
              className="img-fluid"
              alt="Responsive image"
              style={{height: "50%", width: "28%" ,marginRight:"14%" }}
            /> 
        <Flex
          zIndex="2"
          direction="column"
          w="355px"
          h="auto"
          background="transparent"
          borderRadius="15px"
          margin="0px"
          p="40px"
          mx={{ base: "100px" }}
          m={{ base: "20px", md: "auto" }}
          bg={bgForm}
          boxShadow={useColorModeValue(
            "0px 5px 14px rgba(0, 0, 0, 0.05)",
            "unset"
          )}
        >
          <center>
              <b>
              Regsiter
              </b>
          </center>
          <HStack spacing="15px" justify="center" mb="22px"></HStack>
  
          <FormControl mb="10px">
            <FormLabel ms="4px" fontSize="sm"  fontWeight="normal">
              Name
            </FormLabel>
            <TextField
            fullWidth
              id="exampleFormControlInput1"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {loginemailer && (
              <p
                className="error"
                style={{ paddingLeft: "14px", color: "red", fontSize: "12px" }}
              >
                {" "}
                {loginemailer}
              </p>
            )}
            <FormLabel ms="4px" fontSize="sm"  fontWeight="normal">
              Email
            </FormLabel>
            <TextField
            fullWidth
              id="exampleFormControlInput1"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {loginemailer && (
              <p
                className="error"
                style={{ paddingLeft: "14px", color: "red", fontSize: "12px" }}
              >
                {" "}
                {loginemailer}
              </p>
            )}
            <HStack spacing="15px" justify="center" mb="20px"></HStack>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <TextField
              fullWidth
              // label="Some label"
              // variant="outlined"
              placeholder="Enter Your Password"
              // type={showPassword ? "text" : "password"} // <-- This is where the magic happens
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
  
            {loginpassworder && (
              <p
                className="error"
                style={{ paddingLeft: "14px", color: "red", fontSize: "12px" }}
              >
                {" "}
                {loginpassworder}
              </p>
            )}
            <FormControl display="flex" alignItems="center" mb="4px" mt="4px">
             
              {/* <CFormSwitch id='remember-login'  me='10px' color="info" /> */}
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                fontWeight="normal"
                ml="0.8rem"
              >
              </FormLabel>
            </FormControl>
            {/* <center>
            <Link style={{cursor:"pointer"}}>reg</Link>
            </center> */}
            {/* <button>
             <Regsiter/>
            </button> */}
             <Link style={{cursor:"pointer"}} onClick={()=>setShow(!show)}>  
              Sign In Page   
              </Link>  
            <div className="d-grid">
              <CButton
                color="info"
                onClick={handleSubmit}
                style={{ width: "100%", color: "white", fontWeight: "700" }}
              >
                Sign Up
              </CButton>
            </div>
            {/* </NavLink>  */}
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          ></Flex>
        </Flex>
        <div>
          <Toaster />
        </div>
      </Flex>
      </>
    );
  }
  
  export default Regsiter;
  