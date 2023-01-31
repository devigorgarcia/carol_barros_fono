import { Box, Flex } from "@chakra-ui/react";
import bgImage from "../../assets/background.png";
import { AboutMe } from "../../Components/AboutMe";
import { Header } from "../../Components/Header";

export const HomePage = () => {
  return (
    <Flex
      flexDir={"column"}
      backgroundImage={bgImage}
      backgroundPosition={"center"}
      backgroundSize="cover"
      gap="2rem"
    >
      <Header />
      <AboutMe />
    </Flex>
  );
};
