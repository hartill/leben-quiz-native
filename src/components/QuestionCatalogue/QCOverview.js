import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native'

import RenderText from './../RenderText'

export default class QCOverview extends React.Component {
  constructor(props) {
    super(props)
    this.renderQuestions = this.renderQuestions.bind(this)
  }

  renderQuestions() {
    let output = []
    for (let i = 1; i < (this.props.numberOfQuestions + 1); i++) {
      let questionId = i
      let questionActive = parseFloat(this.props.question.id) === questionId ? '#11A6CE' : 'rgba(0,0,0,0.3)'

      output.push(
        {key: questionId,
        boxStyle: questionActive,
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
          data={this.renderQuestions()}
          renderItem={({item}) =>
            <View style={styles.QuestionOverviewBox} key={item.key}>
            <TouchableHighlight
              onPress={() => {this.props.handleQuestionSelected(item.key)}}
              style={[styles.QuestionOverviewBoxInner, {backgroundColor: item.boxStyle}]}
              underlayColor='#fff'
              >
                <RenderText
                  style='p2'
                  text={item.key}
                />
              </TouchableHighlight>
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
