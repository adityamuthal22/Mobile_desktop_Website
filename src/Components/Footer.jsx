import {
  Box,
  Button,
  Container,
  Input,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="White"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      color={"Black"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      _hover={{
        bg: "White",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const Footer = () => {
  return (
    <Box w={"100%"} m={"auto"} bgColor={"#151615"}>
      <SimpleGrid
        m="auto"
        w={"90%"}
        display={{ base: "block", md: "flex" }}
        pt={12}
      >
        <Box
          color={"#FFFFFF"}
          w={{ base: "100%", md: "50%" }}
          display={"grid"}
          placeItems={"flex-end"}
        >
          <Box w={{ base: "100%", md: "60%" }} m={"auto"}>
            <Text
              fontFamily={"Poppins"}
              textAlign={{ base: "center", md: "start" }}
              fontSize={"18px"}
              fontWeight={400}
              lineHeight={"32px"}
              color={"#FFFFFF"}
            >
              Updates right to your Inbox
            </Text>
            <Box display={"flex"} gap={4} mt={4}>
              <Input
                type="text"
                color={"#FFFFFF"}
                placeholder="Email Address"
              />
              <Button
                h={"40px"}
                w={"116px"}
                bgColor={"#FF5777"}
                color={"FFFFFF"}
                _hover={{ bgColor: "#FF5777" }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          mt={{ base: 8, md: 0 }}
          color={"#FFFFFF"}
        >
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3 }}
            spacing={{ base: 8, md: 4 }}
            textAlign={"center"}
          >
            <Stack align={"justify"}>
              <ListHeader>Our story</ListHeader>
              <Link href={"#"}>FAQ</Link>
              <Link href={"#"}>Contact</Link>
            </Stack>

            <Stack align={"justify"}>
              <ListHeader>Dating</ListHeader>
              <Link href={"#"}>Entertainment</Link>
              <Link href={"#"}>Love</Link>
              <Link href={"#"}>Friends</Link>
            </Stack>

            <Stack align={"justify"}>
              <ListHeader>Chat</ListHeader>
              <Link href={"#"}>Friends</Link>
              <Link href={"#"}>Starngers</Link>
              <Link href={"#"}>Closed Ones</Link>
            </Stack>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      <Box m="auto" w={"90%"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3 }}
            spacing={4}
            color={"#FFFFFF"}
            textAlign={"center"}
          >
            <Box>
              <Text> © datingapp 2022</Text>
            </Box>
            <Box>
              <Text> Privacy policy</Text>
            </Box>
            <Box>
              <Text> Terms of use</Text>
            </Box>
          </SimpleGrid>
          <Stack
            display={{ base: "none", md: "flex" }}
            direction={"row"}
            spacing={6}
          >
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"LinkedIn"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
