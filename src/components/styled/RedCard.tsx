import { Box } from "@chakra-ui/core"

const RedCard: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Box
      bg="pokemons.red.basic"
      color="#e1e1e1"
      borderWidth="2px"
      borderColor="#880000"
      borderRadius="5px"
      fontSize="4"
      textAlign="center"
      fontFamily="Lilita One"
      width="100%"
      padding="2"
    >
      {children}
    </Box>
  )
}
export default RedCard
