import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../../../theme'
import RenderText from '../../RenderText'
import ProgressBar from './../ProgressBar'
import ConfirmModal from '../../ConfirmModal'
import { FooterContainer, FooterRight } from '../styles'

interface IMockExamFooter {
  viewProgress: boolean
  examCompleted: boolean
  showAnswer: boolean
  nextQuestion?: Function
  restart: Function
  progress: string[]
  numberOfQuestions: number
}

const MockExamFooter: React.FC<IMockExamFooter> = ({
  viewProgress,
  examCompleted,
  showAnswer,
  nextQuestion,
  restart,
  progress,
  numberOfQuestions,
}) => {
  const [modalOpen, setModalOpen] = useState(false)

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

  let buttonMarkup = []

  if (viewProgress || examCompleted) {
    buttonMarkup.push(
      <FooterRight onPress={() => openModal()} key="qf1">
        <RenderText style="p2" text="Neustart?" />
      </FooterRight>
    )
  } else if (showAnswer) {
    buttonMarkup.push(
      <FooterRight
        onPress={() => {
          nextQuestion ? nextQuestion() : null
        }}
        key="qf2"
      >
        <Icon name="arrow-forward" size={16} color="#fff" />
      </FooterRight>
    )
  } else {
    buttonMarkup.push(
      <FooterRight key="qf3" style={{ backgroundColor: theme.colors.midGrey }}>
        <Icon name="arrow-forward" size={16} color="#fff" style={{ opacity: 0.5 }} />
      </FooterRight>
    )
  }

  return (
    <FooterContainer>
      <ConfirmModal title="Neustart?" isOpen={modalOpen} onClose={() => closeModal()} onConfirm={handleCloseModalAndRestart} />
      <ProgressBar
        progressLength={progress.length}
        totalNumberOfQuestions={numberOfQuestions}
        progressColor={theme.colors.blue}
      />
      {buttonMarkup}
    </FooterContainer>
  )
}

export default MockExamFooter
