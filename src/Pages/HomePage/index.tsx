import { Box } from "@chakra-ui/react";
import bgImage from "../../assets/background.png";
import { Header } from "../../Components/Header";


export const HomePage = () => {
  return (
    <Box
      backgroundImage={bgImage}
      backgroundPosition={"center"}
      backgroundSize="cover"
      h='100vh'
    >
      <Header />
    </Box>
  );
};
