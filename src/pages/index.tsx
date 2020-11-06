import NextLink from "next/link"
import Image from "next/image"
import Head from "next/head"

import { useTranslation } from "react-i18next"
import { Center, Flex, Heading, Link } from "@chakra-ui/core"
import RotateContainer from "../components/styled/RotateContainer"
import LayoutMain from "../layouts/main-with-header"

const Home = ({ locale }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <LayoutMain>
        <Center height="100%">
          <Flex direction="column" align="center" justifyContent="center">
            <Heading lineHeight="xl" size="lg" variant="red-with-shadow">
              {t("WELCOME_POKEDEX")}
            </Heading>
            <Image
              quality={100}
              src="/pokemon-logo.png"
              width={360}
              height={120}
            />
            <RotateContainer>
              <NextLink href="/pokedex" locale={locale} passHref>
                <Link>
                  <Image
                    quality={100}
                    src="/pokeball3.png"
                    width={50}
                    height={50}
                  />
                </Link>
              </NextLink>
            </RotateContainer>
          </Flex>
        </Center>
      </LayoutMain>
    </div>
  )
}

export default Home
