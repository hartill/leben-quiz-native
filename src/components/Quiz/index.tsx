import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../../theme'
import { WhiteContentContainer, ContentHeaderContainer } from '../Layout'

import RenderText from '../RenderText'
import Answers from './Answers'
import ImageLightbox from './ImageLightbox'
import { ContentHeaderLeft, ContentHeaderMain, QuestionContainer } from './styles'

interface IQuiz {
  headerColor: string
  images: any
  question: any
  showAnswer: Boolean
  selectedAnswer?: any
  onAnswerSelected?: Function
}

const Quiz: React.FC<IQuiz> = ({ headerColor, images, question, showAnswer, selectedAnswer, onAnswerSelected }) => {
  let quizHeaderColor = theme.colors.blue

  return (
    <WhiteContentContainer>
      <ContentHeaderContainer style={{ backgroundColor: quizHeaderColor }}>
        <ContentHeaderLeft>
          <RenderText style="h2" text={question.id} />
        </ContentHeaderLeft>
        <ContentHeaderMain>
          <RenderText style="h2" text={question.category} />
        </ContentHeaderMain>
      </ContentHeaderContainer>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: theme.colors.white,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          padding: 15,
        }}
      >
        <QuestionContainer>
          <RenderText style="p" text={question.question} />
          {question.image !== undefined ? <ImageLightbox question={question} images={images} /> : null}
        </QuestionContainer>
        <Answers question={question} showAnswer={showAnswer} selectedAnswer={selectedAnswer} onAnswerSelected={onAnswerSelected} />
      </ScrollView>
    </WhiteContentContainer>
  )
}

export default Quiz
