import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

import RenderText from './../../components/RenderText'
import Answers from './Answers'
import ImageLightbox from './ImageLightbox.js'

export default class QuizContainer extends React.Component {
  constructor(props) {
    super(props)
    let quizHeaderColor
  }

  render() {
    switch(this.props.mode) {
      case 2:
        this.quizHeaderColor = '#dd5152'
        break
      case 3:
        this.quizHeaderColor = '#2cc990'
        break
      default:
        this.quizHeaderColor = '#11a6ce'
    }
    return (
      <View style={styles.ContentContainer}>
        <View style={[styles.ContentHeaderContainer, {backgroundColor: this.quizHeaderColor}]}>
          <View style={styles.ContentHeaderLeft}>
            <RenderText style='h2' text={this.props.question.id} />
          </View>
          <View style={styles.ContentHeaderMain}>
            <RenderText style='h2' text={this.props.question.category} />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.ContentBody}>
          <View style={styles.Question}>
            <RenderText style='p' text={this.props.question.question} />
            {
              this.props.question.image !== undefined ? <ImageLightbox question = {this.props.question}/> : null
            }
          </View>
          <Answers
            question={this.props.question}
            showAnswer={this.props.showAnswer}
            selectedAnswer={this.props.selectedAnswer}
            onAnswerSelected={this.props.onAnswerSelected}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  ContentHeaderContainer: {
    flexBasis: 56,
    flexDirection: 'row',
    backgroundColor: '#37b1e3',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ContentHeaderLeft: {
    flexBasis: 56,
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
  }
});
