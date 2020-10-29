import Link from "next/link"
import Image from "next/image"
import { CenteredContainer, CenteredContent, Title } from "../styles/pages/Home"
import Head from "next/head"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <CenteredContainer>
        <CenteredContent>
          <Title>Bem vindo a Pokedex!</Title>
          <Image src="/pokemon-logo.png" width={360} height={120} />
          <Link href="/pokedex">
            <a>Navigate to Pokedex</a>
          </Link>
        </CenteredContent>
      </CenteredContainer>
    </div>
  )
}

export default Home
