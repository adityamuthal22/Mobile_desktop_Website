import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const VideoApp = () => {
  return (
    <Box w={"90%"} m={"auto"} mt={8}>
      <Text
        fontWeight={600}
        textAlign={{ base: "center", md: "start" }}
        fontSize={{ base: "20px", md: "32px" }}
        color={{ base: "#000000", md: "#30323A" }}
      >
        How to use this App?
      </Text>
      <Box
        w={{ base: "350px", md: "768px" }}
        h={{ base: "200px", md: "447.51px" }}
        border={{ base: "none", md: "8px solid #FF5777" }}
        borderRadius={"34px"}
        m={"auto"}
        mt={8}
      >
        <video
          src="img/AppVideo.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "26px",
          }}
          controls
        >
          <source src="img/AppVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box m={"auto"} w={"768px"} display={{ base: "none", md: "block" }}>
        <Image m={"auto"} src="img/Videostand.png"></Image>
      </Box>

      {/* Meet with just one Click */}
      <Box
        w={"80%"}
        m={"auto"}
        mt={16}
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        mb={8}
      >
        <Box
          px={16}
          py={8}
          _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          borderRadius={"10px"}
        >
          <Image boxSize={"100px"} src="img/Thumb1.png" />
          <Text
            fontWeight={600}
            fontSize={"18px"}
            textAlign={"center"}
            mt={8}
            color={"#30323A"}
          >
            {" "}
            Meet With Just <br /> One Click
          </Text>
        </Box>
        <Box
          px={16}
          py={8}
          _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          borderRadius={"10px"}
        >
          <Image boxSize={"100px"} src="img/Insta1.png" />
          <Text
            fontWeight={600}
            fontSize={"18px"}
            textAlign={"center"}
            mt={8}
            color={"#30323A"}
          >
            Connect with <br /> social media{" "}
          </Text>
        </Box>
        <Box
          px={16}
          py={8}
          _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          borderRadius={"10px"}
        >
          <Image boxSize={"100px"} src="img/Location1.png" />
          <Text
            fontWeight={600}
            fontSize={"18px"}
            textAlign={"center"}
            mt={8}
            color={"#30323A"}
          >
            Connect From <br /> Anywhere
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoApp;
