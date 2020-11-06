import { Container, Link, Wrap, WrapItem } from "@chakra-ui/core"
import { GetStaticProps } from "next"
import NextLink from "next/link"
import React from "react"
import { useTranslation } from "react-i18next"
import RedCard from "../components/styled/RedCard"
import { useFetch } from "../hooks/useFetch"
import LayoutMain from "../layouts/main-with-header"
import { PokemonEntry, Pokemons } from "../types/pokemons"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { locale },
  }
}

const Pokedex = ({ locale }) => {
  const { t } = useTranslation()
  const { data, error } = useFetch<Pokemons, any>(
    "https://pokeapi.co/api/v2/pokedex/2/"
  )

  if (!data) {
    return <p> Carregando </p>
  }
  const { pokemon_entries: pokemons } = data

  return (
    <LayoutMain>
      <Container maxW="90%">
        <Wrap display="inline-flex" marginTop="3">
          {pokemons.map((pokemon: PokemonEntry) => (
            <WrapItem flexBasis="40" key={pokemon.entry_number}>
              <RedCard>
                <NextLink href={`/pokedex/${pokemon.entry_number}`} passHref>
                  <Link> {pokemon.pokemon_species.name}</Link>
                </NextLink>
              </RedCard>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </LayoutMain>
  )
}

export default Pokedex
