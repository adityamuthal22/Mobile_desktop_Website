import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ExploreData = [
  {
    image: "img/explore1.png",
    text1: "Free for Tonight ?",
    text2: "Discover Now",
  },
  {
    image: "img/explore2.png",
    text1: "Looking for Love ?",
    text2: "Discover Now",
  },
  {
    image: "img/explore3.png",
    text1: "You wanna date?",
    text2: "Discover Now",
  },
  {
    image: "img/explore4.png",
    text1: "Let’s Catchup Now",
    text2: "Discover Now",
  },
  {
    image: "img/explore5.png",
    text1: "Find the best events!",
    text2: "Discover Now",
  },
  {
    image: "img/explore6.png",
    text1: "Travel this World :-)",
    text2: "Discover Now",
  },
];

const ExploreCard = () => {
  return (
    <Box w={"90%"} m={"auto"} mt={8}>
      <Box
        display={"flex"}
        justifyContent={{ base: "center", md: "space-between" }}
        mb={8}
      >
        <Text
          fontWeight={600}
          fontSize={{ base: "20px", md: "32px" }}
          color={{ base: "#FFFFFF", md: "#30323A" }}
          bgGradient={{
            base: "linear-gradient(180deg, #4400D3 0%, #FF5777 100%)",
            md: "none",
          }}
          bgClip={["text", "unset"]}
        >
          Let’s Explore the World
        </Text>
        <Button
          display={{ base: "none", md: "inline-flex" }}
          bgColor={"#FF5777"}
          _hover={{ bgColor: "#FF5777" }}
          h={"50px"}
          w={"140px"}
          color={"#FFFFFF"}
          fontSize={"18px"}
          fontWeight={700}
        >
          Explore
        </Button>
      </Box>

      {/* Explore Card start */}
      <Box>
        {/* Desktop View */}
        <Box display={{ base: "none", md: "block" }}>
          <SimpleGrid columns={3} spacing={20} mt={10}>
            {ExploreData.map((el, index) => (
              <Box key={index} position="relative">
                <Image w="300px" h="340px" src={el.image} />
                <Box position="absolute" bottom="30px" left="20px">
                  <Text color="#FFFFFF" fontSize="24px" fontWeight={500}>
                    {el.text1}
                  </Text>
                  <Text color="#FFC247" fontSize="14px" fontWeight={400}>
                    {el.text2}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Mobile View */}
        <Box display={{ base: "block", md: "none" }}>
          <Carousel
            showStatus={false}
            showThumbs={false}
            showArrows
            infiniteLoop
            swipeable
            emulateTouch
            autoPlay
            interval={3000}
            style={{ marginTop: 10 }}
          >
            {ExploreData.map((el, index) => (
              <Box key={index} position="relative" display={"flex"} gap={"10px"}>
                <Image w="100%" h="440px" src={el.image} />
                <Box
                  position="absolute"
                  bottom="30px"
                  left="22px"
                  textAlign={"start"}
                >
                  <Text
                    color="#FFFFFF"
                    fontSize={{ base: "34px", md: "24px" }}
                    fontWeight={500}
                  >
                    {el.text1}
                  </Text>
                  <Text
                    color="#FFC247"
                    fontSize={{ base: "24px", md: "14px" }}
                    fontWeight={400}
                  >
                    {el.text2}
                  </Text>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default ExploreCard;
