import { GetStaticProps } from "next"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import {
  ListItem,
  CenteredContainer,
  WrapContainer,
} from "../styles/pages/Pokedex"
import { PokemonEntry, Pokemons } from "../types/pokemons"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
  const data: Pokemons = await response.json()
  const { pokemon_entries: pokemons } = data

  return {
    props: { pokemons, locale },
  }
}

const Home = ({ pokemons, locale }) => {
  const { t } = useTranslation()

  return (
    <CenteredContainer>
      <Link href="/" locale={locale}>
        <a>{t("GO_TO_HOME")}</a>
      </Link>
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
