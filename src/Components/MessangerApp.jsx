import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const MessengerApp = () => {
  const messages = [
    {
      sender: "bot",
      message:
        "Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week 😄",
    },
    {
      sender: "user",
      message:
        "Haha truly! Nice to meet you Grace! What about a cup of coffee today evening? ☕️ ",
    },
    { sender: "bot", message: "Sure, let’s do it! 😊" },
    {
      sender: "user",
      message:
        "Great I will write later the exact time and place. See you soon!",
    },
  ];

  return (
    <Box w={"90%"} m={"auto"} mt={16}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        display={"flex"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent={"space-between"}
        gap={14}
      >
        <Box
          order={{ base: 1, md: 2 }}
          w={{ base: "100%", md: "50%" }}
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={{ base: "center", md: "end" }}
        >
          <Flex flexDirection="column" w={{ base: "90%", md: "80%" }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                bg={"#FF5777"}
                color="white"
                padding="0.5rem 1rem"
                borderRadius="0.5rem"
                borderBottomLeftRadius={
                  message.sender === "user" ? "0.5rem" : "0"
                }
                borderBottomRightRadius={
                  message.sender === "user" ? "0" : "0.5rem"
                }
                alignSelf={
                  message.sender === "user" ? "flex-end" : "flex-start"
                }
                marginBottom="2rem"
                w={{ base: "80%", md: "60%" }}
              >
                <Text>{message.message}</Text>
              </Box>
            ))}
          </Flex>
        </Box>

        <Box order={{ base: 1, md: 2 }} position="relative">
          <Image src={"img/mobile1.png"} />
          <Box
            w={"80%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            position="absolute"
            top={"50%"}
            left={"50%"}
            transform="translate(-50%, -50%)"
            p={4}
            textAlign="center"
          >
            <Text fontWeight={500} fontSize={"24px"}>
              Real-time <br /> team chat for your <br /> product universe
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={4}
            >
              <Box mt={4} maxWidth={"100%"} maxHeight={"100%"}>
                <Image
                  src={"img/mobile2.png"}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Text fontWeight={500} fontSize={"14px"} color={"#C5BBC8"} mt={8}>
              All of your conversations,
              <br /> work items and tools into <br /> one place
            </Text>
            <Button
              h={"47px"}
              w={"262px"}
              borderRadius={"23px"}
              fontSize={"17px"}
              color={"#FFFFFF"}
              fontWeight={600}
              bgColor={"#FF5777"}
              _hover={{ bgColor: "#FF5777" }}
              mt={8}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </SimpleGrid>

      {/* Use Chat For Better Communication  */}
      <Box
        w={"100%"}
        display={{ base: "block", md: "flex" }}
        gap={0}
        spacing={0}
        m={"auto"}
        mt={16}
      >
        <Box
          w={{ base: "100%", md: "30%" }}
          mb={{ base: -36, md: 0 }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {" "}
          <Image src="img/mobile3.png" />
        </Box>
        <Box
          w={{ base: "100%", md: "70%" }}
          display={{ base: "block", md: "grid" }}
          placeItems={"center"}
        >
          <Box
            w={"100%"}
            m={"auto"}
            p={{ base: "4", md: "24" }}
            bgGradient={
              "linear-gradient(269.92deg, #B281FF 21.16%, #8638FF 99.93%)"
            }
          >
            <Box w={"80%"} m={"auto"} mt={{ base: 44, md: 0 }}>
              <Text
                fontFamily={"Inter"}
                color={"#FFFFFF"}
                fontSize={"12px"}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Communicate-Share Ideas-Save Time
              </Text>
              <Text
                mt={8}
                fontFamily={"Inter"}
                fontSize={{ base: "24px", md: "36px" }}
                fontWeight={700}
                lineHeight={{ base: "34px", md: "50px" }}
                color={"#FFFFFF"}
              >
                Use Chat For Better Communication{" "}
              </Text>
              <Text
                mt={4}
                fontFamily={"Inter"}
                fontSize={"14px"}
                fontWeight={500}
                lineHeight={"24px"}
                color={"#FFFFFF"}
              >
                Many of the poses, such as downward dog, upword dog and the
                plank pose, build upper- body strength. The standing poses,
                especially if you hold them for several long breaths{" "}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MessengerApp;
