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

export default function CapacitationSection(){
    return(
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
                    <Box w={"full"} y={"full"} bg={"white"} overflow={"hidden"}>
                    
                    </Box>
                    <Box position=""  justify={"center"}>
                      <Image
                        src={"/images/purple_ticket.svg"}
                        alt={"capacitation"}
                      />
                    </Box>
                    {/* <Image src={"/images/kid.jpg"} alt="student"/> */}
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
                      <Text color={"black.400"}>Capacitación</Text>
                    </Heading>
                    <Text color={"gray.500"} maxW={"lg"}>
                      Buscamos contribuir para distintos actores de 
                      establecimientos educacionales, diversas instancias formativas que permitan 
                      la adquisición y aplicación del conocimiento, las habilidades y actitudes necesarias 
                      para la mejora en su desarrollo profesional docente y directivo
                    </Text>
                    <Stack spacing={6} direction={"row"}>
                      <Button  rounded={"full"} px={6}>
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