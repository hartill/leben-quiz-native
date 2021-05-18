import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../../../theme'
import ConfirmModal from '../../ConfirmModal'

import RenderText from '../../RenderText'
import ProgressBar from '../ProgressBar'
import { FooterContainer, FooterRight } from '../styles'

interface IQuizFooter {
  viewProgress: boolean
  completed: boolean
  showAnswer: boolean
  nextQuestion?: Function
  displayAnswers?: Function
  restart: Function
  progress: string[]
  numberOfQuestions: number
}

const QuizFooter: React.FC<IQuizFooter> = ({
  viewProgress,
  completed,
  showAnswer,
  nextQuestion,
  displayAnswers,
  restart,
  progress,
  numberOfQuestions,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleCloseModalAndRestart = () => {
    restart()
    closeModal()
  }

  let output = []

  if (viewProgress || completed) {
    output.push(
      <FooterRight onPress={() => openModal()} key="qf1">
        <RenderText style="p2" text="Neustart?" />
      </FooterRight>
    )
  } else if (showAnswer) {
    output.push(
      <FooterRight
        onPress={() => {
          nextQuestion ? nextQuestion() : null
        }}
        key="qf2"

        style={{ backgroundColor: theme.colors.blue }}
      >
        <Icon name="arrow-forward" size={16} color="#fff" />
      </FooterRight>
    )
  } else {
    output.push(
      <FooterRight
        onPress={() => {
          displayAnswers ? displayAnswers() : null
        }}
        key="qf4"
      >
        <RenderText style="p2" text="Ich weiß nicht" />
      </FooterRight>
    )
  }

  return (
    <FooterContainer>
      <ConfirmModal title="Neustart?" isOpen={modalOpen} onClose={() => closeModal()} onConfirm={handleCloseModalAndRestart} />
      <ProgressBar progressLength={progress.length} totalNumberOfQuestions={numberOfQuestions} progressColor={theme.colors.green} />
      {output}
    </FooterContainer>
  )
}

export default QuizFooter
