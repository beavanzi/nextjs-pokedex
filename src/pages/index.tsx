import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

import { CenteredContainer, CenteredContent, Title } from "../styles/pages/Home"
import { useTranslation } from "react-i18next"
import { Center, Container, Flex, Heading } from "@chakra-ui/core"
import React from "react"

const Home = ({ locale }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Container height="100vh" maxWidth="100vw" bg="pokemons.yellow.basic">
        <Center height="100%">
          <Flex direction="column" align="center">
            <Heading lineHeight="xl" size="lg" variant="red-with-shadow">
              {t("WELCOME_POKEDEX")}
            </Heading>
            <Image
              quality={100}
              src="/pokemon-logo.png"
              width={360}
              height={120}
            />
            <Flex display="inline-block">
              <Link href="/pokedex" locale={locale}>
                <a>
                  <Image
                    quality={100}
                    src="/pokeball3.png"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </Flex>
          </Flex>
        </Center>
      </Container>
    </div>
  )
}

export default Home
