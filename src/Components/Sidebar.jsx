import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Links = [
  "img/home.png",
  "img/cards.png",
  "img/indicator.png",
  "img/message.png",
  "img/people.png",
];

const Sidebar = () => {
  const displaySidebar = useBreakpointValue({ base: "none", md: "block" });
  
  return (
    <Box>

    {/* Desktop Side bar */}
    <Box
      w={"100px"}
      bg="#151615"
      h="100vh"
      position={"fixed"}
      top={0}
      left={0}
      display={displaySidebar}
    >
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        gap={"90px"}
        my={16}
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

export default Sidebar;
