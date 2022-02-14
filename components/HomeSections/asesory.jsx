import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Button,
  Flex,
  SimpleGrid,
  Image,
  Avatar,
} from "@chakra-ui/react"

export default function AsesorySection() {
  return (
    <>
      <Box bg="white" w="100%" p={5} color="black">
        <Container maxW={"8xl"}>
          <SimpleGrid columns={2} spacing={12}>
            <Stack
              textAlign={"left"}
              align={"left"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                <Text color={"black.400"}>Asesorías</Text>
              </Heading>
              <Text color={"gray.500"} maxW={"lg"}>
                Acompañamos y colaboramos hacia equipos directivos y de gestión
                mediante un proceso colaborativo basado en una interacción profesional
                orientado a la resolución de dificultades de gestión educativa 
                en establecimientos educacionales para avanzar hacia el logro 
                de los estándares de calidad educativa, así como para las
                estrategias de los proyectos educativos institucionales
                {/* Diseño para la formulación y evaluación de proyectos por medio
                de acciones dirigidas a la reflexión de las organizaciones
                respecto de sus propias necesidades y problemáticas en la
                generación de proyectos de real impacto para mejorar la gestión
                educacional, medioambiental, social y comunitaria */}
              </Text>
              <Stack spacing={6} direction={"row"}>
                <Button
                  colorScheme={"orange"}
                  bg={"orange.400"}
                  _hover={{ bg: "orange.500" }}
                  rounded={"full"}
                  px={6}
                >
                  Leer Más
                </Button>
              </Stack>
              <Flex w={"full"}></Flex>
            </Stack>

            <Stack
              textAlign={"center"}
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
            >
              <Box w={"full"} y={"full"} bg={"white"} overflow={"hidden"}></Box>
              <Box position="" justify={"center"}>
                <Image
                  src={"/images/yellow_hand.svg"}
                  alt={"asesory"}
                />
              </Box>
              {/* <Image src={"/images/kid.jpg"} alt="student"/> */}
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}
