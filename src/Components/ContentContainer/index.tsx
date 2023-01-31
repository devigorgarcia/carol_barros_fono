import { Flex } from "@chakra-ui/react";
import { IChildrenProps } from "../../Interfaces";

export const ContentContainer = ({ children }: IChildrenProps) => {
  return (
    <Flex
      align={{ base: "center", lg: " flex-start" }}
      flexDir={{ base: "column", lg: "row" }}
      p={{ base: "2rem", lg: "3rem" }}
      gap="3rem"
      w="100%"
    >
      {children}
    </Flex>
  );
};
