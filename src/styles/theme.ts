import { extendTheme } from "@chakra-ui/core"

const colors = {
  pokemons: {
    red: {
      basic: "#FF0000",
      strong: "#CC0000",
    },
    blue: {
      basic: "#3B4CCA",
      strong: "#3b4c55",
    },
    yellow: {
      basic: "#FFDE00",
      strong: "#B3A125",
    },
  },
}

const customTheme = extendTheme({
  colors,
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semi-bold",
        fontFamily: "Lilita One",
      },
      variants: {
        "blue-with-shadow": {
          bg: "pokemons.blue.basic",
          boxShadow: "-3px 3px 0px #3b4c55",
          borderWidth: "2px",
          borderColor: "pokemons.blue.strong",
          color: "#e1e1e1",
          _hover: {
            bg: "#3b4caa",
          },
          _focus: {
            boxShadow: "-3px 3px 0px #3b4c55",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Luckiest Guy",
      },
      variants: {
        "red-with-shadow": {
          letterSpacing: " 3px",
          textShadow: "-3px 3px 0px #880000",
          color: "#ff0000",
        },
      },
    },
    Box: {
      baseStyle: {
        fontFamily: "Lilita One",
      },
      variants: {
        "red-card": {
          bg: "pokemons.red.basic",
          color: "#e1e1e1",
          borderWidth: "0.5",
          borderColor: "#880000",
          borderRadius: "1",
          fontSize: "4",
          textAlign: "center",
        },
      },
    },
  },
})

export { customTheme }
