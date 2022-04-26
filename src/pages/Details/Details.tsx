import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getPokemonDetails } from "services/pokeApi"
import { MoveDetails } from "components/MoveDetails"
import { PokemonCompleteInfo } from "models/PokemonCompleteInfo"
import { formatPokemonValue } from "Util/formatPokemonValues"
import { formatPokemonNumber } from "Util/formatPokemonNumber"
import LoadingBall from "components/LoadingBall"
import * as S from "pages/Details/Details.style"
import { capitalizeFirstLetter } from "Util/captalize"

export const Details = () => {
  const [pokemonData, setPokemonData] = useState<PokemonCompleteInfo>(
    {} as PokemonCompleteInfo
  )

  const [loading, setLoading] = useState(true)
  const { pokemon } = useParams()
  const navigate = useNavigate()
  const { pokemonDetails, pokemonSpecies } = pokemonData

  const getPokemonData = useCallback(async () => {
    const pokemonInfo = await getPokemonDetails(pokemon)

    setPokemonData(pokemonInfo)
    setLoading(false)
  }, [pokemon])

  useEffect(() => {
    getPokemonData()
  }, [getPokemonData])

  const flavorTextEn = pokemonSpecies?.flavor_text_entries.find(
    (flavorText) => {
      return flavorText.language.name === "en"
    }
  )

  const getImgType = (type?: string, isBack?: boolean) => {
    return require("Assets/Images/" + type + (isBack ? "Back" : "") + ".png")
  }

  const statPercentage = (number: number) => {
    return (100 * number) / 255
  }

  const sortedMoveList = pokemonDetails?.moves.sort((move1, move2) => {
    return move1.move.name > move2.move.name ? 1 : -1
  })

  const statColor = (number: number) => {
    if (number < 40) {
      return "#fc5c65"
    }
    if (number < 80) {
      return "#fd9644"
    }
    if (number < 100) {
      return "#fed330"
    }
    if (number < 120) {
      return "#26de81"
    }
    if (number < 140) {
      return "#45aaf2"
    }
    return "#a55eea"
  }

  return (
    <S.Container>
      {loading ? (
        <LoadingBall />
      ) : (
        <>
          <S.DetailsHeader>
            <h1>{capitalizeFirstLetter(pokemon)}</h1>
            <h3>{pokemonSpecies.genera[7].genus}</h3>
            <p>#{formatPokemonNumber(pokemonDetails?.id)}</p>
          </S.DetailsHeader>

          {flavorTextEn && (
            <S.DescriptionContainer>
              <h3>Description</h3>
              <p>{flavorTextEn.flavor_text}</p>
            </S.DescriptionContainer>
          )}

          <S.InfoContainer>
            <h3>General info</h3>
            <span>
              <div>
                <h4>Height</h4>
                <p>{formatPokemonValue(pokemonDetails.height)} m</p>
              </div>
              <div>
                <h4>Weight</h4>
                <p>{formatPokemonValue(pokemonDetails.weight)} kg</p>
              </div>
              <div>
                <h4>Growth rate</h4>
                <p>{pokemonSpecies.growth_rate.name}</p>
              </div>
              <div>
                <h4>Egg group</h4>
                <p>{pokemonSpecies.egg_groups[0].name}</p>
                {pokemonSpecies.egg_groups[1]?.name && (
                  <p>and {pokemonSpecies.egg_groups[1].name}</p>
                )}
              </div>
              {pokemonSpecies.habitat?.name && (
                <div>
                  <h4>Habitat</h4>
                  <p>{pokemonSpecies.habitat.name}</p>
                </div>
              )}
              <div>
                <h4>Body shape</h4>
                <p>{pokemonSpecies.shape.name}</p>
              </div>
              <div>
                <h4>Abilities</h4>
                {pokemonDetails.abilities.map(({ ability }, index) => {
                  return (
                    <span key={index}>
                      <p>
                        {index + 1}: {ability.name}
                      </p>
                    </span>
                  )
                })}
              </div>
            </span>
          </S.InfoContainer>

          <S.Spirtes>
            <div>
              <h3>Pokemon sprite</h3>
              <S.Image
                src={pokemonData.pokemonDetails.sprites.front_default}
                background={getImgType(
                  pokemonDetails?.types[0].type.name,
                  true
                )}
                alt={`Pokemon Sprite Front`}
              />
              {pokemonData.pokemonDetails.sprites.back_default && (
                <S.Image
                  src={pokemonData.pokemonDetails.sprites.back_default}
                  background={getImgType(
                    pokemonDetails?.types[0].type.name,
                    true
                  )}
                  alt={`Pokemon Sprite Back`}
                />
              )}
            </div>

            <div>
              {pokemonData.pokemonDetails.sprites.front_shiny && (
                <>
                  <h3>Shiny form</h3>
                  <S.Image
                    src={pokemonData.pokemonDetails.sprites.front_shiny}
                    background={getImgType(
                      pokemonDetails?.types[0].type.name,
                      true
                    )}
                    alt={`Pokemon Sprite Back`}
                  />
                </>
              )}
              {pokemonData.pokemonDetails.sprites.back_shiny && (
                <S.Image
                  src={pokemonData.pokemonDetails.sprites.back_shiny}
                  background={getImgType(
                    pokemonDetails?.types[0].type.name,
                    true
                  )}
                  alt={`Pokemon Sprite Back`}
                />
              )}
            </div>
          </S.Spirtes>

          <S.Type>
            <div>
              <h3>Primary type</h3>
              <img
                src={getImgType(pokemonDetails?.types[0].type.name, false)}
                alt="Pokemon Type 1"
              />
            </div>
            {pokemonDetails?.types[1] && (
              <div>
                <h3>Secondary type</h3>{" "}
                <img
                  src={getImgType(pokemonDetails?.types[1].type.name, false)}
                  alt="Pokemon Type 2"
                />
              </div>
            )}
          </S.Type>

          <S.StatusContainer>
            <h3>Status</h3>
            {pokemonDetails?.stats.map(
              ({ base_stat, stat: { name } }, index) => {
                return (
                  <div className="statusBarContainer" key={index}>
                    <p>
                      <b>{`${capitalizeFirstLetter(name)}:`}</b>
                    </p>
                    <p>{base_stat}</p>
                    <S.StatusBar
                      statNumber={statPercentage(base_stat)}
                      color={statColor(base_stat)}
                    >
                      <div></div>
                    </S.StatusBar>
                  </div>
                )
              }
            )}
          </S.StatusContainer>

          <S.MovesContainer>
            <h3>Moves</h3>

            {sortedMoveList.map(({ move, version_group_details }, index) => {
              return (
                <div key={index}>
                  <MoveDetails
                    moveName={move.name}
                    moveUrl={move.url}
                    version_group_details={version_group_details}
                  />
                </div>
              )
            })}
          </S.MovesContainer>

          <S.BackButton onClick={() => navigate(-1)}>Back</S.BackButton>
        </>
      )}
    </S.Container>
  )
}
