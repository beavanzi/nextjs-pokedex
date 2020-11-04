import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
} from "@chakra-ui/core"
import { customTheme } from "../../styles/theme"

export const ThemeContext: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={customTheme}>
    <CSSReset />
    {children}
  </ChakraThemeProvider>
)
