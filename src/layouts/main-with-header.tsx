import { useTranslation } from "react-i18next"
import { Container } from "@chakra-ui/core"
import React from "react"
import Header from "../components/Header"

const LayoutMain: React.FC<{ children: any }> = ({ children }) => {
  const { t } = useTranslation()

  return (
    <>
      <Header
        bg="pokemons.blue.basic"
        options={[
          { label: t("LABEL_HOME"), link: "/" },
          { label: t("LABEL_POKEDEX"), link: "/pokedex" },
        ]}
      />
      <Container height="100vh" maxWidth="100vw" bg="pokemons.yellow.basic">
        {children}
      </Container>
    </>
  )
}

export default LayoutMain
