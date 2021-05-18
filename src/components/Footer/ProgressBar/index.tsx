import React from 'react'
import RenderText from '../../RenderText'
import { ProgressContainer, ProgressIndicator } from './styles'

interface IProgressBar {
  progressLength: number
  totalNumberOfQuestions: number
  progressColor: string
}

const ProgressBar: React.FC<IProgressBar> = ({ progressLength, totalNumberOfQuestions, progressColor }) => {
  const userProgressPercent = Math.round(100 - (progressLength / totalNumberOfQuestions) * 100)
  const userProgressStyle = {
    right: userProgressPercent + '%',
    backgroundColor: progressColor,
  }

  return (
    <ProgressContainer>
      <ProgressIndicator style={userProgressStyle} />
      <RenderText style="p2" text={progressLength + ' / ' + totalNumberOfQuestions} />
    </ProgressContainer>
  )
}

export default ProgressBar
