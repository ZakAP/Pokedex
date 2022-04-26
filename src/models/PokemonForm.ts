export type PokemonForm = {
    pokemon: {
        name: string,
        url: string
    },
    sprites: {
        back_default: string,
        front_default: string
    },
    types: Array<{
        type: {
            name: string
        }
    }>
}

