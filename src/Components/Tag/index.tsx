import { Heading } from "@chakra-ui/react";
import { IChildrenProps } from "../../Interfaces";

export const TagTitle = ({ children }: IChildrenProps) => {
  return (
    <Heading
      bg="#e2c9b4"
      border="1px solid #e9c8ad"
      borderTopRightRadius={"40px"}
      borderBottomRightRadius={"40px"}
      p="0.2rem 2rem"
      textAlign={"right"}
      fontFamily={"Roboto, sans-serif"}
      fontWeight="900"
      size="lg"
      w="300px"
      letterSpacing={"1px"}
      color={"fontColor-secundary"}
      textTransform="uppercase"
      boxShadow={"5px 5px 15px 1px #0000006c"}
    >
      {children}
    </Heading>
  );
};
