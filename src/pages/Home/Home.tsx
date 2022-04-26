import { useContext, useEffect, useState, useMemo, useCallback } from "react"
import * as S from "pages/Home/Home.style"
import { PokeCard } from "components/PokeCard"
import {
  getAllPokemonForms,
  getPokemonFormsWithName,
  getPokemonForm,
} from "services/pokeApi"
import { PokemonStoreContext } from "global/PokemonStore"
import { Header } from "components/Header"
import LoadingBall from "components/LoadingBall"
import { DefaultTheme } from "styled-components"

interface HomeProps {
  toggleTheme: () => void
  theme: DefaultTheme
}

export const Home = ({ toggleTheme, theme }: HomeProps) => {
  const {
    pokemonData,
    setPokemonData,
    filteredPokemons,
    setFilteredPokemons,
    scrollPosition,
    setScrollPosition,
  } = useContext(PokemonStoreContext)
  const [loading, setLoading] = useState(true)

  const getPokemonData = useCallback(
    async (limit: number, offset: number) => {
      setLoading(true)
      const pokemonList = await getAllPokemonForms(limit, offset)

      setPokemonData(pokemonList)
      setLoading(false)
    },
    [setPokemonData]
  )

  const getGen = (generation: number, quantityByGeneration: Array<number>) => {
    setLoading(true)
    const index = generation - 1
    let offset = 0
    for (let i = index - 1; i >= 0; i--) {
      offset += quantityByGeneration[i]
    }
    getPokemonData(quantityByGeneration[index], offset)
  }

  const filterPokemon = async (pokemonFilter: string) => {
    setLoading(true)
    const result = await getPokemonFormsWithName(pokemonFilter)
    setFilteredPokemons(result)
    setLoading(false)
  }

  const pokemonShowList = useMemo(() => {
    if (filteredPokemons.length > 0) {
      return filteredPokemons
    } else {
      return pokemonData
    }
  }, [filteredPokemons, pokemonData])

  const getMyFavorites = useCallback(async () => {
    const favoritesId = [
      3, 36, 91, 748, 478, 472, 547, 637, 
      706, 143, 461, 169, 134, 596, 303,
      105, 94, 282, 763, 132,
    ]
    const response = await Promise.all(
      favoritesId.map((id) => {
        return getPokemonForm(id)
      })
    )
    setPokemonData(response.map((res) => res.data))
  }, [setPokemonData])

  const getRandom = useCallback(async () => {
    let randomIds = []
    for(let i = 0; i < 6 ; i++ ) {
      randomIds.push(Math.floor(Math.random() * 898) + 1)
    }
    const response = await Promise.all(
      randomIds.map((id) => {
        return getPokemonForm(id)
      })
    )
    setPokemonData(response.map((res) => res.data))
  }, [setPokemonData])

  const onLoad = useCallback(() => {
    if (pokemonData.length > 0) {
      setLoading(false)
    }
    if (pokemonData.length === 0) {
      getRandom()
    }
  }, [pokemonData.length, getRandom])

  useEffect(() => {
    if (scrollPosition && !loading) {
      window.scrollTo(0, scrollPosition)
      setScrollPosition(0)
    }
  }, [loading, scrollPosition, setScrollPosition])

  useEffect(() => {
    onLoad()
  }, [onLoad])

  return (
    <S.Container>
      <Header
        getPokemonData={getPokemonData}
        getGen={getGen}
        filterPokemon={filterPokemon}
        toggleTheme={toggleTheme}
        theme={theme}
        getRandom={getRandom}
        getMyFavorites={getMyFavorites}
      />
      <S.Main>
        {loading ? (
          <LoadingBall />
        ) : (
          <S.PokemonGrid>
            {pokemonShowList.map(({ sprites, pokemon }) => {
              return (
                <PokeCard
                  img={sprites.front_default}
                  pokemonName={pokemon.name}
                  key={Math.random()}
                />
              )
            })}
          </S.PokemonGrid>
        )}
      </S.Main>
    </S.Container>
  )
}
