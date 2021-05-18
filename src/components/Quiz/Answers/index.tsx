import React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import RenderText from '../../RenderText'

interface IAnswers {
  question: any
  showAnswer: Boolean
  selectedAnswer?: number
  onAnswerSelected?: Function
}

const Answers: React.FC<IAnswers> = ({ question, showAnswer, selectedAnswer, onAnswerSelected }) => {
  let output = []
  let disabled = false
  if (showAnswer === true) {
    disabled = true
  }
  for (let i = 0; i < question.answers.length; i++) {
    let answerHighlight = null
    if (showAnswer === true) {
      if (selectedAnswer !== null) {
        if (selectedAnswer === i) {
          answerHighlight = styles.incorrectAnswer
        }
        if (question.answers[i].key === 1) {
          answerHighlight = styles.correctAnswer
        }
      } else {
        if (question.answers[i].key === 1) {
          answerHighlight = styles.showCorrectAnswer
        }
      }
    }
    output.push(
      <TouchableHighlight
        onPress={() => {
          onAnswerSelected? onAnswerSelected(question.answers[i].key, i, question.id) : null
        }}
        underlayColor="#fff"
        key={i}
        disabled={disabled}
      >
        <View style={[styles.AnswerOption, answerHighlight]}>
          <View style={styles.AnswerText}>
            <RenderText style={answerHighlight !== null ? 'p2' : 'p'} text={question.answers[i].content} />
          </View>
          <View style={styles.AnswerSelection}>
            <Icon name="check-circle" size={16} color="#e6e6e6" />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  return <View style={styles.Answers}>{output}</View>
}

export default Answers

const styles = StyleSheet.create({
  Answers: {
    marginTop: 10,
  },
  AnswerOption: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  AnswerText: {
    flexBasis: '90%',
    paddingLeft: 5,
  },
  AnswerSelection: {
    flexBasis: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  incorrectAnswer: {
    backgroundColor: '#DD5152',
  },
  correctAnswer: {
    backgroundColor: '#2CC990',
  },
  showCorrectAnswer: {
    backgroundColor: '#11A6CE',
  },
})
