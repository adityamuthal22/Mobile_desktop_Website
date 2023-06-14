import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Links = [
  "img/card4.png",
  "img/indicator2.png",
  "img/message2.png",
  "img/people2.png",
];

const MobileSideBar = () => {
  const displayMobileSidebar = useBreakpointValue({
    base: "block",
    md: "none",
  });
  return (
    <Box w={"100%"} m={"auto"}>
      <Box h={"60px"} bg=" #F3F3F3" m={"auto"} display={displayMobileSidebar}>
        <Flex
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          gap={"60px"}
          mx={4}
          py={4}
        >
          {Links.map((link, index) => (
            <Image
              height="21px"
              width={"26px"}
              key={index}
              src={link}
              boxSize={6}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default MobileSideBar;
