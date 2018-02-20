import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import RenderText from './../../RenderText'

export default class QuestionOverview extends React.Component {
  constructor(props) {
    super(props)
  }

  renderUserProgress() {
    let output = []
    for (let i = 1; i < (this.props.numberOfQuestions + 1); i++) {
      let questionId = i.toString()
      let correctCount = false
      if (this.props.progress) {
        correctCount = this.props.progress.indexOf(questionId) < 0 ? false : true
      }
      let incorrectCount = 0
      if (this.props.incorrect) {
        if (this.props.incorrect.indexOf(questionId) >= 0) {
          incorrectCount  = this.props.incorrect.reduce(function(n, val) {
              return n + (val === questionId)
          }, 0)
        }
      }
      let boxStyle
      if (correctCount) {
        boxStyle = styles.Correct
      }

      output.push(
        {key: questionId,
        boxStyle: boxStyle,
        incorrectCount: incorrectCount,
        },
      )
    }
    return output
  }

  render() {
    return (
      <View style={styles.ContentContainer}>
        <FlatList
          style={styles.ContentContainer}
          numColumns='5'
          data={this.renderUserProgress()}
          renderItem={({item}) =>
            <View style={styles.QuestionOverviewBox} key={item.key}>
              <View style={[styles.QuestionOverviewBoxInner, item.boxStyle]}>
                <RenderText
                  style='p2'
                  text={item.key}
                />
                {item.incorrectCount > 0 ?
                  <View style={styles.IncorrectBox}>
                    <RenderText
                      style='pSmall'
                      text={item.incorrectCount + 'x'}
                    />
                  </View>
                  : null
                }
              </View>
            </View>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
  },
  QuestionOverviewBox: {
    width: '20%',
    aspectRatio: 1,
    padding: 2,
  },
  QuestionOverviewBoxInner: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#11A6CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Correct: {
    backgroundColor: '#2CC990',
  },
  IncorrectBox: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DD5152',
    borderRadius: 25,
  }
});
