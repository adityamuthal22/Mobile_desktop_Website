import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardComponent = () => {
  return (
    <Box w={"90%"} m={"auto"}>
      <Box
        display={"flex"}
        justifyContent={{ base: "end", md: "space-between" }}
        mt={3}
        ml={"30px"}
      >
        <Box
          // visibility={{ base: "hidden", md: "visible" }}
          display={{ base: "none", md: "block" }}
          h={"185px"}
          w={"156px"}
          bgColor={"#F1F6F6"}
          borderRadius={"30px"}
          textAlign={"center"}
        >
          <Image m={"auto"} mt={"-15px"} src="img/johnimg.png" />
          <Text
            textTransform={"uppercase"}
            fontSize={"18px"}
            fontWeight={500}
            mt={4}
          >
            John <span style={{ color: "#4FC27E" }}>Carter</span>
          </Text>
          <Text fontSize={"16px"} mt={2} fontWeight={400} color={"#999999"}>
            Near <span style={{ color: "#000000" }}> 2.1</span> Miles
          </Text>
          <Text
            borderRadius={"36px"}
            m={"auto"}
            mt={4}
            w={"128px"}
            py={1}
            fontSize={"16px"}
            fontWeight={700}
            color={"#FF7E88"}
            border={"2px solid rgba(0, 0, 0, 0.05)"}
          >
            Say Hello
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={["start", "start", "start", "flex-end", "flex-end"]}
        >
          <Image
            h={["30px", "30px", "50px", "50px", "50px"]}
            src="img/Group4.png"
          />
        </Box>
      </Box>

      {/* Cards Start */}

      <Box
        display={{ base: "block", md: "flex" }}
        w={"80%"}
        m={"auto"}
        mt={{ base: 6, md: 0 }}
        gap={{ base: "30px", md: "53px" }}
      >
        <Box
          transform={{ base: "rotate(20deg)", md: "none" }}
          transition={{ base: "none", md: "transform 0.3s" }}
          width={{ base: "50%", md: "100%" }}
          ml="auto"
        >
          <Image src="img/card1.png" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ base: "space-evenly", md: "space-around" }}
            mt={4}
          >
            <Box>
              <Image src="img/dislike.png" />
            </Box>
            <Box>
              <Image src="img/heart.png" />
            </Box>
            <Box p={2} borderRadius={"50%"} bgColor={"#8A2387"}>
              <Image src="img/star.png" />
            </Box>
          </Box>
        </Box>
        <Box
          transform={{ base: "rotate(-20deg)", md: "none" }}
          transition={{ base: "none", md: "transform 0.3s" }}
          width={{ base: "50%", md: "100%" }}
          mr="auto"
          mt={{ base: -40, md: 0 }}
          right={0}
        >
          <Image src="img/card2.png" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ base: "space-evenly", md: "space-around" }}
            mt={4}
          >
            <Box>
              <Image src="img/dislike.png" />
            </Box>
            <Box p={3} borderRadius={"50%"} bgColor={"#E94057"}>
              <Image src="img/whiteHeart.png" />
            </Box>
            <Box>
              <Image src="img/purpleStar.png" />
            </Box>
          </Box>
        </Box>
        <Box
          width={{ base: "50%", md: "100%" }}
          transform={{ base: "rotate(30deg)", md: "none" }}
          transition={{ base: "none", md: "transform 0.3s" }}
          ml="auto"
          mt={{ base: -40, md: 0 }}
        >
          <Image src="img/card3.png" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ base: "space-evenly", md: "space-around" }}
            mt={4}
          >
            <Box p={4} borderRadius={"50%"} bgColor={"#F27121"}>
              <Image src="img/whiteDislike.png" />
            </Box>
            <Box>
              <Image src="img/heart.png" />
            </Box>
            <Box>
              <Image src="img/purpleStar.png" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        m={"auto"}
        justifyContent={"space-between"}
      >
        <Box>
          <Image src="img/HiEmoji.png"></Image>
        </Box>
        <Box mt={4}>
          <Image src="img/heartEmoji.png"></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default CardComponent;
