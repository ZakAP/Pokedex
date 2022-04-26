import { Container } from "components/PokeCard/PokeCard.style"
import { PokemonStoreContext } from "global/PokemonStore"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

interface pokeCardProps {
  img?: string
  pokemonName?: string
}

export const PokeCard = ({ img, pokemonName }: pokeCardProps) => {
  const { setScrollPosition } = useContext(PokemonStoreContext)
  const navigate = useNavigate()

  const handleClick = () => {
    setScrollPosition(window.scrollY)
    navigate(`/${pokemonName}/details`)
  }

  const pokedexBack = require("Assets/Images/pokedexCardBack.png")
  const infoButtonBack = require("Assets/Images/info.png")

  return (
    <Container>
      <img
        className="cardBackground"
        src={pokedexBack}
        alt="Background pokedex device"
      />

      <div>
        <b>{pokemonName?.toUpperCase()}</b>
      </div>

      <img className="spriteScreen" src={img} alt={pokemonName} />

      {pokemonName?.includes("Zak") ? (
        <form action="https://www.linkedin.com/in/zak-almeida-phillips-5a789366/">
          <button type="submit">
            <div className="infoBorder">
              <span className="tooltiptext">
                Click here for more information
              </span>
              <img className="info" src={infoButtonBack} alt="Information I/" />
            </div>
          </button>
        </form>
      ) : (
        <button onClick={handleClick}>
          <div className="infoBorder">
            <span className="tooltiptext">Click here for more information</span>
            <img className="info" src={infoButtonBack} alt="Information I/" />
          </div>
        </button>
      )}
    </Container>
  )
}
