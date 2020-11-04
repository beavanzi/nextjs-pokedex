import GlobalStyle from "../styles/global"
import "../i18n"
import { ThemeContext } from "../context/themes/ThemeContext"

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext>
      {/* <GlobalStyle /> */}
      <Component {...pageProps} />
    </ThemeContext>
  )
}
