import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Carol from "../../assets/carolLogo.png";

export const AboutMe = () => {
  return (
    <Container
      maxW="4xl"
      display={"flex"}
      flexDir="column"
      p="2rem 0"
      gap="2rem"
    >
      <Flex justify={"flex-start"}>
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
          letterSpacing={"1image.pngpx"}
          color={"fontColor-secundary"}
          textTransform="uppercase"
        >
          Quem Sou
        </Heading>
      </Flex>
      <Flex
        align={{ base: "center", lg: " flex-start" }}
        flexDir={{ base: "column", lg: "row" }}
        p={{base: '2rem 0', lg: '3rem 0'}}
        gap="3rem"
        w="100%"
      >
        <Image src={Carol} w="270px" />
        <Container maxW="5xl">
          <VStack fontFamily="Montserrat" alignItems={"flex-start"}>
            <Text>
              Pra quem não sabe, meu nome é Ana Carolina e tenho 27 anos!
            </Text>
            <Text>
              Fonodiologa Formada pela USP Ribeirão Preto. Especialista em
              Reabilitação Física pela FAMERP - SJRP. Pós-graduada em Fala e
              Linguagem pela Unyleya. Aprimoranda em Reabilitação da Disfagia
              Pediátrica pela Sapper
            </Text>
            <Text>
              Hoje, a minha missão é auxiliar mamães, familiares e colegas de
              profissão a terem autonomia e clareza sobre o assunto alimentação
              infantil, de bebês de 0 a 2 anos.
            </Text>
          </VStack>
        </Container>
      </Flex>
    </Container>
  );
};
