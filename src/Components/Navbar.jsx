import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, LockIcon, AddIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Links = ["Home", "Home it works", "Features", "Pricing"];

const navLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={"/"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Box px={4} w={"98%"}>
        <Flex
          h={16}
          justify={[
            "space-between",
            "space-between",
            "flex-end",
            "flex-end",
            "flex-end",
          ]}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            mt={2}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex alignItems={"center"} gap="40px">
            <HStack
              as={"nav"}
              spacing={4}
              fontWeight={500}
              color={"#757881"}
              display={{ base: "none", md: "flex" }}
              gap="45px"
            >
              {Links.map((link) => (
                <navLink key={link}>{link}</navLink>
              ))}
            </HStack>

            <Box display="flex" flexDirection="row" gap={10}>
              <Button
                borderRadius="4px"
                component={NavLink}
                to="/login"
                w="full"
                color={"#30323A"}
                fontSize={"16px"}
                fontWeight={700}
              >
                {isMobile ? <LockIcon boxSize={3} /> : null}
                {!isMobile && "Log In"}
              </Button>

              <Button
                bg="#ff5777"
                borderRadius="4px"
                _hover={{ bg: "#ff5777" }}
                component={NavLink}
                to="/signup"
                w="full"
                fontSize={"16px"}
                color={"white"}
                fontWeight={700}
              >
                {isMobile ? <AddIcon boxSize={3} /> : null}
                {!isMobile && "Signup"}
              </Button>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
