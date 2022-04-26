export type PokemonSpecies = {
    egg_groups: Array<{
        name: string
    }>
    flavor_text_entries: Array<{
        flavor_text: string,
        language: {
            name: string
        }
    }>
    genera: Array<{
        genus: string
    }>
    growth_rate: {
        name: string
    }
    habitat: {
        name: string 
    }
    shape: {
        name: string
    }

}