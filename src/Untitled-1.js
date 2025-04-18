import { cilArrowCircleLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer } from "@coreui/react";
import { Button } from "@material-ui/core";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Row, Col, Input, FormGroup, Label, Card } from "reactstrap";
import CustomSelect from "src/components/CustomSelect";
import { createFoodRequest, getAllFoodCategory, getAllFoodshop } from "src/utility/apiService";
import FoodTable from "./food" ;
import Shop from "./Shop";
import AllRequest from "./FoodView/index";
import "./Styles.scss"

const FoodRequest = (props) => {
  const { open, setOpen } = props;
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [shop, setShop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedShopName, setSelectedShopName] = useState("");
  const [time, setTime] = React.useState(new Date());
  const [tokenTime,setTokenTime]= React.useState('')
  const toggleShow = () => {
    setModal1(!modal1);
  };

  
  const [localTime,setLocalTime]= React.useState('')
  let today = new Date();
  let currentTime = today.getHours()
  const toggle = () => {
    setOpen(!open);
  };
  const [meal, setMeal] = useState([]);

  const [shopName, setShopName] = useState([]);

  const getCategory = async () => {
    let response = await getAllFoodCategory();
    try {
      if (response.ok) {
        setMeal(
          response.data?.data?.map((i, index) => {
            return {
              label: i.foodcategory,
              value: i.foodcategory,
              id: i._id,
            };
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getShop = async () => {
    let response = await getAllFoodshop();
    let typeOfHotel = [];
    response.data?.data?.filter((i) => {
      if (selectedCategory?.value === i.categoryId?.foodcategory) {
        typeOfHotel.push({ label: i.shopName, value: i.shopName, id: i._id });
      }
    });
    return setShopName(typeOfHotel);
  };

  const getTime=()=>{
    if(currentTime < "11"){
      setTokenTime("BreakFast")
    }
    else if(currentTime>"11"){
      setTokenTime("Lunch")
    }
    if(currentTime>"15"){
      setTokenTime("Eveing")
    }
    

  }
  const handelSubmit=async()=>{
    let obj= {categoryId:selectedCategory?.id,shopId:selectedShopName?.id,mealType:tokenTime,status:"Pending"}
    let response = await createFoodRequest(obj)
    try {
      if(response.ok){
        toast.success(response.data?.message)
        setModal(!modal)
      }
      else toast.error("Sorry "+""+response.data?.message)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getShop();
    getCategory();
    setInterval(() => {
      setTime(new Date());
      setLocalTime(time.toLocaleString("en-US",{timeStyle:"medium",hour12:true}))
    }, 1000);
    getTime()
  }, [selectedCategory, shop,currentTime]);
  return (
    <div
      style={{
        width: "95%",
        minHeight: "calc(100vh - 190px)",
        backgroundColor: "white",
        borderRadius: "20px",
        position: "absolute",
        top: 0,
      }}
      className={"mainbox"}
    >
     { !modal1 ?
 <> {!shop ?(
      <>
        {!modal ? (
        <CContainer style={{ display: "contents",maxHeight:'100%' }}>
          <CIcon
            icon={cilArrowCircleLeft}
            size="xl"
            style={{
              marginTop: "1rem",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
            onClick={toggle}
          />
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginLeft: "3.8rem",
              position: "absolute",
              top: "13px",
            }}changeAction
          >
            Food Request
          </h1>
          <CContainer style={{marginTop:"3rem"}} className={"abc"}>
            <Row style={{justifyContent:"center"}} className={"outbox"}>
              <Col  md={2} className={'box'}>
                <Card className="box-request" onClick={() => setModal(!modal)}>
                  {/* <img src={InterViwe} style={{width:"50px",height:"50px"}} /> */}
                  <Label className="in-box">Request</Label>
                </Card>
              </Col>
              <Col  md={2} className={'box'}>
                <Card className="box-request" onClick={toggleShow}>
                  <Label className="in-box">All Request</Label>
                </Card>
              </Col>
              <Col  md={2} className={'box'}>
                <Card className="box-request" onClick={() => setShop(!shop)}>
                  <Label className="in-box">Create Shop</Label>
                </Card>
              </Col>
            </Row>
          </CContainer>
          <FoodTable/>
        </CContainer>
          ) : (
            <CContainer style={{ display: "contents" }}>
              <CIcon
                icon={cilArrowCircleLeft}
                size="xl"
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => setModal(!modal)}
              />
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginLeft: "3.8rem",
                  position: "absolute",
                  top: "13px",
                }}
              >
                Create Request 
              </h1>
              <Container style={{ position: "absolute", top: "165px" }}>
                <Row className="request">
                  <Col>
                    <Label>Meal Category</Label>
                    <CustomSelect
                      widthForSelect="100%"
                      placeholder={"Select Meal Category"}
                      option={meal}
                      selectedOptions={selectedCategory}
                      setSelectedOptions={setSelectedCategory}
                      isSearchable={true}
                      isMulti={false}
                      star={"*"}
                      // width="300px"
                      required={true}
                    />
                  </Col>
                  <Col>
                    <Label>Shop Name</Label>
                    <CustomSelect
                      widthForSelect="100%"
                      placeholder={"Select Shope Name"}
                      option={shopName}
                      selectedOptions={selectedShopName}
                      setSelectedOptions={setSelectedShopName}
                      isSearchable={true}
                      isMulti={false}
                      star={"*"}
                      // width="300px"
                      required={true}
                    />
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Token Type</Label>
                      <Input
                        style={{ marginTop: "12px" }}
                        disabled
                        value={tokenTime}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  variant="contained"
                  style={{
                    marginRight: "2rem",
                    float: "right",
                    marginTop: "10rem",
                  }}
                  onClick={handelSubmit}
                  color={"primary"}
                >
                  Submit
                </Button>
              </Container>
            </CContainer>
          )}
        </>
    ):(<Shop open={shop} setOpen={setShop} />)}
    </> :<AllRequest open={modal1} setOpen={setModal1}/> }
    <Toaster/>
    </div>
  );
};

export default FoodRequest;

