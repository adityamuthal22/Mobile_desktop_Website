import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const DatingApp = () => {
  return (
    <Box w={"80%"} m={"auto"} mt={12}>
      <SimpleGrid
        column={2}
        display={{ base: "block", md: "flex" }}
        justifyContent={"space-around"}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          display={"grid"}
          placeItems={"center"}
        >
          <Box w={{ base: "70%", md: "65%" }} m={"auto"}>
            <Text height={"45px"} w="61px">
              <RiDoubleQuotesL style={{ fontSize: "60px" }} />
            </Text>
            <Text
              mt={8}
              fontFamily={"Inter"}
              fontSize={"18px"}
              fontWeight={{ base: 600, md: 500 }}
              lineHeight={"32px"}
              color={"#2D2D2D"}
            >
              We love using 'Dating App' its awesome. Environmentally friendly
              and sustainable. We have got friends and regularly use the
              application which were all such great value for money. This is
              Flawesome ”
            </Text>
            <Box display={"flex"} w="100%">
              <Text
                mt={{ base: 4, md: 10 }}
                fontFamily={"Inter"}
                fontSize={"18px"}
                fontWeight={400}
                lineHeight={"32px"}
                color={"#2D2D2D"}
                w="50%"
              >
                Aruna Kaur
              </Text>
              <Box display={{ base: "none", md: "block" }} w="50%" mt={8}>
                <Image src="/img/Arrow1.png" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "50%" }} mt={{ base: 10, md: 0 }}>
          <Image src={"img/WomenImage.png"} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default DatingApp;
