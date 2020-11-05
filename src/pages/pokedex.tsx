import {
  Button,
  Center,
  Container,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/core"
import { GetStaticProps } from "next"
import Link from "next/link"
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
      <Flex width="100%">
        <Wrap align="center" spacing="2" marginTop="3">
          {pokemons.map((pokemon: PokemonEntry) => (
            <WrapItem key={pokemon.entry_number}>
              <RedCard>
                <Link href={`/pokedex/${pokemon.entry_number}`}>
                  <a> {pokemon.pokemon_species.name}</a>
                </Link>
              </RedCard>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </LayoutMain>
  )
}

export default Pokedex
