import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

import RenderText from './../RenderText'

export default class Results extends React.Component {
  constructor(props) {
    super(props)
    this.renderResults = this.renderResults.bind(this)
  }

  renderResults(examProgress) {
    let output = []
    let correctAnswers = 0
    let incorrectAnswers = 0
    for (let i = 0; i < this.props.examProgress.length; i++) {
      this.props.examProgress[i].userScore === 1 ? correctAnswers += 1 : incorrectAnswers += 1
    }
    let percentageCorrect = correctAnswers / this.props.numberOfQuestions * 100
    let testPassed = percentageCorrect >= 50 ? true : false
    let accentStyle = testPassed ? '#2CC990' : '#DD5152'
    output.push(
      <View style={styles.ResultBox} key='res1'>
        <View style={[styles.ContentHeaderContainer, {backgroundColor: accentStyle}]}>
          <View style={styles.ContentHeaderMain}>
          {
            testPassed ?
            <RenderText style='h2' text='Du hast bestanden' /> :
            <RenderText style='h2' text='Du hast nicht bestanden' />
          }
          </View>
        </View>
        <View style={styles.ContentBody}>
          <View style={styles.ResultRow}>
            <RenderText style='p' text='Ergebnis:' />
            <View style={[styles.ResultFinalPercentage, {backgroundColor: accentStyle}]}>
              <RenderText style='h2' text={percentageCorrect.toFixed(0) + '%'} />
            </View>
          </View>
          <View style={styles.ResultRow}>
            <RenderText style='p' text='Korrekte Antworten:' />
            <View style={styles.CorrectAnswers}>
              <RenderText style='h2' text={correctAnswers} />
            </View>
          </View>
          <View style={styles.ResultRow}>
            <RenderText style='p' text='Falsche Antworten:' />
            <View style={styles.IncorrectAnswers}>
              <RenderText style='h2' text={incorrectAnswers} />
            </View>
          </View>
        </View>
      </View>
    )
    return output
  }

  render() {
    return (
      <View style={styles.ContentContainer}>
          {this.renderResults()}
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
  ResultBox: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  ContentHeaderContainer: {
    flexBasis: 56,
    flexDirection: 'row',
    backgroundColor: '#37b1e3',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ContentHeaderMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentBody: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 15,
  },
  ResultFinalPercentage: {
    flexBasis: '20%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ResultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
  },
  CorrectAnswers: {
    flexBasis: '20%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2CC990',
  },
  IncorrectAnswers: {
    flexBasis: '20%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DD5152',
  },
});
