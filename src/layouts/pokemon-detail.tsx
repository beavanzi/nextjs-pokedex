import NextLink from "next/link"

import { useTranslation } from "react-i18next"
import { Box, Grid, Heading } from "@chakra-ui/core"
import Image from "next/image"

interface Props {
  image?: string
  heading?: string
  text?: string
}

const LayoutPokemonDetails: React.FC<Props> = ({ image, heading, text }) => {
  const { t } = useTranslation()

  return (
    <Grid h="80" w="95%" templateColumns="1fr 2fr" gap={2}>
      <Box borderRadius="4px" bg="pokemons.blue.basic">
        {/* <Image src={image} unsized /> */}
      </Box>
      <Box borderRadius="4px" bg="pokemons.red.basic">
        {/* <Heading>{heading}</Heading> */}
      </Box>
    </Grid>
  )
}

export default LayoutPokemonDetails
