import { Container, Heading } from "@chakra-ui/core"
import { GetStaticProps } from "next"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useFetch } from "../../hooks/useFetch"
import { Pokemons } from "../../types/pokemons"

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: { locale },
//   }
// }

const PokemonDetails = ({ locale }) => {
  const { t } = useTranslation()
  const { data, error } = useFetch<Pokemons, any>(
    "https://pokeapi.co/api/v2/pokedex/2/"
  )

  if (!data) {
    return <p> Carregando </p>
  }
  const { pokemon_entries: pokemons } = data

  return (
    <Container height="100vh" maxWidth="100%" bg="pokemons.yellow.basic">
      <Heading>Pokemon Especial</Heading>
    </Container>
  )
}

export default PokemonDetails
