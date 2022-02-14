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

export default function ProjectSection() {
  return (
    <>
      <Box bg="#FFFCE3" w="100%" p={5} color="black">
        <Container maxW={"8xl"}>
          <SimpleGrid columns={2} spacing={12}>
            <Stack
              textAlign={"center"}
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
            >
              <Box w={"full"} y={"full"} bg={"white"} overflow={"hidden"}></Box>
              <Box position="" justify={"center"}>
                <Image src={"/images/red_green_tools.svg"} alt={"projects"} />
              </Box>
            </Stack>

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
                <Text color={"black.400"}>Proyectos</Text>
              </Heading>
              <Text color={"gray.500"} maxW={"lg"}>
                Diseño para la formulación y evaluación de proyectos por medio
                de acciones dirigidas a la reflexión de las organizaciones
                respecto de sus propias necesidades y problemáticas en la
                generación de proyectos de real impacto para mejorar la gestión
                educacional, medioambiental, social y comunitaria
              </Text>
              <Stack spacing={6} direction={"row"}>
                <Button rounded={"full"} px={6}>
                  Leer Más
                </Button>
              </Stack>
              <Flex w={"full"}></Flex>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}
