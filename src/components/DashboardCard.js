import "./profileCard.css";

import { Flex, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react";

import {  cilCalendar } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const DashboardCard = ({ header, logo, value ,bgColorIcon}) => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");
return (
  <Flex
    borderRadius="20px"
    bg={boxBg}
    p="20px"
    h="auto"
    alignSelf="center"
    margin="1%"
    className="dashCardContainer"
    marginBottom="25px"
    alignItems="center"
    direction="column"
  >
    <Flex
      flexDirection="row"
      mb="30px"
      alignItems="flex-end"
      width="98%"
      justify="space-between"
    >
      <Text fontWeight="600" color={mainText} fontSize="l" textAlign="left">
        {header}
      </Text>

      <Flex
        src=""
        border="5px solid red"
        borderColor={boxBg}
        width="90px"
        height="90px"
        mt="-50"
        backgroundColor={bgColorIcon}
        borderRadius="25%"
        alignItems={"center"}
        justifyContent={"center"}
      >
        
        <CIcon icon={cilCalendar} style={{alignItems:"center",width:"40px",height:"40px",color:"white"}} customClassName="nav-icon" />
      </Flex>
    </Flex>
    <Flex justify="space-between" w="100%" px="36px">
      <Flex flexDirection="column">
        <Text
          fontWeight="600"
          color={mainText}
          fontSize="m"
          textAlign="center"
        >
          {value}
        </Text>
      </Flex>
    </Flex>
  </Flex>
);
};

export default DashboardCard;
