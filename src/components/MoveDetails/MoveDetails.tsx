import { PokemonMove } from "models/PokemonMove"
import { capitalizeFirstLetter } from "Util/captalize"
import { useState } from "react"
import { getPokemonMove } from "services/pokeApi"
import * as S from "./MoveDetails.style"

interface MoveDetailsProps {
  moveName: string
  moveUrl: string
  version_group_details: Array<{
    level_learned_at: number
    move_learn_method: {
      name: string
    }
  }>
}

export const MoveDetails = ({
  moveName,
  moveUrl,
  version_group_details,
}: MoveDetailsProps) => {
  const [move, setMove] = useState<PokemonMove>()
  const [toggleMoves, setToggleMoves] = useState(false)

  const getMoveDetails = async () => {
    if (!move) {
      const response = await getPokemonMove(moveUrl)
      setMove(response)
    }

    setToggleMoves(!toggleMoves)
  }

  const enMove = move?.flavor_text_entries.find(({ language }) => {
    return language.name === "en"
  })

  const learnMoveAt = version_group_details

  const closedPokeball = require("Assets/Images/miniPokeballClosed.png")
  const openPokeball = require("Assets/Images/miniPokeballOpen.png")

  return (
    <S.Container>
      <S.MoveDetailsButton onClick={getMoveDetails}>
        <b>{capitalizeFirstLetter(moveName)}</b>
        {toggleMoves ? (
          <img src={openPokeball} alt="Open pokeball" />
        ) : (
          <img src={closedPokeball} alt="Close pokeball" />
        )}
      </S.MoveDetailsButton>

      {move && toggleMoves && (
        <S.MoveInfoContainer>
          <span>
            <div className="arrow" />
          </span>
          <b>Description</b>
          <p>{enMove?.flavor_text}</p>
          <b>Damage class</b>
          <p>{move?.damage_class.name}</p>
          <b>Damage type</b>
          <p>{move?.type.name}</p>

          <b>Learned by</b>
          <p>{learnMoveAt[learnMoveAt.length - 1].move_learn_method.name}</p>

          {learnMoveAt[learnMoveAt.length - 1].move_learn_method.name ===
          "level-up" ? (
            <>
              <b>Learned at</b>
              <p>
                level {learnMoveAt[learnMoveAt.length - 1].level_learned_at}
              </p>
            </>
          ) : (
            <></>
          )}

          <b>Accuracy</b>
          <p>{move?.accuracy || "--"}</p>
          <b>Power</b>
          <p>{move?.power || "--"}</p>
          <b>Priority</b>
          <p>{move?.priority}</p>
          <b>PP</b>
          <p>{move?.pp}</p>
        </S.MoveInfoContainer>
      )}
    </S.Container>
  )
}
