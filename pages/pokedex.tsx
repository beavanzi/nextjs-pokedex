import { GetStaticProps } from "next"
import Link from "next/link"
import {
  ListItem,
  CenteredContainer,
  WrapContainer,
} from "../styles/pages/Pokedex"
import { PokemonEntry, Pokemons } from "../types/pokemons"

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
  const data: Pokemons = await response.json()
  const { pokemon_entries: pokemons } = data

  return {
    props: { pokemons },
  }
}

const Home = ({ pokemons }) => {
  return (
    <CenteredContainer>
      <Link href="/">
        <a>Navigate to Home</a>
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
