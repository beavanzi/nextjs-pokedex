import { theme, DefaultTheme, extendTheme } from "@chakra-ui/core"

// const customTheme: DefaultTheme = {
//   ...theme,
// }

const customTheme = extendTheme({
  colors: {
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
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "semi-bold",
        fontFamily: "Lilita One",
      },
      variants: {
        "blue-with-shadow": {
          bg: "#3b4cca",
          boxShadow: "-3px 3px 0px #3b4c55",
          borderWidth: "2px",
          borderColor: "#3b4c55",
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
    RotatablePokeball: {
      baseStyle: {
        _hover: {
          transform: "rotate(-30deg)",
        },
      },
    },
  },
})

export { customTheme }
