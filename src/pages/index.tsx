import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

import { CenteredContainer, CenteredContent, Title } from "../styles/pages/Home"
import { useTranslation } from "react-i18next"

const Home = ({ locale }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <CenteredContainer>
        <CenteredContent>
          <Title>{t("WELCOME_POKEDEX")}</Title>
          <Image src="/pokemon-logo.png" width={360} height={120} />
          <Link href="/pokedex" locale={locale}>
            <a>{t("GO_TO_POKEDEX")}</a>
          </Link>
        </CenteredContent>
      </CenteredContainer>
    </div>
  )
}

export default Home
