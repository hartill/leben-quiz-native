import React from 'react'
import { WhiteContentContainer } from '../../Layout'
import { FlagBlack, FlagContainer, FlagRed, FlagYellow } from './styles'

interface IGameOver {}

const GameOver: React.FC<IGameOver> = () => {
  return (
    <WhiteContentContainer>
      <FlagContainer>
        <FlagBlack></FlagBlack>
        <FlagYellow></FlagYellow>
        <FlagRed></FlagRed>
      </FlagContainer>
    </WhiteContentContainer>
  )
}

export default GameOver
