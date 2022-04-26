import React, { useState } from "react";
import { PokemonForm } from "models/PokemonForm";

interface PokemonStoreProviderValues {
    pokemonData: Array <PokemonForm>,
    setPokemonData: (p: Array <PokemonForm>) => void,
    filteredPokemons: Array <PokemonForm>,
    setFilteredPokemons: (p: Array <PokemonForm>) => void,
    scrollPosition: number,
    setScrollPosition: (number: number) => void
}

export const PokemonStoreContext = React.createContext<PokemonStoreProviderValues>({} as PokemonStoreProviderValues)

export const PokemonStoreProvider = (props: {children: React.ReactNode}) => {
    const [pokemonData, setPokemonData] = useState<PokemonForm[]>([]);
    const [filteredPokemons, setFilteredPokemons] = useState<PokemonForm[]>([])
    const [scrollPosition, setScrollPosition ] = useState(0)

    return (
        <PokemonStoreContext.Provider value={{pokemonData, setPokemonData, filteredPokemons, setFilteredPokemons, scrollPosition, setScrollPosition }}>
            {props.children}
        </PokemonStoreContext.Provider>
    )
}

