import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const ConnectPartner = () => {
  return (
    <Box w={"90%"} m={"auto"} mt={16}>
      <SimpleGrid
        display={{ base: "block", md: "flex" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        column={2}
      >
        <Box>
          <Text
            fontFamily={"Inter"}
            color={"#000000"}
            fontSize={"12px"}
            fontWeight={600}
            textTransform={"uppercase"}
          >
            Communicate-Share Ideas-Save Time
          </Text>
          <Text
            mt={2}
            fontFamily={"Poppins"}
            fontSize={"36px"}
            fontWeight={600}
            lineHeight={"50px"}
            color={"#2D2D2D"}
          >
            Let’s Connect, to find <br /> your partner!{" "}
          </Text>
          <Text
            mt={2}
            fontFamily={"Inter"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"28px"}
            color={"#677471"}
            noOfLines={{ base: "2", md: "none" }}
          >
            Many of the poses, such as downward dog, upword dog <br /> and the
            plank pose, build upper- body strength. The <br /> standing poses,
            especially if you hold them for several <br /> long breaths{" "}
          </Text>
          <Button
            mt={4}
            width={"170px"}
            height={"60px"}
            bgColor={"#FF5777"}
            _hover={{bgColor:"#FF5777"}}
            fontSize={"18px"}
            fontWeight={700}
            color={"#FFFFFF"}
          >
            Get Started
          </Button>
        </Box>
        <Box mt={{ base: "16", md: "0" }}>
          <Image src={"img/connectpartner.png"} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ConnectPartner;
