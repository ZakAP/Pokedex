import * as S from "components/Header/Header.style"
import { useContext, useState } from "react"
import { romanize } from "Util/romanize"
import { PokemonStoreContext } from "global/PokemonStore"
import Switch from "react-switch"
import { DefaultTheme } from "styled-components"
import zak from "Util/zak"

interface HeaderProps {
  getPokemonData: (limit: number, offset: number) => Promise<void>
  getGen: (generation: number, quantityByGeneration: Array<number>) => void
  filterPokemon: (pokemonFilter: string) => void
  toggleTheme: () => void
  getRandom: () => void
  theme: DefaultTheme
  getMyFavorites: () => void
}

export const Header = ({
  getPokemonData,
  getGen,
  filterPokemon,
  toggleTheme,
  theme,
  getRandom,
  getMyFavorites
}: HeaderProps) => {
  const [pokemonFilter, setPokemonFilter] = useState("")
  const { filteredPokemons, setFilteredPokemons } =
    useContext(PokemonStoreContext)
  const quantityByGeneration = [151, 100, 135, 107, 156, 72, 88, 89]
  const { title } = theme

  const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonFilter(event.target.value.toLowerCase())
  }

  const handleSearch = () => {
    if(pokemonFilter.includes("zak")) {
      setPokemonFilter("")
      setFilteredPokemons([...filteredPokemons, zak])
      return
    }
    if(pokemonFilter.includes("favorite")) {
      getMyFavorites()
      return
    }
    filterPokemon(pokemonFilter.trim())
  }

  const clear = () => {
    setFilteredPokemons([])
    setPokemonFilter("")
  }

  const handleRandomButton = () => {
    setFilteredPokemons([])
    setPokemonFilter("")
    getRandom()
  }

  const handleGetGen = (gen: number, quantityByGeneration: number[]) => {
    getGen(gen, quantityByGeneration)
    clear()
  }

  const handleGetAll = () => {
    getPokemonData(898, 0)
    clear()
  }

  const pokelupa = require("Assets/Images/pokelupa.png")
  const pokeBallLogo = require("Assets/Images/PokeBall.png")
  const pokeTitle = require("Assets/Images/title.png")
  const day = require("Assets/Images/switchEspeon.png")
  const night = require("Assets/Images/switchUmbreon.png")

  return (
    <S.Container>
      <div>
        <img className="title" src={pokeTitle} alt="Site Logo" />
      </div>

      <h3>Select a generation or search for a pokemon!</h3>

      <S.SwitchContainer>
          <img className="day" src={day} alt="Espeon sprite"/>
          <Switch
            className="switchButton"
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={30}
            handleDiameter={20} 
            offColor="#f3f3f3"
            onColor="#055ca3"
          />
          <img className="night" src={night} alt="Umbreon sprite"/>
        </S.SwitchContainer>

      <div>
        <img
          className="searchPokeball"
          src={pokeBallLogo}
          alt="Pokeball logo"
        />
        <div>
          <input
            type="text"
            onChange={onChangeFilter}
            value={pokemonFilter}
            placeholder="Search for any pokemon here!"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          ></input>
          {filteredPokemons.length > 0 && (
            <button className="clearButton" onClick={clear}>
              Clear
            </button>
          )}
        </div>

        <button onClick={handleSearch}>
          <div className="pokelupaBorder">
            <span className="tooltiptext">Click here to search</span>
            <img className="pokelupa" src={pokelupa} alt="Magnifying glass" />
          </div>
        </button>
      </div>

      <nav>
        {quantityByGeneration.map((_, index) => {
          const gen = index + 1

          return (
            <button
              onClick={() => handleGetGen(gen, quantityByGeneration)}
              key={index}
            >
              Gen {romanize(index + 1)}
            </button>
          )
        })}
        <button onClick={() => handleRandomButton()}>Random team</button>
        <button onClick={() => handleGetAll()}>All Generations</button>
        
      </nav>
    </S.Container>
  )
}
