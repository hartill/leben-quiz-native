import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import RenderText from './../../components/RenderText'

export default class Answers extends React.Component {
  constructor(props){
    super(props);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
  }

  renderAnswerOptions(question) {
    let output = []
    for (let i=0; i<question.answers.length; i++) {
      output.push (
        <TouchableHighlight onPress={null} key={i}>
          <View style={styles.AnswerOption}>
            <View style={styles.AnswerSelection}>
              <Icon name="check-circle" size={16} color="#e6e6e6" />
            </View>
            <RenderText style='p' text={question.answers[i].content} />
          </View>
        </TouchableHighlight>
      )
    }
    return output
  }
  render() {
    return (
      <View style={styles.Answers}>
        {this.renderAnswerOptions(this.props.question)}
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
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  AnswerSelection: {
    flexBasis: 22,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});
