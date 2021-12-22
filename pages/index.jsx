import Layout from "../components/layout"
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
import { getAllFilesFrontMatter } from "../lib/mdx"
import NextLink from "next/link"
import { Fragment } from "react"

export default function Home({ posts }) {
  return (
    <Layout>
      <Fragment>
        <div>
          <main>
            <Box bg="white" w="100%" p={5} color="">
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
                      <Text color={"black.400"}>Corporación Educacional </Text>
                      <Text as={"span"} color={"orange.400"}>
                        Paulo Freire
                      </Text>
                    </Heading>
                    <Text color={"gray.500"} maxW={"lg"}>
                      Educar para los nuevos desafíos, liderazgo, desarrollo
                      sostenible y para ser protagonistas
                    </Text>
                    <Stack spacing={6} direction={"row"}>
                      <Button
                        rounded={"full"}
                        px={6}
                        colorScheme={"orange"}
                        bg={"orange.400"}
                        _hover={{ bg: "orange.500" }}
                      >
                        Leer Más
                      </Button>
                      <Button rounded={"full"} px={6}>
                        Contáctanos
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
                    <Box w={"full"} y={"full"} bg={"white"} overflow={"hidden"}>
                      <Image
                        objectFit="cover"
                        src={"/images/background_blob.svg"}
                        alt="bblob"
                        pt={'3'}
                      />
                    </Box>
                    <Box position="absolute"  justify={"center"}>
                      <Image
                        boxSize={'390'}
                        objectFit="cover"
                        src={"/images/kid.jpg"}
                        alt={"Author"}
                        borderRadius={'md'}
                      />
                    </Box>
                    {/* <Image src={"/images/kid.jpg"} alt="student"/> */}
                  </Stack>
                </SimpleGrid>
              </Container>
            </Box>
            <Box bg="#FFFCE3" w="100%" p={5} color="white"></Box>
            {/*  <h1 className="title">
              BLOG
            </h1>

            <p className="description">
              Corporación Educacional Paulo Freire
            </p>

            <div className="grid">
              {posts.map( post => (
                <NextLink href={`/${post.slug}`} key={post.slug}>
                  <a>
                    <h2> {post.title} &rarr;</h2>
                    <p> {post.date} </p>
                  </a>            
                </NextLink>
              ))}
            </div> */}
          </main>
        </div>
      </Fragment>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts")
  console.log(posts)
  return {
    props: { posts },
  }
}
