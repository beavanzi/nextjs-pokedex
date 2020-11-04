import { Button } from "@chakra-ui/core"
import { GetStaticProps } from "next"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useFetch } from "../hooks/useFetch"
import {
  ListItem,
  CenteredContainer,
  WrapContainer,
} from "../styles/pages/Pokedex"
import { PokemonEntry, Pokemons } from "../types/pokemons"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { locale },
  }
}

const Home = ({ locale }) => {
  const { t } = useTranslation()
  const { data, error } = useFetch<Pokemons, any>(
    "https://pokeapi.co/api/v2/pokedex/2/"
  )

  if (!data) {
    return <p> Carregando </p>
  }
  const { pokemon_entries: pokemons } = data

  return (
    <CenteredContainer>
      <Button variant="blue-with-shadow">
        <Link href="/" locale={locale}>
          <a>{t("GO_TO_HOME")}</a>
        </Link>
      </Button>
      <WrapContainer>
        {pokemons.map((pokemon: PokemonEntry) => (
          <ListItem key={pokemon.entry_number}>
            {pokemon.pokemon_species.name}
          </ListItem>
        ))}
      </WrapContainer>
    </CenteredContainer>
  )
}

export default Home
