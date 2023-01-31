import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import ebook from "../../assets/book-3610618_1920.jpg";
import { Avatar } from "../Avatar";
import Butterfly from "../../assets/butterfly.png";

export const Ebook = () => {
  return (
    <Container
      maxW="4xl"
      display={"flex"}
      flexDir="column"
      p="2rem 0"
      gap="2rem"
    >
      <Box
        border={"2px dashed #A66D6D"}
        m="0 1rem"
        p="2rem"
        position={"relative"}
      >
        <Flex
          align={{ base: "center", lg: " flex-start" }}
          flexDir={{ base: "column", lg: "row" }}
          p={{ base: "2rem", lg: "3rem" }}
          gap="6rem"
          w="100%"
        >
          <Box position={"absolute"} top="-40px">
            <Avatar
              title="Ebook"
              subTitle="Introdução Alimentar - orientações"
              img={ebook}
              titlePos="0"
              subTitlePos="-80px"
              butterflyPosY="20px"
              butterflyPosX="2px"
            />
          </Box>
          <Image
            right="-4"
            bottom="-5"
            position={"absolute"}
            src={Butterfly}
            zIndex="2"
          />
          <Flex pl={{ base: 0, lg: "4rem" }} align={"center"} justify="center">
            <Text>
              O objetivo desse e-book, é ajudar você profissional da saúde que
              trabalha com introdução alimentar, a ter segurança na hora de
              orientar as famílias e a passar a sua mensagem da forma mais clara
              possível. As famílias que desejarem adquirir, serão bem vindas
              também! Mas caso o seu bebê já tenha sido ou seja meu paciente, me
              manda uma mensagem que disponibilizo o material como presente pra
              você!
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};
