import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import RenderText from './../../components/RenderText'

export default class Answers extends React.Component {
  constructor(props){
    super(props);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
  }

  renderAnswerOptions(question, selectedAnswer, showAnswer) {
    let output = []
    let disabled = false
    let checked = false
    if (showAnswer === true) {
      disabled = true
    }
    for (let i=0; i<question.answers.length; i++) {
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
      output.push (
        <TouchableHighlight
          onPress={() => {this.props.onAnswerSelected(question.answers[i].key, i, question.id)}}
          underlayColor='#fff'
          key={i}
          disabled={disabled}>
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
    return output
  }
  render() {
    return (
      <View style={styles.Answers}>
        {this.renderAnswerOptions(this.props.question, this.props.selectedAnswer, this.props.showAnswer)}
      </View>
    )
  }
}

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
});
