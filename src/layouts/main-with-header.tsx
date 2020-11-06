import { useTranslation } from "react-i18next"
import { Container, Flex } from "@chakra-ui/core"
import React from "react"
import Header from "../components/Header"

const LayoutMain: React.FC = ({ children }) => {
  const { t } = useTranslation()

  return (
    <Flex minH="100vh" direction="column">
      <Header
        bg="pokemons.blue.basic"
        options={[
          { label: t("LABEL_HOME"), link: "/" },
          { label: t("LABEL_POKEDEX"), link: "/pokedex" },
        ]}
      />
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        maxWidth="100vw"
        bg="pokemons.yellow.basic"
      >
        {children}
      </Container>
    </Flex>
  )
}

export default LayoutMain
