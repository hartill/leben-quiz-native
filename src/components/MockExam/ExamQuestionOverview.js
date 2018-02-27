import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import RenderText from './../RenderText'

export default class ExamQuestionOverview extends React.Component {
  constructor(props) {
    super(props)
    this.renderUserProgress = this.renderUserProgress.bind(this)
  }

  renderUserProgress() {
    let output = []
    for (let i = 0; i < this.props.examProgress.length; i++) {
      let questionId = this.props.examProgress[i].questionId
      let userScore = this.props.examProgress[i].userScore
      let boxStyle
      if (userScore) {
        boxStyle = '#2CC990'
      } else {
        boxStyle = '#DD5152'
      }

      output.push(
        {key: questionId,
        boxStyle: boxStyle,
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
              <View style={[styles.QuestionOverviewBoxInner, {backgroundColor: item.boxStyle}]}>
                <RenderText
                  style='p2'
                  text={item.key}
                />
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
});
