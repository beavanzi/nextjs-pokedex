export async function getStaticProps(context) {
  const response = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
  const data = await response.json()
  const { pokemon_entries } = data

  return {
    props: { pokemons: pokemon_entries },
  }
}

export default function Home(props) {
  const { pokemons } = props

  return (
    <div>
      <h1>Pokedex - Bea</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>{pokemon.pokemon_species.name}</li>
        ))}
      </ul>
    </div>
  )
}
