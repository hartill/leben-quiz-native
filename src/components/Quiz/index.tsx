import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { theme } from '../../theme'
import { WhiteContentContainer } from '../Layout'

import RenderText from '../RenderText'
import Answers from './Answers'
import ImageLightbox from './ImageLightbox'

interface IQuiz {
  mode: number
  images: any
  question: any
  showAnswer: Boolean
  selectedAnswer?: any
  onAnswerSelected?: Function
}

const Quiz: React.FC<IQuiz> = ({
  mode,
  images,
  question,
  showAnswer,
  selectedAnswer,
  onAnswerSelected,
}) => {
  let quizHeaderColor = theme.colors.blue

  switch (mode) {
    case 2:
      quizHeaderColor = theme.colors.red
      break
    case 3:
      quizHeaderColor = theme.colors.green
      break
    default:
    // do nothing
  }
  return (
    <WhiteContentContainer>
      <View style={[styles.ContentHeaderContainer, { backgroundColor: quizHeaderColor }]}>
        <View style={styles.ContentHeaderLeft}>
          <RenderText style="h2" text={question.id} />
        </View>
        <View style={styles.ContentHeaderMain}>
          <RenderText style="h2" text={question.category} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.ContentBody}>
        <View style={styles.Question}>
          <RenderText style="p" text={question.question} />
          {question.image !== undefined ? <ImageLightbox question={question} images={images} /> : null}
        </View>
        <Answers question={question} showAnswer={showAnswer} selectedAnswer={selectedAnswer} onAnswerSelected={onAnswerSelected} />
      </ScrollView>
    </WhiteContentContainer>
  )
}

export default Quiz

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  ContentHeaderContainer: {
    flexBasis: 64,
    flexDirection: 'row',
    backgroundColor: '#37b1e3',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ContentHeaderLeft: {
    flexBasis: 64,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentHeaderMain: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  ContentBody: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 15,
  },
  Question: {
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 5,
  },
})
