export interface Pokemons {
  descriptions: Description[]
  id: number
  is_main_series: boolean
  name: string
  names: Name[]
  pokemon_entries: PokemonEntry[]
  region: Region
  version_groups: Region[]
}

export interface Description {
  description: string
  language: Region
}

export interface Region {
  name: string
  url: string
}

export interface Name {
  language: Region
  name: string
}

export interface PokemonEntry {
  entry_number: number
  pokemon_species: Region
}
