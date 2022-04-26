export type PokemonMove = {
    accuracy: number,
    damage_class: {
        name: string
    }
    flavor_text_entries: Array<{
        flavor_text: string,
        language: {
            name: string
        }
    }>
    name: string,
    power: number,
    pp: number,
    priority: number,
    type: {
        name: string
    }
}