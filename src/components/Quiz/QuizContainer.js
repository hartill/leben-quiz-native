import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import RenderText from './../../components/RenderText'
import Answers from './Answers'

export default class QuizContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.ContentContainer}>
        <View style={styles.ContentHeaderContainer}>
          <View style={styles.ContentHeaderLeft}>
            <RenderText style='h2' text={this.props.question.id} />
          </View>
          <View style={styles.ContentHeaderMain}>
            <RenderText style='h2' text={this.props.question.category} />
          </View>
        </View>
        <View style={styles.ContentBody}>
          <RenderText style='p' text={this.props.question.question} />
          {
            //this.props.question.image !== undefined ? this.props.renderImage(image) : null
          }
          <Answers
            question={this.props.question}
            showAnswer={this.props.showAnswer}
            selectedAnswer={this.props.selectedAnswer}
            onAnswerSelected={this.props.onAnswerSelected}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 15,
  },
});
