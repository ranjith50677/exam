import "./profileCard.css";
import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

const profilecard = ({ user,designation }) => {
    let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");
  return (
    <Flex
      borderRadius="20px"
      bg={boxBg}
      p="20px"
      h="fit-content"
      margin="1%"
      marginBottom="25px"
      className="profileContainer"
    //   w={{ base: "315px", md: "345px" }}
      alignItems="center"
      direction="column"
    >
      <Image
        src="https://i.ibb.co/xmP2pS6/Profile.png"
        w="100%"
        width="100%"
        borderRadius="20px"
      />
      <Flex flexDirection="column" mb="1px">
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png"
          border="5px solid red"
          mx="auto"
          borderColor={boxBg}
          width="100px"
          height="100px"
          mt="-50px"
          borderRadius="50%"
        />
        <Text
          fontWeight="600"
          color={"#264D73"}
          textAlign="center"
          fontSize="l"
          mb="1" 
        >
          {user?.firstName+" "+user?.lastName}
        </Text>
        <Text
          color={"#267bd9"}
          textAlign="center"
          fontSize="m"
          fontWeight="600"
          mb="1" 
        >
          {user?.isOwner?"Owner":designation?.designation ? designation?.designation:"Does not get desgination"}
        </Text>
      </Flex>
      <Flex justify="center" w="100%" px="36px">
        <Flex flexDirection="column">
          <Text
            fontWeight="600"
            color={"#264D73"}
            fontSize="m"
            textAlign="center"
            mb="1" 
          >
            {user?.email}
          </Text>
          <Text color={"#267bd9"} mb="1" textAlign="center" fontSize="l" fontWeight="500">
            {user?.mobileNo}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default profilecard;
