import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CardComponent from "./CardComponent";
import VideoApp from "./VideoApp";
import ExploreCard from "./ExploreCard";
import ConnectPartner from "./ConnectPartner";
import MessangerApp from "./MessangerApp";
import DatingApp from "./DatingApp";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box>
      <Box display={"flex"} w={"100%"} m="auto">
        <Box w={{base:"none",md:"7%"}} >
        <Sidebar />
        </Box>
        <Box w="93%" style={{ flex: 1 }}>
          <Navbar />
          <CardComponent />
          <VideoApp />
          <ExploreCard />
          <ConnectPartner />
          <MessangerApp />
          <DatingApp />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
