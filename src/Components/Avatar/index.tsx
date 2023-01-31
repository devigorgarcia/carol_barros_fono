import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Butterfly from "../../assets/butterfly.png";
import { IAvatarProps } from "../../Interfaces";

export const Avatar = ({
  img,
  title,
  subTitle,
  titlePos,
  subTitlePos,
  butterflyPosX,
  butterflyPosY,
  marginBottom,
}: IAvatarProps) => {
  return (
    <Box>
      <Flex
        flexDir={"column"}
        align="center"
        pos={"relative"}
        mb={marginBottom}
      >
        <Box
          w="200px"
          bg="bg-red"
          p="0 0.5rem"
          pos={"absolute"}
          bottom={titlePos}
          transform={"rotate(-2deg)"}
          zIndex={1}
          rounded={"2px"}
          boxShadow="0px 4px 6px -1px rgba(0,0,0,0.75)"
        >
          <Text
            color="white"
            fontSize={"30px"}
            letterSpacing="1px"
            lineHeight={"38px"}
            fontFamily={"Dancing Script, cursive"}
            textAlign="center"
            fontWeight={"bold"}
            position="relative"
          >
            {title}
          </Text>
          <Image
            right={butterflyPosX}
            bottom={butterflyPosY}
            position={"absolute"}
            src={Butterfly}
            zIndex="2"
          />
        </Box>
        <Box
          w="250px"
          bg="#e2d2c5"
          p="0 0.5rem"
          pos={"absolute"}
          bottom={subTitlePos}
          rounded={"2px"}
          lineHeight={"38px"}
          boxShadow="0px 0px 6px -1px rgba(0,0,0,0.75)"
        >
          {subTitle && (
            <Text
              fontSize={"30px"}
              fontFamily={"Amatic SC, cursive"}
              textTransform="uppercase"
              pt="0.5rem"
              letterSpacing={"1px"}
              textAlign="center"
            >
              {subTitle}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
